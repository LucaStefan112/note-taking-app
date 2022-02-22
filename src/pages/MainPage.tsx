import React from 'react'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import NewNoteSection from '../components/NewNoteSection'
import { useSelector } from 'react-redux'

export default function MainPage() {
    const isCreatingNote = useSelector((state: any) => state.isCreatingNote)
    
    return (
        <div className='page-default'>
            <Header />
            <MainBody />
            { isCreatingNote && <NewNoteSection />}
        </div>
    )
}
