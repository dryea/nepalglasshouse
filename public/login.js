// Import required modules
    const express = require('express');
    const router = express.Router();

    // Define routes
    router.post('/', (req, res) => {
      // Handle POST request to /login URL
      const username = req.body.username;
      const password = req.body.password;
      if (!username || !password) {
        res.send('Please fill in both username and password');
      } else if (username.length < 3 || password.length < 3) {
        res.send('Username and password must be at least 3 characters long');
      } else if (username !== 'admin' || password !== '123') {
        res.send('Invalid username or password');
      } else {
        res.send('Login successful!');
      }
    });

    // Return router
    module.exports = router;
