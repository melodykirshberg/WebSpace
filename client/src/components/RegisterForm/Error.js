import React from "react";


//this file holds the errors logic for the errors  that will be displayed to the user in case they dont meet our criteria when creating a profile.
//they must enter a name , email and a bio. This file it's being called in the RegisterForm.js


const Error = ({ touched, message }) => {
    if (!touched) {
        return <div className="form-message invalid">&nbsp;</div>;
    }
    if (message) {
        return <div className="form-message invalid">{message}</div>;
    }
    return <div className="form-message valid">all good</div>;
};

export default Error;