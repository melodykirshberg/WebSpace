import React, { Component, useState, useReducer } from 'react'
import { Auth } from 'aws-amplify'
import "./Nav.css"

const intialFormState = {
    username: ''
}

function reducer(state, action) {
    switch(action.type) {
        case 'updateFormState':
            return {
                ...state, [action.e.target.name]:
                action.e.target.value
            }
            default:
                return state
    }
}

function Nav(props) {
    return (
        <nav className='nav' onClick={() => props.updateFormState('base')}>WebSpace
            </nav>
    )

}

export default Nav