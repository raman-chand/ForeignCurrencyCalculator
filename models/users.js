const mongoose = require('mongoose'),
	bcrypt = require('bcryptjs'),
	config = require('../config/database');

// User Schema + properties
const UserSchema = mongoose.Schema({
	employeeId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// Create mongoose model that takes in the name of the model and the schema as parameters
const User = module.exports = mongoose.model('User', UserSchema);

// Use functions outside the models using module.exports
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

// Find a user by their username
module.exports.getUserByEmployeeId = (employeeId, callback) => {
	const query = {employeeId: employeeId};
	User.findOne(query, callback);
}

// Add a new User
module.exports.addUser = (newUser, callback) => {
	// Hash the password
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			// Create Hash
			newUser.password = hash;
			// Persist user to db
			newUser.save(callback);
		});
	});
}

// Login User
module.exports.comparePassword = (loginPassword, hash, callback) => {
	bcrypt.compare(loginPassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}