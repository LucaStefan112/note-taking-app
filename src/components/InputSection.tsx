import React from 'react'
import '../style/css/input-section.css'
import { useSelector } from 'react-redux'
import { noteInterface } from '../utils'

export default function InputSection() {
    const currentNote = useSelector((state: any) => state.currentNote)

    return (
        <div className='main-input' >
            { currentNote && <textarea className='main-input__box' defaultValue={currentNote.content} name="text-input" onChange={(e) => console.log(e.target.value)}/>}
        </div>
    )
}
