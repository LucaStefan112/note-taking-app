import React, {useEffect, useState} from 'react'
import SideMenuListItem from './SideMenuListItem';
import '../style/css/side-menu.css'
import { useDispatch } from 'react-redux'
import * as ACTIONS from '../redux/actions'
interface dataInterface{
    id: number,
    name: string,
    content: string
}

export default function SideMenu() {
    const dispatch = useDispatch();
    const [data, setData] = useState<dataInterface[]>([]);

    useEffect(() => {
        fetch('http://localhost:4123/notes')
        .then(res => res.json())
        .then(thisData => setData(thisData))
    }, []);

    return (
        <div className='side-menu'>
            {
                data.map(element => 
                    <SideMenuListItem key={element.id} name={element.name} />
                )
            }
            <button className='side-menu_add-note-button' onClick={() => dispatch(ACTIONS.switchisCreatingNote())} > New note</button>
        </div>
    )
}
