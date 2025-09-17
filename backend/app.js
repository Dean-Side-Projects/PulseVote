const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('PulseVote API running!');
});

const pollRoutes = require('./routes/pollRoutes');
app.use('/polls', pollRoutes);

// Test JSON endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Hello from API' });
});

module.exports = app;
