import React, { useReducer, useEffect, useState } from 'react';
import Nav from '../Nav/Nav.js'
import Buttons from '../Button/Buttons.js'

import Form from '../../Form'
import './Authentication.css'
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
            <div className="container">
                <Nav updateFormState={updateFormState} />
                <Form />
            </div>
        )
    }

    return (
        <div>
            <Nav updateFormState={updateFormState} />
            {userState.loading && (
                <div className="body">
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
                    <div className="body">
                        <h4>
                            Welcome {userState.user.signInUserSession.idToken.payload.email}
                        </h4>
                        <button
                            className="signOut"
                            onClick={signOut}
                        >
                            <FaSignOutAlt color='white' />
                            <p className="text">Sign Out</p>
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
    container: {
        height: '80vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    button: {
        width: '100%',
        maxWidth: 250,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px 16px',
        borderRadius: 2,
        boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        minHeight: 40
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
        marginLeft: -1
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    blackText: {
        color: 'black'
    },
    grayText: {
        color: 'rgba(0, 0, 0, .75)'
    },
    orangeText: {
        color: '#FF9900'
    }
}

export default Authentication;