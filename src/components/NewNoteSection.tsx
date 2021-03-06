import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchisCreatingNote, setNotesList, setCurrentNote, setNumberOfLines } from '../redux/actions'
import { countLinesOf, createJSONRequestObject, isNameForNoteValid } from '../utils'
import { NEW_NOTE } from '../requests'
import '../style/css/new-note-box.css'

export default function NewNoteSection() {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);
    const [newNoteName, setNewNoteName] = useState("");
    const [isNoteNameStringValid, setIsNoteNameStringValid] = useState(true);

    // Exiting new note section: 
    const cancelNewNote = () => dispatch(switchisCreatingNote());

    // Creating a new note:
    const createNewNote = () => {

        //Checking name's validity:
        if(!isNameForNoteValid(newNoteName, notesList)){

            // Displaying error message: 
            setIsNoteNameStringValid(false);
            return;
        }

        setIsNoteNameStringValid(true);

        try{
            // Fetching data to server:
            fetch(NEW_NOTE.address, createJSONRequestObject(NEW_NOTE.method, {name: newNoteName}))
                .then(response => response.json())
                    .then(data => {
                        // Updating notes list:
                        dispatch(setNotesList([...notesList, data]));

                        // Make new note current note:
                        dispatch(setCurrentNote(data));
                        
                        // Update line number:
                        dispatch(setNumberOfLines(countLinesOf(data.content)))
                    })
        } catch (err) {
            console.log(err);
        }

        // Exiting new note section:
        cancelNewNote();
    }

    const handleKeyDown = (e: any ) => {

        // Pressing "OK" button alternative - pressing "ENTER":
        if(e.key === 'Enter'){
            e.preventDefault();
            createNewNote();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
        
    })

    return (
        <div className='new-note-section'>
            <div className='new-note-section__background-shadow'/>
            <div className='new-note-section__input-container'>
                { !isNoteNameStringValid && <p className='new-note-section__error-message'>Name be unique, contain at least one alphanumeric character and it's length must be greater than 0 and less than 31</p>}
                <h1>New note name:</h1>
                <input className='new-note-section__input-box' type='text' autoFocus onChange={(e) => setNewNoteName(e.target.value)}/>
                <div className='new-note-section__buttons-container'>
                    <button className='new-note-section__button' onClick={cancelNewNote} >CANCEL</button>
                    <button className='new-note-section__button' onClick={createNewNote} >OK</button>
                </div>
            </div>
        </div>
    )
}
