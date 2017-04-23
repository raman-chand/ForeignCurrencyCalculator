import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  fromCurrency: String;
  toCurrency: String;
  amount: Number;
  convertToAmount: Number;

  constructor(
  	private authService: AuthService,
  	private router: Router
  ) {}

  ngOnInit() {
  	this.authService.getConversion().subscribe(data => {
      this.fromCurrency = data.fromCurrency;
      this.toCurrency = data.toCurrency;
  		this.amount = data.amount;
      this.convertToAmount = data.convertToAmount;
      console.log(data.amount + " :: " + data.convertToAmount);
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }
}
