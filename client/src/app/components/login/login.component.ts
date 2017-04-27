import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	employeeId: String;
	password: String;

  constructor(
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
  	const user = {
  		employeeId: this.employeeId,
  		password: this.password
  	}

  	this.authService.authenticateUser(user).subscribe(data => {
  		// Test the validity of the data
  		if(data.success) {
  			// Store user data locally
  			this.authService.storeUserData(data.token, data.user);
  			this._flashMessagesService.show("You've logged in.", {
  				cssClass: 'alert-success',
  				timeout: 3000
  			});
  			this.router.navigate(['/profile']);
  		} else {
  			this._flashMessagesService.show(data.msg, {
  				cssClass: 'alert-danger',
  				timeout: 3000
  			});
  			this.router.navigate(['/login']);
  		}
  	});
  }
}
