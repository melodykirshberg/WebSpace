import React from 'react';
import './Button.css'


import { Auth } from 'aws-amplify'
import { FaGoogle, FaEnvelope } from 'react-icons/fa'

function Buttons(props) {
    return (
        <div style={styles.bCard}>
            <h2 style={styles.bTitle}>Web Space</h2>
            <img src="https://files.slack.com/files-pri/TNVE1EJD6-FS20PJ51R/image.png" style={styles.bPic} />
            <h4 style={styles.bBio}>Get to know better the people you are about to network with.. ? toughts?</h4>
            <button
                style={styles.bGoogle}
                onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
                <FaGoogle color='red' />
                <p style={styles.bGoogletext}>Sign Up with Google</p>
            </button>

            <button
                style={styles.bEmail}
                onClick={() => props.updateFormState('email')}
            >
                <FaEnvelope color='white' />
                <p style={{ ...styles.text }}>Sign Up with Email</p>
            </button>
        </div>
    );
}

const styles = {

    bCard: {
        boxShadow: "0 10px 6px -3px black",
        height: "100%",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderStyle: "solid",
        backgroundColor: "#D3D3D3"
    },
    bTitle: {
        fontSize: "200",
        fontWeight: "bold"
    },
    bPic: {
        width: "200px",
        // left: "44.12%",
        // right: "44.17%",
        // top: "26%",
        // bottom: "54.14%",
    },
    bBio: {
        fontSize: "10",
        color: "black",
        alignItems: "center"
    },
    bGoogle: {
        width: '120%',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
        maxWidth: 250,
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 9px',
        borderRadius: 4,
        cursor: 'pointer',
        border: 'none'

    },
    bGoogletext: {
        alignItems: "center",
        color: "rgba(0, 0, 0, .75)"
    },
    bEmail: {
        backgroundColor: '#db4437',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
        width: '120%',
        maxWidth: 250,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px 9px',
        borderRadius: 4,
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        minHeight: 40
    },
    bEmailtext: {
        color: 'yellow',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    icon: {
        height: 16,
        marginLeft: -1,
        alignItems: "center"
    }
}

export default Buttons;