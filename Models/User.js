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
        trim: true,
        default: "N/A"
    },
    email: {
        type: String,
        trim: true,
        required: "Email is Required",
        // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    profession: {
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
        default: "https://pathwayactivities.co.uk/wp-content/uploads/2016/04/Profile_avatar_placeholder_large-circle.png"
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;