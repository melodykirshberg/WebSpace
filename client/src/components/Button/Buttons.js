import React from 'react';
import './Button.css'
import { Auth } from 'aws-amplify'
import { FaGoogle, FaEnvelope } from 'react-icons/fa'

function Buttons(props) {



    return (
        <div className=" container bCard">
            {/* <h2 className="bTitle">Web Space</h2> */}
            <img src={require("./image.png")} className="bPic" />
            <h4 className="bBio">Get to know better the people you are about to network with</h4>
            <div className="text-center">
                <button className="bGoogle"

                    onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
                    <FaGoogle className="mx-2 my-2" color='red' />
                    <p className="bGoogletext  my-2">Sign Up with Google</p>
                </button>
            </div>

            <button
                className="bEmail"

                onClick={() => props.updateFormState('email')}
            >
                <FaEnvelope className=" mx-2 my-1 text-white" />
                <p className="bEmailtext my-2">Sign Up with Email</p>
            </button>
        </div>
    );
}





export default Buttons;