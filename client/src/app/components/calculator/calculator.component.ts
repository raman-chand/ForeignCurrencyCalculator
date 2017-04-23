import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
	fromCurrency: String;
	toCurrency: String;
	amount: Number;
	converToAmount: Number;

  constructor( 
  	private validateService: ValidateService,
  	private _flashMessagesService: FlashMessagesService,
  	private router: Router
  ) {}

  ngOnInit() {}

  onCalculate() {
  	const calculator = {
  		fromCurrency: this.fromCurrency,
  		toCurrency: this.toCurrency,
  		amount: this.amount
  	}

	  // Validate Currencies
	  if(!this.validateService.validateSelectedCurrency(calculator.fromCurrency, calculator.toCurrency)) {
	  	this._flashMessagesService.show("Please select a currency.", {
	  		cssClass: 'alert-warning',
	  		timeout: 3000
	  	});
	  	return false;
	  }

	  // Validate Amount
	  if(!this.validateService.validateAmount(calculator.amount)) {
	  	this._flashMessagesService.show("Please provide a numeric amount.", {
	  		cssClass: 'alert-warning',
	  		timeout: 3000
	  	});
	  	return false;
	  }
  }
}
