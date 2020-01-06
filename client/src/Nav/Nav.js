import React from 'react'
import "./Nav.css"

export default function Nav(props) {
    return (
        <nav className='nav' onClick={() => props.updateFormState('base')}>WebSpace
            </nav>
    )
}
