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
        default: "n/a"

    },
    motives: {
        type: String,
        default: "Networking"

    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    picture: {
        type: String,
        default: "https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png"
    }
    ,

});


const User = mongoose.model("User", UserSchema);
module.exports = User;
