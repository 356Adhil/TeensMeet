require('core-js/features/nullish-coalescing');
require('core-js/features/optional-chaining');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/participantsRoutes');

const PORT = 4000;
const MONGODB_URI = 'mongodb+srv://adhilakbar:1356Adhild@cluster0.cpkbij9.mongodb.net/Teens-Meet?retryWrites=true&w=majority';


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));


app.use('/', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
