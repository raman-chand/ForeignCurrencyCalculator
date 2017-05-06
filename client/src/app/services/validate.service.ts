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
  	if( isNaN(amount) || (amount == undefined) ) {
  		return false;
  	} else {
  		return true;
  	}
  }

  validateRegistration(user) {
    if(user.name == undefined || user.employeeId == undefined || user.email == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  validatePassword(password) {
    if(password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  validateLoginPassword(password) {
    if(password == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
