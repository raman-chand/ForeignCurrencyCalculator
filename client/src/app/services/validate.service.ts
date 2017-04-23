import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() {}

  validateSelectedCurrency(fromCurrency, toCurrency) {
  	if( fromCurrency == undefined || toCurrency == undefined ) {
  		return false;
  	} else {
  		return true;
  	}
  }

  validateAmount(amount) {
  	if( isNaN(amount) || (amount == '') ) {
  		return false;
  	} else {
  		return true;
  	}
  }

}
