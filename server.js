const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/social-network', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// Middleware for handling JSON data
app.use(express.json());

// Use the API routes
app.use(apiRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
