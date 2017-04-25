const express = require('express'),
	usersCon = require('../controllers/users'),
	passport = require('passport'),
	jwt = require('jsonwebtoken');

module.exports = {
	registerRouter() {
		const router = express.Router();

		router.use(function timeLog(req, res, next){
			console.log("Users Controller :: Time: ", Date.now());
			next();
		});
		router.post('/register', usersCon.register);
		router.post('/authenticate', usersCon.authenticate);
		router.get('/profile', passport.authenticate('jwt', {session: false}), usersCon.profile);

		return router;
	}
}