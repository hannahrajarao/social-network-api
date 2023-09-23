const express = require('express');
const { User, Thought } = require('../models');

const router = express.Router();

// Define your API routes here
// Example: GET /api/users
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().populate('thoughts friends');
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes for thoughts, reactions, etc.

module.exports = router;
