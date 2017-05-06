import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
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
    private validateService: ValidateService,
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

    if(!this.validateService.validateLoginCredentials(user)) {
      this._flashMessagesService.show("Please fill in all fields.", {
        cssClass: 'alert-warning',
        timeout: 3000
      });
      return false;
    }

    if(!this.validateService.validateEmployeeId(user.employeeId)) {
      this._flashMessagesService.show("The Employee Id is invalid. Only WU Supervisors have access to login", {
        cssClass: 'alert-danger',
        timeout: 5000
      });
      return false;
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
