const express = require('express'),
models = require('../models'),
fx = require('money'),
oxr = require('open-exchange-rates'),
config = require('../config/oxrKey');
oxr.set({app_id: config.key});

module.exports = {
  index(req, res){
    res.render('calculator', {});
  },
  convert(req, res){
    console.log(JSON.stringify(req.body));
    var fromCurrency = req.body.fromCurrency,
    toCurrency = req.body.toCurrency,
    amount = req.body.amount,
    convertToAmount,
    exchangeRate,
    note;
    if ( isNaN(amount) || ( amount == '' )) {
      note = "Please provide a numeric amount.";
      res.render('calculator', {note: note});
    } else {
      oxr.latest(function(){
        fx.rates = oxr.rates;
        fx.base = oxr.base;
        convertToAmount = (fx(amount).from(fromCurrency).to(toCurrency));
        exchangeRate = (convertToAmount / amount);
        console.log(convertToAmount);
        console.log(exchangeRate);
        res.render('calculator', {amount: amount, convertToAmount: convertToAmount, exchangeRate: exchangeRate, success: req.flash('success')});
      });
    }
  }
};