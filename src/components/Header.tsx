import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNote, setNotesList, switchSettings } from '../redux/actions'
import { noteInterface } from '../utils';
import { textContent } from './InputSection';
import '../style/css/side-menu.css'

export default function Header() {
    const dispatch = useDispatch()
    const notesList = useSelector((state: any) => state.notesList);
    const currentNote = useSelector((state: any) => state.currentNote);
    
    const handleSettingsButton = () => {

        // Updating current note content:
        dispatch(setCurrentNote({...currentNote, content: textContent}));

        // Saving current note:
        const updatedArr = notesList.map((note: noteInterface) => note.id === currentNote.id ? {...note, content: textContent} : note);
        dispatch(setNotesList(updatedArr));

        // Switch to creating note menu:
        dispatch(switchSettings());
    }

    return (
        <nav className='header'>
            <h1>Note-Taking-App</h1>
            <button onClick={handleSettingsButton} >Settings</button>
        </nav>
    )
}
