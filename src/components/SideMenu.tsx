import React, {useEffect} from 'react'
import SideMenuListItem from './SideMenuListItem';

import data from './data'

export default function SideMenu() {

    useEffect(() => {
        

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
