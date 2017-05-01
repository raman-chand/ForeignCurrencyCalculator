import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt'; //used for AuthGuard

@Injectable()
export class AuthService {
  calculator: any;
  authToken: any;
  user: any;

  constructor(private http:Http) { } // inject Http into constructor

  // Connects Backend api

  // User auth.service
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    return this.http.post('http://localhost:8009/users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    return this.http.post('http://localhost:8009/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  // Get Request - we're not sending any (user) data to the server unlike registerUser or authenticateUser
  getProfile(){
    let headers = new Headers();
    this.loadToken(); // accesses this.authToken
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/JSON');
    return this.http.get('http://localhost:8009/users/profile', {headers: headers})
      .map(res => res.json());
  }

  // Store user data in local storage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token); // token is stored in 'id_token'.
    localStorage.setItem('user', JSON.stringify(user)); // user string is stored in 'user'.
    // local storage can only store strings, and not objects. Parse the data back to object.
  
    // Set values
    this.authToken = token;
    this.user = user;
  }

  // Load Token - fetch token from local storage to run in getProfile()
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Login Service
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  // Logout Service
  logout(){
    // Set values to
    this.authToken = null;
    this.user = null;
    // Clear local storage
    localStorage.clear();
  }
  
  // Calculator auth.service
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

  // Dashboard auth.service
  getLatestRates() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    return this.http.get('http://localhost:8009/dashboard/latest', {headers: headers})
      .map(res => res.json());
  }

}