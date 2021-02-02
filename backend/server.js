require('dotenv').config()

const express = require('express'); 
const mongoose = require('mongoose');
// const cors = require('cors');
const router = require('./routes/index');
const config = require("config");
const path = require('path')

const app = express(); 
const { PORT } = process.env
const MONGODB_URI = config.get('db');

// app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', router); 

//to get code working on azure
app.use(express.static('../client/build'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..","client", "build",     
  "index.html"));
});
