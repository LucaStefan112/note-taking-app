import { useEffect } from 'react'
import SideMenuListItem from './SideMenuListItem';
import { useSelector, useDispatch } from 'react-redux'
import { setNotesList, switchisCreatingNote } from '../redux/actions'
import { NOTES } from '../requests';
import { noteInterface } from '../utils';
import '../style/css/side-menu.css'

export default function SideMenu() {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);

    // Getting all notes from db:
    const loadNotesList = async () => {
        // Fetching data from server:
        fetch(NOTES.address)
            .then(response => response.json())
                .then(data => dispatch(setNotesList(data)))
                    .catch(err => console.log(err));
    }

    useEffect(() => {
        loadNotesList();
    }, [])

    return (
        <div className='side-menu'>
            {   // Render notes list:
                notesList.map((note: noteInterface) => <SideMenuListItem key={note.id} thisNote={note} />)
            }
            <button className='side-menu_add-note-button' onClick={() => dispatch(switchisCreatingNote())} >New note</button>
        </div>
    )
}
