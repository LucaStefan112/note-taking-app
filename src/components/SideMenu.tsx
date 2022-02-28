import { useEffect } from 'react'
import SideMenuListItem from './SideMenuListItem';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNote, setNotesList, setNumberOfLines, switchisCreatingNote } from '../redux/actions'
import { NOTES } from '../requests';
import { countLinesOf, defaultNote, noteInterface } from '../utils';
import { textContent } from './InputSection';
import '../style/css/side-menu.css'

export default function SideMenu() {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);
    const currentNote = useSelector((state: any) => state.currentNote);

    // Getting all notes from db:
    const loadNotesList = () => {
        // Fetching data from server:
        fetch(NOTES.address)
            .then(response => response.json())
                .then(data => {
                    // Update notes list:
                    dispatch(setNotesList(data));

                    // Make current note last note:
                    const firstNote = data.length > 0 ? {...data[data.length - 1]} : defaultNote;
                    dispatch(setCurrentNote(firstNote))

                    // Update number of lines;
                    dispatch(setNumberOfLines(countLinesOf(firstNote.content)))
                })
                    .catch(err => console.log(err));
    }

    const addNoteButtonHandler = () => {

        // Updating current note content:
        dispatch(setCurrentNote({...currentNote, content: textContent}));

        // Saving current note:
        const updatedArr = notesList.map((note: noteInterface) => note.id === currentNote.id ? {...note, content: textContent} : note);
        dispatch(setNotesList(updatedArr));

        // Switch to creating note menu:
        dispatch(switchisCreatingNote());
    }

    useEffect(() => {
        loadNotesList();
    }, [])

    return (
        <div className='side-menu'>
            {   // Render notes list:
                notesList.map((note: noteInterface) => <SideMenuListItem key={note.id} thisNote={note} />)
            }
            <button className='side-menu_add-note-button' onClick={addNoteButtonHandler} >New note</button>
        </div>
    )
}
