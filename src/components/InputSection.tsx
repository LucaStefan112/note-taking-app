import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countLinesOf, createJSONRequestObject, defaultNote, noteInterface } from '../utils'
import { setCurrentNote, setNotesList, setNumberOfLines } from '../redux/actions'
import { UPDATE_NOTE, REMOVE_NOTE } from '../requests'
import '../style/css/input-section.css'

// Text area input:
export let textContent = '';

export function InputSection() {
    const dispatch = useDispatch();
    const currentNote = useSelector((state: any) => state.currentNote);
    const notesList = useSelector((state: any) => state.notesList);

    // By default, text area input is equal to current's note saved content:
    textContent = currentNote.content;

    // Changing text area content:
    const handleInputChange = (e: any) => {
        textContent = e.target.value;
        dispatch(setNumberOfLines(countLinesOf(textContent)));
    }

    // Handle keys:
    const handleKeyDown = (e: any ) => {

        // Saving the current note:
        if(e.key === 's' && e.ctrlKey ){
            e.preventDefault();

            // Fetching data to server:
            if(currentNote.id > 0){

                console.log("Saving note: ", {...currentNote, content: JSON.stringify(textContent)});
                fetch(UPDATE_NOTE.address, createJSONRequestObject(UPDATE_NOTE.method, {...currentNote, content: textContent}))
                    .catch(err => console.log(err));
            }
        }

        // Deleting current note:
        if(e.key === 'Delete'){

            // Fetching data to server:
            if(currentNote.id > 0){

                console.log("Deleting note: ", currentNote);
                fetch(REMOVE_NOTE.address, createJSONRequestObject(REMOVE_NOTE.method, {id: currentNote.id}))
                    .then(() => {
                        
                        //Removing current note:
                        const newArr = notesList.filter((note: noteInterface) => note.id !== currentNote.id);

                        // Updating notes list:
                        dispatch(setNotesList(newArr));

                        // Making last note current note:
                        const lastNote = newArr.length > 0 ? {...newArr[newArr.length - 1]} : defaultNote;
                        dispatch(setCurrentNote(lastNote));

                        // Update number of lines:
                        dispatch(setNumberOfLines(countLinesOf(lastNote.content)))
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
            {   
                currentNote.id > 0 && 
                <textarea key={Math.random()} autoFocus className='main-input__box' wrap='off'
                defaultValue={textContent} name="text-input" onChange={handleInputChange}/>
            }
        </div>
    )
}
