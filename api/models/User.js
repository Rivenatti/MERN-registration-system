const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    default: "",
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    match: /^[a-zA-Z0-9_-]{3,16}$/
  },
  email: {
    type: String,
    default: "",
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/
  },
  organization: {
    type: String,
    default: "",
    required: true,
    match: /^[a-zA-Z0-9_-]{3,16}$/
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
