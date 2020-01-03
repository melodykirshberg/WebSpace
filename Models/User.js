const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,

    },

    password: {
        type: String,
        trim: true,

        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    email: {
        type: String,
        trim: true,
        required: "Email is Required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    userCreated: {
        type: Date,
        default: Date.now
    },

});



const User = mongoose.model("User", UserSchema);
module.exports = User;
