const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
  created_date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Task", taskSchema);
