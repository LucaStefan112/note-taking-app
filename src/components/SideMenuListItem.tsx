import { countLinesOf, noteInterface } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentNote, setNotesList, setNumberOfLines } from '../redux/actions';
import { textContent } from './InputSection';

export default function SideMenuListItem({thisNote}: {thisNote: noteInterface}) {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);
    const currentNote = useSelector((state: any) => state.currentNote);

    // Selecting this note:
    function selectNote(){
        if(thisNote.name === currentNote.name)  return;

        console.log("Selected note: ", thisNote);

        // Saving previous note content in array:
        const newNotesList = notesList.map((note: noteInterface) => note.id === currentNote.id ? {...note, content: textContent} : note);
        dispatch(setNotesList(newNotesList));
        
        // Settin the new current note:
        dispatch(setCurrentNote(thisNote));

        //Updating number of lines:
        dispatch(setNumberOfLines(countLinesOf(thisNote.content)));
    }

    return (
        <div className='side-menu__list-item' onClick={selectNote}>
            <h3>{thisNote.name}</h3>
        </div>
    )
}
