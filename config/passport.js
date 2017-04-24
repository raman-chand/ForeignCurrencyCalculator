const JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt,
	User = require('../models/user'),
	config = require('../config/database');

module.exports = (passport) => {
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOfKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		// console.log(jwt_payload);
		User.getUserById(jwt_payload._doc._id, (err, user) => {
			if(err) return done(err, false);
			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));
}