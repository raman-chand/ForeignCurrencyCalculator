const express = require('express'),
	oxrConfig = require('../config/oxr'),
	config = require('../config/database'),
	oxr = require('open-exchange-rates'),
	fx = require('money');
oxr.set({app_id: oxrConfig.key});

module.exports = {
	index(req, res) {
		res.render('dashboard/index', {});
	},
	latest(req, res) {
		var rates, base, AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, ILS, INR,
			JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, RUB, SEK, SGD, THB, TRY, USD, ZAR;
		oxr.latest(function() {
			rates = oxr.rates;
			base = oxr.base;
			console.log(base);
			console.log(oxr.rates.AUD);
		 	res.render('dashboard/latest', {
		 		AUD:rates.AUD, BGN:rates.BGN, BRL:rates.BRL, CAD:rates.CAD, CHF:rates.CHF, CNY:rates.CNY,
		 		CZK:rates.CZK, DKK:rates.DKK, EUR:rates.EUR, GBP:rates.GBP, HKD:rates.HKD, HRK:rates.HRK,
		 		HUF:rates.HUF, ILS:rates.ILS, INR:rates.INR, JPY:rates.JPY, KRW:rates.KRW, MXN:rates.MXN, 
		 		MYR:rates.MYR, NOK:rates.NOK, NZD:rates.NZD, PHP:rates.PHP, PLN:rates.PLN, RON:rates.RON, 
		 		RUB:rates.RUB, SEK:rates.SEK, SGD:rates.SGD, THB:rates.THB, TRY:rates.TRY, USD:rates.USD, 
		 		ZAR:rates.ZAR, success: req.flash('success') 
		 	});
		});
	},
	historical(req, res) {
		oxr.historical('2001-02-03', function() {
			console.log(oxr.rates);
			res.json(oxr.rates);
		})
	}
};