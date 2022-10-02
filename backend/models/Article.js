const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  doi: { type: String },
  date: { type: String, required: true },
  pages: { type: Number, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
});

module.exports = mongoose.model("Article", articleSchema);