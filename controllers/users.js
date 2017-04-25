const express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	jwt = require('jsonwebtoken'),
	config = require('../config/database'),
	User = require('../models/users');

module.exports = {
	register(req, res, next) {
		let newUser = new User ({
			name: req.body.name,
			email: req.body.email,
			employeeId: req.body.employeeId,
			password: req.body.password
		});

		// Add user to database
		User.addUser(newUser, (err, user) => {
			if(err) {
				res.json({ success: false, msg: "Failed to register new user." });
			} else {
				res.json({ success: true, msg: "Registered new user." });
			}
		});
	},
	authenticate(req, res, next) {
		const employeeId = req.body.employeeId,
			password = req.body.password;

		User.getUserByEmployeeId(employeeId, (err, user) => {
			if(err) throw err;
			if(!user) {
				return res.json({ success: false, msg: "User not found" });
			}
			User.comparePassword(password, user.password, (err, isMatch) => {
				if(err) throw err;
				// If password matches hash
				if(isMatch) {
					const token = jwt.sign(user, config.secret, {
						// An option for a user is a 1 week login duration
						expiresIn: 604800
					});
					res.json({
						success: true,
						token: 'JWT ' + token,
						user: {
							id: user._id,
							name: user.name,
							employeeId: user.employeeId,
							email: user.email
						}
					});
				} else {
					return res.json({ success: false, msg: "Password does not match." });
				}
			});
		});
	},
	// Protected Profile route
	profile(req, res, next) {
		// send profile data
		res.json({ user: req.user });
	}
}