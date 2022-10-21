const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  source: { type: String, required: true },
  pubyear: { type: String, required: true },
  volume: { type: String },
  pages: { type: Number, required: true },
  doi: { type: String }
});

module.exports = mongoose.model("Article", articleSchema);