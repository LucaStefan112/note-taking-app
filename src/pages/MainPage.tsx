import Header from '../components/Header'
import MainBody from '../components/MainBody'
import NewNoteSection from '../components/NewNoteSection'
import { useSelector } from 'react-redux'

export default function MainPage() {
    const isCreatingNote = useSelector((state: any) => state.isCreatingNote)
    const fontClass = 'font--valera-round'//useSelector((state: any) => state.fontClass);
    
    return (
        <div className={`page-default ${fontClass}`} >
            <Header />
            <MainBody />
            { isCreatingNote && <NewNoteSection />}
        </div>
    )
}