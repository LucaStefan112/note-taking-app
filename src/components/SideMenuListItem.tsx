import React from 'react'
interface ListItemInterface{
    name: string
}

export default function SideMenuListItem({name}: ListItemInterface) {
    return (
        <div className='side-menu__list-item'>
            <h2>{name}</h2>
        </div>
    )
}
