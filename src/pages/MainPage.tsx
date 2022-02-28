import Header from '../components/Header'
import MainBody from '../components/MainBody'
import NewNoteSection from '../components/NewNoteSection'
import Settings from '../components/Settings'
import { useSelector } from 'react-redux'

export default function MainPage() {
    const isCreatingNote = useSelector((state: any) => state.isCreatingNote)
    const fontClass = useSelector((state: any) => state.fontClass)
    const settings = useSelector((state: any) => state.settings)

    return (
        <div className={`page-default ${fontClass}`} >
            <Header />
            <MainBody />
            { isCreatingNote && <NewNoteSection />}
            { settings && <Settings />}
        </div>
    )
}