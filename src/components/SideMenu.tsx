import React, { useEffect } from 'react'
import SideMenuListItem from './SideMenuListItem';
import '../style/css/side-menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNote, setNotesList, switchisCreatingNote } from '../redux/actions'
import * as REQUESTS from '../requests'
import { noteInterface,createJSONRequestObject } from '../utils';
import { idText } from 'typescript';

export default function SideMenu() {
    const dispatch = useDispatch();
    const notesList = useSelector((state: any) => state.notesList);
    const currentNote = useSelector((state: any) => state.currentNote);
    let isSavingNote = false;

    const loadNotesList = async () => {
        // Fetching data to server:
        try{
            const response = await fetch(REQUESTS.NOTES.address);
            const data = await response.json();
            dispatch(setNotesList(data));
        } catch (err) {
            console.log(err);
        }
    }

    // Handle key presses:
    const handleKeyPress = () => {
        "NONO"
    }

    useEffect(() => {
        loadNotesList();
        window.addEventListener('keydown', handleKeyPress);

        return () => 
            window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className='side-menu'>
            {
                notesList.map((note: noteInterface) => 
                    <SideMenuListItem key={note.id} note={note} />
                )
            }
            <button className='side-menu_add-note-button' onClick={() => dispatch(switchisCreatingNote())} > New note</button>
        </div>
    )
}
