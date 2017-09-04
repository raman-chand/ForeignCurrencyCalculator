const express = require('express'),
	oxrConfig = require('../config/oxr'),
	config = require('../config/database'),
	oxr = require('open-exchange-rates'),
	fx = require('money');
oxr.set({app_id: oxrConfig.key});

module.exports = {
	latest(req, res, next) {
		var rates, base, AFN, ARS, AUD, BGN, BRL, CAD, CHF, CNY, CRC, CZK, DKK, DOP, EGP, EUR, FJD, GBP, GTQ, GYD,
			HKD, HRK, HTG, HUF, IDR, ILS, INR, IRR, ISK, JMD, JPY, KHR, KPW, KRW, LRD, MOP, MNT, MXN, MYR, NAD, NOK,
			NZD, OMR, PAB, PEN, PHP, PKR, PLN, QAR, RON, RSD, RUB, SAR, SEK, SGD, SLL, THB, TRY, TWD, USD, VND, XCD, ZAR;

		oxr.latest(() => {
			rates = oxr.rates;
			base = oxr.base;
			AFN=rates.AFN;
			ARS=rates.ARS;
			AUD=rates.AUD;
			BGN=rates.BGN;
			BRL=rates.BRL;
			CAD=rates.CAD;
			CHF=rates.CHF;
			CNY=rates.CNY;
			CRC=rates.CRC;
		 	CZK=rates.CZK;
		 	DKK=rates.DKK;
		 	DOP=rates.DOP;
		 	EGP=rates.EGP;
		 	EUR=rates.EUR;
		 	FJD=rates.FJD;
		 	GBP=rates.GBP;
		 	GTQ=rates.GTQ;
		 	GYD=rates.GYD;
		 	HKD=rates.HKD; 
		 	HRK=rates.HRK;
		 	HTG=rates.HTG;
		 	HUF=rates.HUF;
		 	IDR=rates.IDR;
		 	ILS=rates.ILS;
		 	INR=rates.INR;
		 	IRR=rates.IRR;
		 	ISK=rates.ISK;
		 	JMD=rates.JMD;
		 	JPY=rates.JPY; 
		 	KHR=rates.KHR;
		 	KPW=rates.KPW;
		 	KRW=rates.KRW; 
		 	LRD=rates.LRD;
		 	MOP=rates.MOP;
		 	MNT=rates.MNT;
		 	MXN=rates.MXN; 
		 	MYR=rates.MYR; 
		 	NAD=rates.NAD;
		 	NOK=rates.NOK; 
		 	NZD=rates.NZD;
		 	OMR=rates.OMR;
		 	PAB=rates.PAB;
		 	PEN=rates.PEN;
		 	PHP=rates.PHP;
		 	PKR=rates.PKR;
		 	PLN=rates.PLN;
		 	QAR=rates.QAR;
		 	RON=rates.RON;
		 	RSD=rates.RSD;
		 	RUB=rates.RUB;
		 	SAR=rates.SAR;
		 	SEK=rates.SEK;
		 	SGD=rates.SGD;
		 	SLL=rates.SLL;
		 	THB=rates.THB; 
		 	TRY=rates.TRY;
		 	TWD=rates.TWD;
		 	USD=rates.USD;
		 	VND=rates.VND;
		 	XCD=rates.XCD;
		 	ZAR=rates.ZAR;		 	
		 	return res.json({ 
		 		success: true,
		 		AFN, ARS, AUD, BGN, BRL, CAD, CHF, CNY, CRC, CZK, DKK, DOP, EGP, EUR, FJD, GBP, GTQ, GYD,
				HKD, HRK, HTG, HUF, IDR, ILS, INR, IRR, ISK, JMD, JPY, KHR, KPW, KRW, LRD, MOP, MNT, MXN, MYR, NAD, NOK,
				NZD, OMR, PAB, PEN, PHP, PKR, PLN, QAR, RON, RSD, RUB, SAR, SEK, SGD, SLL, THB, TRY, TWD, USD, VND, XCD, 
				ZAR
		 	});
		});
	},
	historical(req, res, next) {
		oxr.historical('2001-02-03', () => {
			var historical = oxr.rates;
			return res.json({success: true, historical});
		});
	}
};