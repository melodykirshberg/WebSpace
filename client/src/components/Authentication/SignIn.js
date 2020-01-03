import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Amplify, { Auth } from 'aws-amplify';

import "./auth.css"


Amplify.configure({
    Auth: {
        // // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        // identityPoolId: "us-east-2:bea34141-1967-4ebb-8a88-133ef016b2ce",

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
            redirectSignIn: 'http://localhost:3000/home',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});


Auth.currentSession()
    .then(function (data) {
        const userName = data.idToken.payload.name
        const userEmail = data.idToken.payload.email
        const userImage = data.idToken.payload.picture
        console.log(data, userName, userEmail, userImage)
        API.saveUser({
            name: userName,
            email: userEmail

        })
            .then(res => console.log(res, "New User Added to webspacedb"))
            .catch(err => console.log(err));

    })



function GoogleBtnSignIn() {


    return (
        <div className="">
            <button className="signInBtn btn button" onClick={() => {

                Auth.federatedSignIn({ provider: "Google" })
            }}>Google signIn</button>
        </div >
    );
}

export default GoogleBtnSignIn;