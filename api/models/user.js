const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    default: "",
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    default: "",
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    default: "",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
