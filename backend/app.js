const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/Article-routes");

const app = express();

//middleware
app.use(express.json());
app.use("/articles", router);

mongoose
  .connect(
    "mongodb+srv://Uname:PasswordsAreForL0s3rs@cluster0.syr1wnf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .then(() => {
    app.listen(5000, () => console.log("Server started on port 5000"));
  })
  .catch((err) => console.log(err));
