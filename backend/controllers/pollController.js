const Poll = require('../models/poll');

// Create a new poll
exports.createPoll = async (req, res) => {
  try {
    const poll = new Poll(req.body);
    await poll.save();
    res.status(201).json(poll);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all polls
exports.getPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
