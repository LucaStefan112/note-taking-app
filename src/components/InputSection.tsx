import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createJSONRequestObject, defaultNote } from '../utils'
import { setCurrentNote, setNotesList } from '../redux/actions'
import { UPDATE_NOTE, REMOVE_NOTE } from '../requests'
import '../style/css/input-section.css'

// Text area input:
export let textContent = '';

export function InputSection() {
    const dispatch = useDispatch();
    const currentNote = useSelector((state: any) => state.currentNote);
    const notesList = useSelector((state: any) => state.notesList);

    // By default, text area input is equal to current note saved content:
    textContent = currentNote.content;

    // Changing text area content:
    const handleInputChange = (e: any) => {
        textContent = e.target.value;
    }

    // Handle keys:
    const handleKeyDown = (e: any ) => {

        // Saving the current note:
        if(e.key === 's' && e.ctrlKey ){
            e.preventDefault();

            // Fetching data to server:
            if(currentNote.id > 0){
                
                console.log("Saved note: ", {...currentNote, content: textContent});
                fetch(UPDATE_NOTE.address, createJSONRequestObject(UPDATE_NOTE.method, {...currentNote, content: textContent}))
                    .catch(err => console.log(err));
            }
        }

        // Deleting current note:
        if(e.key === 'Delete'){

            // Fetching data to server:
            if(currentNote.id > 0){

                console.log("Deleted note: ", currentNote);
                fetch(REMOVE_NOTE.address, createJSONRequestObject(REMOVE_NOTE.method, {id: currentNote.id}))
                    .then(response => response.json())
                        // Recreating note list:
                        .then(data => {
                            dispatch(setNotesList(data)); 
                            dispatch(setCurrentNote({...defaultNote}))
                        })
                            .catch(err => console.log(err));
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    })

    return (
        <div className='main-input' >
            {   currentNote.id > 0 && 
                <textarea key={Math.random()} autoFocus className='main-input__box' wrap='off'
                defaultValue={textContent} name="text-input" onChange={handleInputChange}/>}
        </div>
    )
}
