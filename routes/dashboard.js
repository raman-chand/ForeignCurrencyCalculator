const express = require('express'),
	dashboardCon = require('../controllers/dashboard');

module.exports = {
	registerRouter() {
		const router = express.Router();

		router.use(function timelog(req, res, next) {
			console.log("Dashboard Router:: Time: ", Date.now());
			next();
		});

		router.get('/', dashboardCon.index);

		return router;
	}
}