// Import required modules
    const express = require('express');
    const router = express.Router();

    // Define routes
    router.get('/', (req, res) => {
      // Render dashboard page
      res.sendFile(__dirname + '/public/dashboard.html');
    });

    // Return router
    module.exports = router;
