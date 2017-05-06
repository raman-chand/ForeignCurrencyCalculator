import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  AUD: number;
  BGN: number;
  BRL: number;
  CAD: number;
  CHF: number;
  CNY: number;
  CZK: number;
  DKK: number;
  EUR: number;
  GBP: number;
  HKD: number;
  HRK: number;
  HUF: number;
  ILS: number;
  INR: number;
  JPY: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NOK: number;
  NZD: number;
  PHP: number;
  PLN: number;
  RON: number;
  RUB: number;
  SEK: number;
  SGD: number;
  THB: number;
  TRY: number;
  USD: number;
  ZAR: number;

  constructor(
  	private authService: AuthService,
  	private router: Router
  ) {}

  ngOnInit() {
  	this.authService.getLatestRates().subscribe(data => {
  		// console.log(data.historical);
      this.AUD = data.AUD;
      this.BGN = data.BGN;
      this.BRL = data.BRL;
      this.CAD = data.CAD;
      this.CHF = data.CHF;
      this.CNY = data.CNY;
      this.CZK = data.CZK;
      this.DKK = data.DKK;
      this.EUR = data.EUR;
      this.GBP = data.GBP;
      this.HKD = data.HKD;
      this.HRK = data.HRK;
      this.HUF = data.HUF;
      this.ILS = data.ILS;
      this.INR = data.INR;
      this.JPY = data.JPY;
      this.KRW = data.KRW;
      this.MXN = data.MXN;
      this.MYR = data.MYR;
      this.NOK = data.NOK;
      this.NZD = data.NZD;
      this.PHP = data.PHP;
      this.PLN = data.PLN;
      this.RON = data.RON;
      this.RUB = data.RUB;
      this.SEK = data.SEK;
      this.SGD = data.SGD;
      this.THB = data.THB;
      this.TRY = data.TRY;
      this.USD = data.USD;
      this.ZAR = data.ZAR;
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }
}
