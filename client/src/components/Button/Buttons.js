import React from 'react';
import { Auth } from 'aws-amplify';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import styles from './Button.module.css';

function Buttons(props) {
    return (
        <div className={styles["main"]}>
        <div style={styles.container}>
            <button
                style={{ ...styles.button, ...styles.google }}
                onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
                <FaGoogle color='red' />
                <p style={{ ...styles.text, ...styles.grayText }}>Sign Up with Google</p>
            </button>

            <button
                style={{ ...styles.button, ...styles.email }}
                onClick={() => props.updateFormState('email')}
            >
                <FaEnvelope color='white' />
                <p style={{ ...styles.text }}>Sign Up with Email</p>
            </button>
        </div>
            </div >
    );
}

export default Buttons;