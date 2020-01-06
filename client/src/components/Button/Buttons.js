import React from 'react';
import './Button.css'


import { Auth } from 'aws-amplify'
import { FaGoogle, FaEnvelope } from 'react-icons/fa'

function Buttons(props) {
    return (
        <div>
            <div className='container'>
                <button
                    className="button" 
                    onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
                    <FaGoogle color='red' />
                    <p className="text">Sign Up with Google</p>
                </button>

                <button
                    className="button"
                    onClick={() => props.updateFormState('email')}
                >
                    <FaEnvelope color='white' />
                    <p className="text">Sign Up with Email</p>
                </button>

            </div>
        </div>
    );
}


export default Buttons;