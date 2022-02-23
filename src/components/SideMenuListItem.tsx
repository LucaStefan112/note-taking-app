import React from 'react'
import { noteInterface } from '../utils'
import { useDispatch } from 'react-redux'
import { setCurrentNote } from '../redux/actions';

export default function SideMenuListItem({note}: {note: noteInterface}) {
    const dispatch = useDispatch();

    // Making clicked note current note:
    const changeCurrentNote = (note: noteInterface) => dispatch(setCurrentNote(note));

    return (
        <div className='side-menu__list-item' onClick={() => changeCurrentNote(note)}>
            <h2>{note.name}</h2>
        </div>
    )
}
