import React from 'react'
import '../style/css/new-note-box.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { switchisCreatingNote, setNotesList } from '../redux/actions'
import { createJSONRequestObject, hasAlphanum } from '../utils'
import * as REQUESTS from '../requests'

export default function NewNoteSection() {
    const dispatch = useDispatch();
    const [newNoteName, setNewNoteName] = useState("");
    const [isNoteNameStringValid, setIsNoteNameStringValid] = useState(true);

    // Exiting new note section: 
    const cancelNewNote = () => dispatch(switchisCreatingNote());
    
    // Creating a new note:
    const createNewNote = async () => {

        // Checking validity for current name:
        const nameValidity = 0 < newNoteName.length && newNoteName.length < 31 && hasAlphanum(newNoteName);
        
        if(!nameValidity){
            // Displaying error message: 
            setIsNoteNameStringValid(false)
            return;
        }

        setIsNoteNameStringValid(true);

        try{
            // Fetching data to server:
            const response = await fetch(REQUESTS.NEW_NOTE.address, createJSONRequestObject(REQUESTS.NEW_NOTE.method, {name: newNoteName}));
            const data = await response.json();

            // Updating notes list:
            dispatch(setNotesList(data))
        } catch (err) {
            console.log(err);
        }

        // Exiting new note section:
        cancelNewNote();
    }

    return (
        <div className='new-note-section'>
            <div className='new-note-section__background-shadow'/>
            <div className='new-note-section__input-container'>
                { !isNoteNameStringValid && <p className='new-note-section__error-message'>Name must contain at least one alphanumeric character and it's length must be greater than 0 and less than 31!</p>}
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
