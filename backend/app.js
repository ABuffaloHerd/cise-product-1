const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/Article-routes");

const app = express();

//middleware
app.use(express.json());
app.use("/articles", router);

const port = process.env.PORT || 5000;

app.use(express.static('../frontend/build'));

mongoose
  .connect(
    "mongodb+srv://Uname:PasswordsAreForL0s3rs@cluster0.syr1wnf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.log(err));
