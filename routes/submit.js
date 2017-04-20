const express = require('express'),
	submitCon = require('../controllers/submit');

module.exports = {
	registerRouter() {
		const router = express.Router();

		router.use(function timeLog(req, res, next){
			console.log("Index Controller :: Time: ", Date.now());
			next();
		})

		router.get('/', submitCon.index);

		return router;
	}
}