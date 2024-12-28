// Import required modules
    const express = require('express');
    const router = express.Router();

    // Define routes
    router.get('/', (req, res) => {
      // Render login page
      res.sendFile(__dirname + '/public/login.html');
    });

    // Return router
    module.exports = router;
