import SideMenu from './SideMenu'
import {InputSection} from './InputSection'
import LineNumberColumn from './LineNumberColumn'

export default function MainBody() {
    
    return (
    <div className='body-main'>
        <SideMenu />
        <LineNumberColumn />
        <InputSection />
    </div>
    )
}
