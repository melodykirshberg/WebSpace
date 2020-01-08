import React, { useState, useReducer } from 'react'
import { Auth } from 'aws-amplify'
import "./Form.css";

const initialFormState = {
    username: '', password: '', email: '', confirmationCode: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'updateFormState':
            return {
                ...state, [action.e.target.name]: action.e.target.value
            }
        default:
            return state
    }
}

async function signUp({ username, password, email }, updateFormType) {
    try {
        await Auth.signUp({
            username, password, attributes: { email }
        })
        console.log('sign up success!')
        updateFormType('confirmSignUp')
    } catch (err) {
        console.log('error signing up..', err)
    }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
    try {
        await Auth.confirmSignUp(username, confirmationCode)
        console.log('confirm sign up success!')
        updateFormType('signIn')
    } catch (err) {
        console.log('error signing up..', err)
    }
}

async function signIn({ username, password }) {
    try {
        await Auth.signIn(username, password)
        console.log('sign in success!')
    } catch (err) {
        console.log('error signing up..', err)
    }
}

export default function Form(props) {
    const [formType, updateFormType] = useState('signUp')
    const [formState, updateFormState] = useReducer(reducer, initialFormState)
    function renderForm() {
        switch (formType) {
            case 'signUp':
                return (
                    <SignUp
                        signUp={() => signUp(formState, updateFormType)}
                        updateFormState={e => updateFormState({ type: 'updateFormState', e })}
                    />
                )
            case 'confirmSignUp':
                return (
                    <ConfirmSignUp
                        confirmSignUp={() => confirmSignUp(formState, updateFormType)}
                        updateFormState={e => updateFormState({ type: 'updateFormState', e })}
                    />
                )
            case 'signIn':
                return (
                    <SignIn
                        signIn={() => signIn(formState)}
                        updateFormState={e => updateFormState({ type: 'updateFormState', e })}
                    />
                )
            default:
                return null
        }
    }


    return (
        <div>
            <div>
                {renderForm(formState)}
            </div>
            { formType === 'signUp' && (
                    <p className="other">
                        Already have an account? <span
                            className="anchor"
                            onClick={() => updateFormType('signIn')}
                        >Sign In</span>
                    </p>
                )
            }
            
            { formType === 'signIn' && (
                    <p className="footer">
                        Need an account? <span
                            className="anchor"
                            onClick={() => updateFormType('signUp')}
                        >Sign Up</span>
                    </p>
                )
            }
        </div>
    )
}

function SignUp(props) {
    return (
        <div className="container">
            <input
                name='username'
                onChange={e => { e.persist(); props.updateFormState(e) }}
                className="input"
                placeholder='username'
            />
            <input
                name='email'
                onChange={e => { e.persist(); props.updateFormState(e) }}
                className="input"
                placeholder='email'
            />
            <input
                type='password'
                name='password'
                onChange={e => { e.persist(); props.updateFormState(e) }}
                className="input"
                placeholder='password'
            />
            <button onClick={props.signUp} className="button">
                Sign Up
      </button>
        </div>
    )
}

function SignIn(props) {
    return (
        <div className="container">
            <input
                name='username'
                onChange={e => { e.persist(); props.updateFormState(e) }}
                className="input"
                placeholder='username'
            />
            <input
                type='password'
                name='password'
                onChange={e => { e.persist(); props.updateFormState(e) }}
                className="input"
                placeholder='password'
            />
            <button className="button" onClick={props.signIn}>
                Sign In
      </button>
        </div>
    )
}

function ConfirmSignUp(props) {
    return (
        <div className="container">
            <input
                name='confirmationCode'
                placeholder='Confirmation Code'
                onChange={e => { e.persist(); props.updateFormState(e) }}
                className="input"
            />
            <button onClick={props.confirmSignUp} className="button">
                Confirm Sign Up
      </button>
        </div>
    )
}

