const express = require('express');
const { createPoll, getPolls } = require('../controllers/pollcontroller');

const router = express.Router();

router.post('/', createPoll);
router.get('/', getPolls);

module.exports = router;
