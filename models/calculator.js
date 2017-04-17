const mongoose = require('mongoose'),
	bcrypt = require('bcryptjs'),
	config = require('../config/database');

const CalculatorSchema = mongoose.Schema({
	fromCurrency: {
		type: String,
		required: true
	},
	toCurrency: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true,
		min: 0
	}
});

const Calculator = module.exports = mongoose.model('Calculator', CalculatorSchema);

module.exports.addCalculator = function(newCalculator, callback){
	newCalculator.save(callback);
}

module.exports.getCalculator = function(fromCurrency, toCurrency, amount, callback){
	const query = {fromCurrency: fromCurrency, toCurrency: toCurrency, amount: amount};
	Calculator.findOne(query, callback);
}