const express = require('express'),
 Calculator = require('../models/calculator'),
 fx = require('money'),
 oxr = require('open-exchange-rates'),
 config = require('../config/oxrKey'),
 mongoose = require('mongoose'),
 db = mongoose.connection;
oxr.set({app_id: config.key});

module.exports = {
  index(req, res) {
    res.render('calculator', {});
  },
  convert(req, res, next){
    const fromCurrency = req.body.fromCurrency,
      toCurrency = req.body.toCurrency,
      amount = req.body.amount;
    var convertToAmount = 0.0;
    var exchangeRate = 0.0;

    let newCalculator = new Calculator({
      fromCurrency: req.body.fromCurrency,
      toCurrency: req.body.toCurrency,
      amount: req.body.amount
    });

    Calculator.addCalculator(newCalculator, (err, calculator) => {
      if(err){
        res.json({success: false, msg: "Something went wrong with the calculator"});
      }
      Calculator.getCalculator(fromCurrency, toCurrency, amount, function(err, calculator){
        if(err) throw err; 
        if(!calculator) {
          return res.json({success: false, msg: "Something went wrong with getting the calculations"});
        } else {
          // Calculations
          oxr.latest(function(){
            fx.rates = oxr.rates;
            fx.base = oxr.base;

            convertToAmount = (fx(amount).from(fromCurrency).to(toCurrency));
            exchangeRate = (convertToAmount / amount);

            res.render('calculator', {amount: amount, convertToAmount: convertToAmount, exchangeRate: exchangeRate, success: req.flash('success')});
          });
        }
      });
    });
  }
}