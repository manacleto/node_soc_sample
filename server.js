'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
	'mongodb://localhost/movies',
	(err) => {
		if (err) {
			console.log('Error connecting to database');
		} else {
			console.log('DB connected');
		}
	}
);

// initialize server
const app = express();

// use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false } ));

// declare your model
const MovieSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  director: { type: String, default: '' },
  year: { type: Number, default: '' },
  actor: { type: String, default: '' },
  franchise: { type: String, default: '' }
});

//register model
mongoose.model('Movie', MovieSchema);

require('./router')(app);


app.listen(
  3000, 
  () => {
      console.log('Server started');
  }
);




	





