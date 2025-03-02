const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true }, // Match the frontend
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);