const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  source: { type: String, required: true },
  pubyear: { type: String, required: true },
  volume: { type: String, required: true },
  pages: { type: String, required: true },
  doi: { type: String, required: true },
});

module.exports = mongoose.model("Article", articleSchema);
