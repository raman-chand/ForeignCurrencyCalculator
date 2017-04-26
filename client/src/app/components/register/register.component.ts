import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name: String;
	employeeId: String;
	email: String;
	password: String;

  constructor(
  	private validateService: ValidateService,
  	private authService: AuthService,
  	private _flashMessagesService: FlashMessagesService,
  	private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
  	const user = {
  		name: this.name,
  		employeeId: this.employeeId,
  		email: this.email,
  		password: this.password
  	}

  	// Required fields
  	if(!this.validateService.validateRegistration(user)) {
  		this._flashMessagesService.show("Please fill in all fields.", {
  			cssClass: 'alert-warning',
  			timeout: 3000
  		});
  		return false;
  	}

  	// Validate Email
  	if(!this.validateService.validateEmail(user.email)) {
  		this._flashMessagesService.show("Looks like the email is invalid.", {
  			cssClass: 'alert-warning',
  			timeout: 3000
  		});
  		return false;
  	}

  	// Validate Password Length
  	if(!this.validateService.validatePassword(user.password)) {
  		this._flashMessagesService.show("Passwords must be longer than 6 characters.", {
  			cssClass: 'alert-warning',
  			timeout: 3000
  		});
  		return false;
  	}

  	// Finally register user
  	this.authService.registerUser(user).subscribe(data => {
  		if(data.success) {
  			this._flashMessagesService.show("There are no mistakes, only happy accidents - Bob Ross. \n You're registered!", {
  				cssClass: 'alert-success',
  				timeout: 5000
  			});
  			this.router.navigate([ '/login' ]);
  		} else {
  			this._flashMessagesService.show("Ya done messed up A-A-ron - Key & Peele", {
  				cssClass: 'alert-danger',
  				timeout: 5000
  			});
  			this.router.navigate([ '/register' ]);
  		}
  	});
  }
}
