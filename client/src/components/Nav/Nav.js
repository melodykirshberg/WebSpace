import React, { Component } from "react";

import "./Nav.css"


function Nav(props) {
    return (
        <nav className='nav' onClick={() => props.updateFormState('base')}>WebSpace
            </nav>
    )

}

export default Nav