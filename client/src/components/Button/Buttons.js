import React from 'react';
import './Button.css'


import { Auth } from 'aws-amplify'
import { FaGoogle, FaEnvelope } from 'react-icons/fa'

function Buttons(props) {
    return (
        <div style={styles.main}>
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

const styles = {
    main: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "gainsboro"
    },

    container: {
        boxShadow: "0 10px 6px -3px black",
        display: "table",
        height: "65%",
        width: "50%",
        verticalAlign: "middle",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderStyle: "solid"
    },
    button: {
        width: '100%',
        maxWidth: 250,
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        padding: '0px 9px',
        borderRadius: 4,
        boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
        cursor: 'pointer',
        border: 'none'
        // minHeight: 20
    },
    email: {
        backgroundColor: '#db4437'
    },
    checkAuth: {
        backgroundColor: '#02bd7e'
    },
    signOut: {
        backgroundColor: 'black'
    },
    withAuthenticator: {
        backgroundColor: '#FF9900'
    },
    icon: {
        height: 16,
        marginLeft: -1,
        alignItems: "center"
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    blackText: {
        color: 'black',
        alignItems: 'center'
    },
    grayText: {
        color: 'rgba(0, 0, 0, .75)',
        alignItems: 'center'
    }
}

export default Buttons;