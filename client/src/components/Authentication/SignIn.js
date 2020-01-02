import React, { useState, useEffect } from 'react';
// import { Field, Form, Formik } from "formik"
import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);
import "./auth.css"



Amplify.configure({
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: "us-east-2:bea34141-1967-4ebb-8a88-133ef016b2ce",

        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_MMaYdTgZr',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '5fve03maej79fr292qrmvj5vjd',
        oauth: {
            domain: 'webspace.auth.us-east-2.amazoncognito.com/',
            // scope: ['phone', 'email', 'profile', 'openid'],
            redirectSignIn: 'http://localhost:3000/main',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});


const signin = ({ email, password }, setUser) => {
    Auth.signIn(email, password).then(user => {
        console.log("Success", user)
        setUser(user)
    })

        .catch(err => console.log("error", err));
}

function GoogleBtnSignIn() {

    const [user, setUser] = useState(null)
    useEffect(() => {

        console.log("testing")
        Auth.currentAuthenticatedUser({
            bypassCache: false
        }).then(user => console.log(user)).catch(err => console.log(err)
        )
    })



    return (
        <div className="">
            <button className="signInBtn btn button" onClick={() => {

                Auth.federatedSignIn({ provider: "Google" })
            }}>Google signIn</button>
        </div >
    );
}

export default GoogleBtnSignIn;
