import { noteInterface } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentNote, setNotesList } from '../redux/actions';
import { textContent } from './InputSection';

export default function SideMenuListItem({thisNote}: {thisNote: noteInterface}) {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);
    const currentNote = useSelector((state: any) => state.currentNote);

    // Selecting this note:
    function selectNote(){
        console.log("Selected note: ", thisNote);

        // Saving previous note content in array:
        const newNotesList = notesList.map((note: noteInterface) => note.id === currentNote.id ? {...note, content: textContent} : note);
        dispatch(setNotesList(newNotesList));
        
        // Settin the new current note:
        dispatch(setCurrentNote(thisNote));
    }

    return (
        <div className='side-menu__list-item' onClick={selectNote}>
            <h2>{thisNote.name}</h2>
        </div>
    )
}
