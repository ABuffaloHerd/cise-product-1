const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/Article-routes");
const path = require("path");
const app = express();

app.use(express.json);
app.use("/articles", router);
app.use(express.static(path.join(__dirname, "public")));

connectDB();

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));