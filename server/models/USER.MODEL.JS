const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
  typingSpeed: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
  errors: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  testResults: [testResultSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
