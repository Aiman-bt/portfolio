const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const model = mongoose.model("message", schema);
module.exports = model;
