const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    userCreated: {
        type: Date,
        default: Date.now
    },

});



const User = mongoose.model("User", UserSchema);
module.exports = User;
