//router.js


const mongoose = require('mongoose');

const controller = require('./controller.js');

module.exports = (app) => {

	app.get(
		'/',
		controller.loadMain
	);

	app.get(
		'/find-movie',
		controller.findMovie
	);

	// 1.c Add (POST)
  app.post('/add-movie', controller.addMovie);

  // 1.d Delete (POST)
  app.post('/delete-movie', controller.deleteMovie);



}