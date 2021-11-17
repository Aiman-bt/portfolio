const mongoose = require("../connection");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  created: { type: Date, default: new Date() },
});
const messageSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  message: String,
  created: {type: Date, default: new Date()},
})

const userModel = mongoose.model("user", userSchema);
const messageModel  = mongoose.model("message", messageSchema);

module.exports = userModel;
module.exports = messageModel;
