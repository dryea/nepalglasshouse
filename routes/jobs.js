// Import required modules
    const express = require('express');
    const router = express.Router();

    // Define routes
    router.get('/', (req, res) => {
      // Get all jobs
      res.json([]);
    });

    // Return router
    module.exports = router;
