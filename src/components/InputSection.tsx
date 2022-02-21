import React from 'react'

import '../style/css/input-section.css'

export default function InputSection() {
    return (
        <div className='main-input' >
            <textarea className='main-input__box' name="text-input" onChange={(e) => console.log(e.target.value)}/>
        </div>
    )
}
