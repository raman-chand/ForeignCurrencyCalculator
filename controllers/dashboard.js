const express = require('express'),
	oxrConfig = require('../config/oxr'),
	config = require('../config/database'),
	oxr = require('open-exchange-rates'),
	fx = require('money');
oxr.set({app_id: oxrConfig.key});

module.exports = {
	index(req, res) {
		res.render('dashboard', {});
	},
	latest(req, res) {
		var rates;
		var base;
		oxr.latest(function() {
			rates = oxr.rates;
			base = oxr.base;
			console.log(base);
			console.log(oxr.rates.AUD);
			res.render('dashboard', {base: oxr.base, rates: rates.AUD, success: req.flash('success') });
		});
	},
	historical(req, res) {
		oxr.historical('2001-02-03', function() {
			console.log(oxr.rates);
		})
	}
};