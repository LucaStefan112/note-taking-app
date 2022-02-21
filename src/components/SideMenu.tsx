import React, {useEffect, useState} from 'react'
import SideMenuListItem from './SideMenuListItem';

interface dataInterface{
    id: number,
    name: string,
    content: string
}

export default function SideMenu() {
    const [data, setData] = useState<dataInterface[]>([]);

    useEffect(() => {
        fetch('http://localhost:4123/files')
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
        </div>
    )
}
