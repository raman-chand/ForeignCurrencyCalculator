const express = require('express');

module.exports = {
	index(req, res){
		res.render('submit', {{amount: amount, convertToAmount: convertToAmount, exchangeRate: exchangeRate, success: req.flash('success')});
	}
};