const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

// look for build of react app
if (process.env.NODE_ENV === 'production') {
    console.log("true")
    app.use(express.static('frontend/build'));
}

app.get("/", (req, res) => res.send("Test"));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
