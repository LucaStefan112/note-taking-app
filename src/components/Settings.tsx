import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { switchSettings } from '../redux/actions';
import '../style/css/settings-box.css'

export default function Settings() {
    const dispatch = useDispatch();

    // Exiting new note section: 
    const cancelSettings = () => dispatch(switchSettings());

    const handleKeyDown = (e: any ) => {
        console.log(e.key);
        // Pressing "OK" button alternative - pressing "ESCAPE":
        if(e.key === 'Escape'){
            e.preventDefault();
            cancelSettings();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
        
    })

    return (
        <div className='settings'>
            <div className='settings__background-shadow'/>
            <div className='settings__input-container'>
                <h1>Settings:</h1>
                {/* TO IMPLEMENT FONTS AND THEME SWITCH */}
                <div className='settings__buttons-container'>
                    <button className='settings__button' onClick={cancelSettings} >OK</button>
                </div>
            </div>
        </div>
    )
}
