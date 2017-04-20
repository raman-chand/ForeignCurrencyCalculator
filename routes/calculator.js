const express = require('express'),
	calculatorCon = require('../controllers/calculator');

module.exports = {
	registerRouter() {
		const router = express.Router();

		router.use(function timelog(req, res, next) {
			console.log("Currency Router:: Time: ", Date.now());
			next();
		});

		router.post('/', calculatorCon.index);
		router.get('/conversion', calculatorCon.submit);

		return router;
	}
}