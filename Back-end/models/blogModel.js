const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  img: String,
  description: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("blog", schema);
module.exports = model;
