const express = require('express');
    const app = express();
    const { MongoClient } = require('mongodb');

    // Connect to MongoDB (This part is likely unnecessary for this simple example)
    // const url = 'mongodb://localhost/ngh-software';
    // const client = new MongoClient(url);

    app.use(express.json()); // for parsing application/json
    app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.use('/users', require('./routes/users'));
    app.use('/orders', require('./routes/orders'));
    app.use('/jobs', require('./routes/jobs'));
    app.use('/inventory', require('./routes/inventory'));

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/login.html');
    });
    app.get('/login', (req, res) => {
      res.sendFile(__dirname + '/public/login.html');
    });
    app.post('/login', (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      if (username.length < 3 || password.length < 3) {
        res.send('Username and password must be at least 3 characters long');
      } else if (username === 'admin' && password === '123') {
        res.redirect('/dashboard'); 
      } else {
        res.send('Invalid username or password');
      }
    });
    app.get('/dashboard', (req, res) => {
      res.sendFile(__dirname + '/public/dashboard.html');
    });

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
