import React from 'react'
import '../style/css/new-note-box.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { switchisCreatingNote } from '../redux/actions'
import * as REQUESTS from '../requests'

export default function NewNoteSection() {
    const dispatch = useDispatch();
    const [newNoteName, setNewNoteName] = useState("");

    const cancelNewNote = () => dispatch(switchisCreatingNote());
    const createNewNote = async () => {
        try{
            const data = await fetch('http://localhost:4123/new-note', { 
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: newNoteName})
            })
            
            const content = await data.json();

            console.log(content);
        } catch (err) {
            console.log(err);
        }

        cancelNewNote();
    }

    return (
        <div className='new-note-section'>
            <div className='new-note-section__background-shadow'/>
            <div className='new-note-section__input-container'>
                <h1>New note name:</h1>
                <input className='new-note-section__input-box' type='text' autoFocus onChange={(e) => setNewNoteName(e.target.value)}/>
                <div className='new-note-section__buttons-container'>
                    <button className='new-note-section__button' onClick={cancelNewNote} >CANCEL</button>
                    <button className='new-note-section__button' onClick={createNewNote} >OK</button>
                </div>
            </div>
        </div>
    )
}
