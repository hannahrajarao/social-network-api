const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');
const usersData = require('./usersData.json');
const thoughtsData = require('./thoughtsData.json');
const reactionsData = require('./reactionsData.json');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Function to seed the database using bulkWrite
async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    // Create bulk write operations
    const userOps = usersData.map(user => ({
      insertOne: { document: user }
    }));

    const thoughtOps = thoughtsData.map(thought => ({
      insertOne: { document: thought }
    }));

    const reactionOps = reactionsData.map(reaction => ({
      insertOne: { document: reaction }
    }));

    // Execute bulk write operations
    await User.bulkWrite(userOps);
    await Thought.bulkWrite(thoughtOps);
    await Reaction.bulkWrite(reactionOps);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Seed the database
seedDatabase();
