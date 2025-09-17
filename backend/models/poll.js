const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  votes: { type: Map, of: Number, default: {} }
});

module.exports = mongoose.model('Poll', pollSchema);
