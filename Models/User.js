const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required",

    },

    bio: {
        type: String,


    },
    email: {
        type: String,
        trim: true,
        required: "Email is Required",
        // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    website: {
        type: String,
        trim: true,

    },

    company: {
        type: String,
        trim: true,

    },
    motives: {
        type: String,

    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    picture: {
        type: String
    }


});


const User = mongoose.model("User", UserSchema);
module.exports = User;
