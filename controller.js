'use strict'

const mongoose = require('mongoose');

// create a model object
const Movie = mongoose.model('Movie');

//loadMain
exports.loadMain = (req, res) => {
		  res.send('Hello World');
}

//findMovie
exports.findMovie = (req, res) => {
			  const title = req.query.title;

			  Movie.findOne({ title }, (err, movie) => {
			    if (!err) {
			      res.send(movie);
			    } else {
			      res.send('Nothing Found');
			    }
			  })
}		

exports.addMovie = (req, res) => {
  ...
}

exports.deleteMovie = (req, res) => {
  ...
}












