const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  key: { type: Number, required: false },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: false},
  tags: { type: String, required: true},
  status:{ type: String, required: false}
});

module.exports = mongoose.model("Article", articleSchema);