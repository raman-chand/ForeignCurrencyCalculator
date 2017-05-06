const express = require('express'),
Calculator = require('../models/calculator'),
fx = require('money'),
oxr = require('open-exchange-rates'),
config = require('../config/oxr'),
mongoose = require('mongoose'),
db = mongoose.connection;
oxr.set({app_id: config.key});

module.exports = {  
  index(req, res, next){
    let newCalculator = new Calculator({
      fromCurrency: req.body.fromCurrency,
      toCurrency: req.body.toCurrency,
      amount: req.body.amount
    });

    Calculator.addCalculator(newCalculator, (err, calculator) => {
      if(err){
        res.json({success: false, msg: "Something went wrong with the calculator"});
      } else {
        res.json({success: true, msg: "Registered the calculator inputs."});
      }

      console.log("This is me.");
    });
  },
  submit(req, res, next) {
    var convertToAmount;
    var fromCurrency;
    var toCurrency;
    var amount;
    
    // Get the last inserted document.
    db.collection('calculators').find({}).limit(1).sort({$natural:-1}).toArray((err, calculator) => {
      if (err) { throw err; }
      if (!calculator) { return res.json({success: false, msg: "Something went wrong with getting the calculations"}); }
      fromCurrency = calculator[0].fromCurrency;
      toCurrency = calculator[0].toCurrency;
      amount = calculator[0].amount;

      // Convert the amount
      oxr.latest(() => {
        fx.rates = oxr.rates;
        fx.base = oxr.base;
        convertToAmount = (fx(amount).from(fromCurrency).to(toCurrency)).toFixed(2);
        console.log(convertToAmount + "::" + amount);
        return res.json({
          success: true,
          fromCurrency,
          toCurrency,
          amount,
          convertToAmount
        });
      });
    });
  }
};