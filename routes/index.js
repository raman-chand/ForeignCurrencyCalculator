const express = require('express'),
	indexCon = require('../controllers/index');

module.exports = {
	registerRouter() {
		const router = express.Router();

		router.use(function timeLog(req, res, next){
			console.log("Index Controller :: Time: ", Date.now());
			next();
		})

		router.get('/', indexCon.index);

		return router;
	}
}