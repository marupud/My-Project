// Import required modules
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Create an Express app
const app = express();

// Use the cors middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get users
app.get('/api/users', (req, res) => {
  // Read users.json file
  fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    // Parse JSON data and send it as response
    res.json(JSON.parse(data));
  });
});

// Endpoint to add a new user
app.post('/api/users', (req, res) => {
  // Read users.json file
  fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    // Parse JSON data
    let users = JSON.parse(data);
    
    // If users is not an array, initialize it as an empty array
    if (!Array.isArray(users)) {
      users = [];
    }

    // Add new user to the array
    users.push({ username: req.body.username, password: req.body.password });
    
    // Write updated data back to the file
    fs.writeFile(path.resolve(__dirname, 'users.json'), JSON.stringify(users), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      // Send success response
      res.status(201).json({ message: 'User created successfully' });
    });
  });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
