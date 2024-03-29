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

app.use(routes);
//Connection to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/webspacedb",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to the webspaceDB!"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`======> App listenning on  ${PORT}!`);
});