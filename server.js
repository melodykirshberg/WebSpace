const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const routes = require("./routes");

dotenv.config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


//Connection to DB
mongoose.connect("mongodb + srv://cibellem:root@cluster0-nxnod.mongodb.net/webspacedb?retryWrites=true&w=majority",
    { useNewUrlParser: true }, () => console.log("Connected to the webspaceDB!"));
// Define API routes here

// app.get("/", function (req, res) {
//     res.send("Test");
// })

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> App listenning on  ${PORT}!`);
});
