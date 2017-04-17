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
            // return res.json({
            //   success: true,
            //   calculator: {
            //     fromCurrency: calculator.fromCurrency,
            //     toCurrency: calculator.toCurrency,
            //     amount: calculator.amount,
            //     convertToAmount,
            //     exchangeRate
            //   }
            // });
          });
        }
      });
    });
  }
  // submit(req, res, next){
  //  I don't know why, but how do I save the calculator locally to reach this?
  //   res.json({calculator: req.calculator});
  //   // reorder documents from latest to earliest, and limit output to the first document
  //   db.collection('calculators').find({}).limit(1).sort({$natural:-1}).toArray((err, docs) =>{
  //     if (err) {throw err};
  //     return res.json({calculator: docs});
  //   });
  // }
}


// const express = require('express'),
// models = require('../models'),
// fx = require('money'),
// oxr = require('open-exchange-rates'),
// config = require('../config/oxrKey');
// oxr.set({app_id: config.key});

// module.exports = {
//   index(req, res){
//     res.render('calculator', {});
//   },
//   convert(req, res){
//     console.log(JSON.stringify(req.body));
//     var fromCurrency = req.body.fromCurrency,
//     toCurrency = req.body.toCurrency,
//     amount = req.body.amount,
//     convertToAmount,
//     exchangeRate,
//     note;
//     if ( isNaN(amount) || ( amount == '' )) {
//       note = "Please provide a numeric amount.";
//       res.render('calculator', {note: note});
//     } else {
//       oxr.latest(function(){
//         fx.rates = oxr.rates;
//         fx.base = oxr.base;
//         convertToAmount = (fx(amount).from(fromCurrency).to(toCurrency));
//         exchangeRate = (convertToAmount / amount);
//         console.log(convertToAmount);
//         console.log(exchangeRate);
//         res.render('calculator', {amount: amount, convertToAmount: convertToAmount, exchangeRate: exchangeRate, success: req.flash('success')});
//       });
//     }
//   }
// };