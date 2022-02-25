import { useEffect } from 'react'
import SideMenuListItem from './SideMenuListItem';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNote, setNotesList, switchisCreatingNote } from '../redux/actions'
import { NOTES } from '../requests';
import { defaultNote, noteInterface } from '../utils';
import '../style/css/side-menu.css'

export default function SideMenu() {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);

    // Getting all notes from db:
    const loadNotesList = async () => {
        // Fetching data from server:
        fetch(NOTES.address)
            .then(response => response.json())
                .then(data => {
                    // Update notes list:
                    dispatch(setNotesList(data));

                    // Make current note last note:
                    if(data.length > 0) dispatch(setCurrentNote(data[data.length - 1]));
                    else dispatch(setCurrentNote(defaultNote))
                })
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
