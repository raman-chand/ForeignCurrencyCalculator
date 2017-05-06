import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  AFN: number;
  ARS: number;
  AUD: number;
  BGN: number;
  BRL: number;
  CAD: number;
  CHF: number; 
  CNY: number;
  CRC: number;
  CZK: number; 
  DKK: number;
  DOP: number;
  EGP: number;
  EUR: number;
  FJD: number;
  GBP: number;
  GTQ: number;
  GYD: number;
  HKD: number; 
  HRK: number;
  HTG: number;
  HUF: number;
  IDR: number;
  ILS: number;
  INR: number;
  IRR: number;
  ISK: number;
  JMD: number;
  JPY: number; 
  KHR: number;
  KPW: number;
  KRW: number;
  LRD: number;
  MOP: number;
  MNT: number;
  MXN: number; 
  MYR: number; 
  NAD: number;
  NOK: number; 
  NZD: number;
  OMR: number;
  PAB: number;
  PEN: number;
  PHP: number;
  PKR: number;
  PLN: number;
  QAR: number;
  RON: number;
  RSD: number;
  RUB: number;
  SAR: number;
  SEK: number;
  SGD: number;
  SLL: number;
  THB: number;
  TRY: number;
  TWD: number;
  USD: number;
  VND: number;
  XCD: number;
  ZAR: number;

  constructor(
  	private authService: AuthService,
  	private router: Router
    ) {}

  ngOnInit() {
  	this.authService.getLatestRates().subscribe(data => {
      this.AFN = data.AFN;
      this.ARS = data.ARS;
      this.AUD = data.AUD;
      
      this.BGN = data.BGN;
      this.BRL = data.BRL;

      this.CAD = data.CAD;
      this.CHF = data.CHF;
      this.CNY = data.CNY;
      this.CRC = data.CRC;
      this.CZK = data.CZK;
      
      this.DKK = data.DKK;
      this.DOP = data.DOP;

      this.EGP = data.EGP;
      this.EUR = data.EUR;

      this.FJD = data.FJD;

      this.GBP = data.GBP;
      this.GTQ = data.GTQ;
      this.GYD = data.GYD;

      this.HKD = data.HKD;
      this.HRK = data.HRK;
      this.HTG = data.HTG;
      this.HUF = data.HUF;
      
      this.IDR = data.IDR;
      this.ILS = data.ILS;
      this.INR = data.INR;
      this.IRR = data.IRR;
      this.ISK = data.ISK;

      this.JMD = data.JMD;
      this.JPY = data.JPY;
      
      this.KHR = data.KHR;
      this.KPW = data.KPW;
      this.KRW = data.KRW;

      this.LRD = data.LRD;
      
      this.MOP = data.MOP;
      this.MNT = data.MNT;
      this.MXN = data.MXN;
      this.MYR = data.MYR;
      
      this.NAD = data.NAD;
      this.NOK = data.NOK;
      this.NZD = data.NZD;

      this.OMR = data.OMR;
      
      this.PAB = data.PAB;
      this.PEN = data.PEN;
      this.PHP = data.PHP;
      this.PKR = data.PKR;
      this.PLN = data.PLN;

      this.QAR = data.QAR;

      this.RON = data.RON;
      this.RSD = data.RSD;
      this.RUB = data.RUB;
      
      this.SAR = data.SAR;
      this.SEK = data.SEK;
      this.SGD = data.SGD;
      this.SLL = data.SLL;
      
      this.THB = data.THB;
      this.TRY = data.TRY;
      this.TWD = data.TWD;
      
      this.USD = data.USD;
      
      this.VND = data.VND;

      this.XCD = data.XCD;

      this.ZAR = data.ZAR;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
