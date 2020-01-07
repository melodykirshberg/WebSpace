import React, { useReducer, useEffect, useState } from 'react';
import Nav from '../Nav/Nav.js'
import Buttons from '../Button/Buttons.js'

import Form from '../../Form'
import { Hub, Auth } from 'aws-amplify'
import { FaSignOutAlt } from 'react-icons/fa'

const initialUserState = { user: null, loading: true }

function Authentication() {

    const [userState, dispatch] = useReducer(reducer, initialUserState)
    const [formState, updateFormState] = useState('base')

    useEffect(() => {
        // set listener for auth events
        Hub.listen('auth', (data) => {
            const { payload } = data
            if (payload.event === 'signIn') {
                setImmediate(() => dispatch({ type: 'setUser', user: payload.data }))
                setImmediate(() => window.history.pushState({}, null, 'http://localhost:3000/'))
                updateFormState('base')
            }
            // this listener is needed for form sign ups since the OAuth will redirect & reload
            if (payload.event === 'signOut') {
                setTimeout(() => dispatch({ type: 'setUser', user: null }), 350)
            }
        })
        // we check for the current user unless there is a redirect to ?signedIn=true 
        if (!window.location.search.includes('?signedin=true')) {
            checkUser(dispatch)
        }
    }, [])

    // This renders the custom form
    if (formState === 'email') {
        return (
            <div>
                <Nav updateFormState={updateFormState} />
                <Form />
            </div>
        )
    }

    return (
        <div>
            <Nav updateFormState={updateFormState} />
            {userState.loading && (
                <div style={styles.body}>
                    <p>Loading...</p>
                </div>
            )
            }
            {
                !userState.user && !userState.loading && (
                    <Buttons updateFormState={updateFormState} />
                )
            }
            {
                userState.user && userState.user.signInUserSession && (
                    <div style={styles.body}>
                        <h4>
                            Welcome {userState.user.signInUserSession.idToken.payload.name}
                        </h4>
                        <button
                            style={{ ...styles.button, ...styles.signOut }}
                            onClick={signOut}
                        >
                            <FaSignOutAlt color='white' />
                            <p style={{ ...styles.text }}>Sign Out</p>
                        </button>
                    </div>
                )
            }
        </div>
    )
}


//REDUCER
function reducer(state, action) {
    switch (action.type) {
        case 'setUser':
            return { ...state, user: action.user, loading: false }
        case 'loaded':
            return { ...state, loading: false }
        default:
            return state
    }
}


//CHECK USER FUNCTION
async function checkUser(dispatch) {
    try {
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
        dispatch({ type: 'setUser', user })
    } catch (err) {
        console.log('err: ', err)
        dispatch({ type: 'loaded' })
    }
}


//SIGN OUT FUNCTION
function signOut() {
    Auth.signOut()
        .then(data => {
            console.log('signed out: ', data)
        })
        .catch(err => console.log(err));
}

    const styles = {        
    }

export default Authentication;