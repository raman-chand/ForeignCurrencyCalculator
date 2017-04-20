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
    // const fromCurrency = req.body.fromCurrency,
    // toCurrency = req.body.toCurrency,
    // amount = req.body.amount;

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
    // Get the last inserted document.
    // Use the fromCurrency, toCurrency, and amount to calculate the convertToAmount.
    var convertToAmount;
    var fromCurrency;
    var toCurrency;
    var amount;
    db.collection('calculators').find({}).limit(1).sort({$natural:-1}).toArray((err, calculator) => {
      if (err) { throw err; }
      if (!calculator) { return res.json({success: false, msg: "Something went wrong with getting the calculations"}); }
      console.log(calculator); // how do i get the three values i need from the doc.?
      res.json({
        success: true,
        calculator: calculator[0].fromCurrency
      });

      fromCurrency = calculator[0].fromCurrency;
      toCurrency = calculator[0].toCurrency;
      amount = calculator[0].amount;

      oxr.latest(function() {
        fx.rates = oxr.rates;
        fx.base = oxr.base;
        convertToAmount = (fx(amount).from(fromCurrency).to(toCurrency));
      });
    });
    // res.json({calculator: req.calculator});
  }
};


// .then((calculator) => {
//   res.redirect('/submit');
// }).catch((err) => {
//   console.log(JSON.stringify(err));
//   res.render('calculator');
// });

// res.render('calculator/calculator', {amount: amount, convertToAmount: convertToAmount, success: req.flash('success')});
