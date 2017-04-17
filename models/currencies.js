const mongoose = require('mongoose'),
	bcrypt = require('bcryptjs'),
	config = require('../config/database');

const CurrencySchema = mongoose.Schema({
	base: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	}
	rates: {
		symbol: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			required: true
		}
	}

});

const Currency = module.exports = mongoose.model('Currency', CurrencySchema);

module.exports.addCurrency = function(newCurrency, callback){
	newCurrency.save(callback);
}