import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  calculator: any;

  constructor(private http:Http) { } // inject Http into constructor

  // Connects Backend api

  // User auth.service
  calculateConversion(calculator){
    // Set Headers
    let headers = new Headers();
    // Content-Type
    headers.append('Content-Type', 'application/JSON');
    // Return observable with response
    return this.http.post('http://localhost:8009/calculator', calculator, {headers: headers})
      .map(res => res.json());
  }

  getConversion() {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/JSON');
  	return this.http.get('http://localhost:8009/calculator/conversion', {headers: headers})
  		.map(res => res.json());
  }
}
