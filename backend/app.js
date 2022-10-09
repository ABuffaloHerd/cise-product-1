const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/Article-routes");
const path = require("path");
var cors = require('cors');

const app = express();

app.use(express.json);
app.use("/articles", router);
app.use(express.static(path.join(__dirname, "public")));

// routes
const articles = require('./routes/Article-routes');

connectDB();

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/Article-routes', articles);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));