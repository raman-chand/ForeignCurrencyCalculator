webpackJsonp([1,4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //used for AuthGuard
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    } // inject Http into constructor
    // Connects Backend api
    // User auth.service
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/JSON');
        return this.http.post('http://localhost:8009/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/JSON');
        return this.http.post('http://localhost:8009/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get Request - we're not sending any (user) data to the server unlike registerUser or authenticateUser
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // accesses this.authToken
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/JSON');
        return this.http.get('http://localhost:8009/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Store user data in local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token); // token is stored in 'id_token'.
        localStorage.setItem('user', JSON.stringify(user)); // user string is stored in 'user'.
        // local storage can only store strings, and not objects. Parse the data back to object.
        // Set values
        this.authToken = token;
        this.user = user;
    };
    // Load Token - fetch token from local storage to run in getProfile()
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Login Service
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    // Logout Service
    AuthService.prototype.logout = function () {
        // Set values to
        this.authToken = null;
        this.user = null;
        // Clear local storage
        localStorage.clear();
    };
    // Calculator auth.service
    AuthService.prototype.calculateConversion = function (calculator) {
        // Set Headers
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // Content-Type
        headers.append('Content-Type', 'application/JSON');
        // Return observable with response
        return this.http.post('http://localhost:8009/calculator', calculator, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getConversion = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/JSON');
        return this.http.get('http://localhost:8009/calculator/conversion', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Dashboard auth.service
    AuthService.prototype.getLatestRates = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/JSON');
        return this.http.get('http://localhost:8009/dashboard/latest', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, authService, _flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            employeeId: this.employeeId,
            password: this.password
        };
        if (!this.validateService.validateLoginCredentials(user)) {
            this._flashMessagesService.show("Please fill in all fields.", {
                cssClass: 'alert-warning',
                timeout: 3000
            });
            return false;
        }
        if (!this.validateService.validateEmployeeId(user.employeeId)) {
            this._flashMessagesService.show("The Employee Id is invalid. Only WU Supervisors have access to login", {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            // Test the validity of the data
            if (data.success) {
                // Store user data locally
                _this.authService.storeUserData(data.token, data.user);
                _this._flashMessagesService.show("You've logged in.", {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/profile']);
            }
            else {
                _this._flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(179),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, _flashMessagesService, router) {
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this._flashMessagesService.show("You're logged out.", {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, _flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            employeeId: this.employeeId,
            email: this.email,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegistration(user)) {
            this._flashMessagesService.show("Please fill in all fields.", {
                cssClass: 'alert-warning',
                timeout: 3000
            });
            return false;
        }
        if (!this.validateService.validateEmployeeId(user.employeeId)) {
            this._flashMessagesService.show("Your Employee Id is invalid. Only WU. Supervisors have access to register.", {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this._flashMessagesService.show("Your Email is invalid.", {
                cssClass: 'alert-warning',
                timeout: 3000
            });
            return false;
        }
        // Validate Password Length
        if (!this.validateService.validatePassword(user.password)) {
            this._flashMessagesService.show("The Password must be longer than 6 characters.", {
                cssClass: 'alert-warning',
                timeout: 3000
            });
            return false;
        }
        // Finally register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show("There are no mistakes, only happy accidents - Bob Ross. \n You're registered!", {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this._flashMessagesService.show("Ya done messed up A-A-ron - Key & Peele", {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "#appTitle {\r\n\tfont-size: 20px;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.flashMessages {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\t\r\n\twidth: 40%;\r\n\r\n\ttext-align: center;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".conversionView {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\twidth: 50%;\r\n\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.conversionView ul li {\r\n\tmargin-top: 30px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.btn {\r\n\tfont-size: 14px;\r\n\twidth: 40%;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".appHome {\r\n\ttext-align: center\r\n}\r\n\r\n.appHeader {\r\n\tpadding: 5em 0;\r\n}\r\n\r\n.appHeader #appHeader-heading {\r\n\tfont-size: 28px;\r\n}\r\n.appHeader #appHeader-getStartedBtn {\r\n\tmargin-top: 1em;\r\n}\r\n.appHeader #appHeader-getStartedBtn .btn {\r\n\tpadding: 1em 2em;\r\n\twidth: 20%;\r\n}\r\n\r\n.appCalculator {\r\n\tpadding: 8em 0;\r\n}\r\n\r\n.appCalculator #appCalculator-description, \r\n.appForSupervisor #appForSupervisor-description {\r\n\tfont-size: 16px;\r\n}\r\n\r\n.appForSupervisor {\r\n\tpadding: 5em 0;\r\n}\r\n\r\n.appForSupervisor #appForSupervisor-description {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\twidth: 50%;\r\n}\r\n\r\n.appForSupervisor #appForSupervisor-signup-login .btn {\r\n\tmargin-top: 2em;\r\n\tpadding: 1em 2em;\r\n\twidth: 20%;\r\n}\r\n.appForSupervisor #appForSupervisor-signup-login .btn:first-child {\r\n\tmargin-right: 2em;\r\n}\r\n\r\n.appFooter {\r\n\tpadding: 3em 0;\r\n}\r\n\r\n.appFooter #appFooter-ProjectTeam {\r\n\tfont-size: 14px;\r\n\tletter-spacing: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "form .form-group {\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.btn {\r\n\tmargin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "nav {\r\n\t/*border-right: 1px solid black;*/\r\n\theight: 100%;\r\n\twidth: 15%;\r\n\tfloat: left;\r\n}\r\n\r\nnav ul {\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nnav ul.general {\r\n\tmargin-top: 100%;\r\n}\r\n\r\nh4 {\r\n\tmargin-left: 20px;\r\n}\r\n\r\nnav ul li {\r\n\t/*margin-bottom: -15px;*/\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.btn {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.btn:hover {\r\n\tbackground-color: #eeeeee;\r\n\twidth: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".btn {\r\n\tmargin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<navbar></navbar>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-10\">\r\n\t\t\t<div class=\"row\" id=\"appTitle\">\r\n\t\t\t\t<div class=\"col-md-6\" align=\"left\">Fantastic Four</div>\r\n\t\t\t\t<div class=\"col-md-6\" align=\"right\">Fxr Calculator</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flashMessages col-md-12\">\r\n\t\t\t\t\t<flash-messages></flash-messages>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<h2 class=\"page-header\">Calculator</h2>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t\t<form (submit)=\"onCalculateSubmit()\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<label>From the currency I have:</label>\r\n\t\t\t\t<select [(ngModel)]=\"fromCurrency\" required=\"required\" class=\"form-control\" name=\"fromCurrency\">\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"AUD\">AUD</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"BGN\">BGN</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"BRL\">BRL</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"CAD\">CAD</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"CHF\">CHF</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"CNY\">CNY</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"CZK\">CZK</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"DKK\">DKK</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"EUR\">EUR</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"GBP\">GBP</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"HKD\">HKD</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"HRK\">HRK</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"HUF\">HUF</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"ILS\">ILS</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"INR\">INR</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"JPY\">JPY</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"KRW\">KRW</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"MXN\">MXN</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"MYR\">MYR</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"NOK\">NOK</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"NZD\">NZD</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"PHP\">PHP</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"PLN\">PLN</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"RON\">RON</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"RUB\">RUB</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"SEK\">SEK</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"SGD\">SGD</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"THB\">THB</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"TRY\">TRY</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"USD\">USD</option>\r\n\t\t\t\t\t<option name=\"fromCurrency\" value=\"ZAR\">ZAR</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<label>To the currency I want:</label>\r\n\t\t\t\t<select [(ngModel)]=\"toCurrency\" required=\"required\" class=\"form-control\" name=\"toCurrency\">\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"AUD\">AUD</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"BGN\">BGN</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"BRL\">BRL</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"CAD\">CAD</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"CHF\">CHF</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"CNY\">CNY</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"CZK\">CZK</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"DKK\">DKK</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"EUR\">EUR</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"GBP\">GBP</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"HKD\">HKD</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"HRK\">HRK</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"HUF\">HUF</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"ILS\">ILS</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"INR\">INR</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"JPY\">JPY</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"KRW\">KRW</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"MXN\">MXN</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"MYR\">MYR</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"NOK\">NOK</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"NZD\">NZD</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"PHP\">PHP</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"PLN\">PLN</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"RON\">RON</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"RUB\">RUB</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"SEK\">SEK</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"SGD\">SGD</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"THB\">THB</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"TRY\">TRY</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"USD\">USD</option>\r\n\t\t\t\t\t<option name=\"toCurrency\" value=\"ZAR\">ZAR</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<label>Amount:</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"amount\" required=\"required\" class=\"form-control\" name=\"amount\">\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Calculate\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<h2 class=\"page-header\">Calculator</h2>\r\n</div>\r\n<div class=\"conversionView\">\r\n\t<div class=\"row\">\r\n\t\t<ul class=\"list-group col-md-12\">\r\n\t\t\t<li class=\"list-group-item\">Base Currency: {{fromCurrency}}</li>\r\n\t\t\t<li class=\"list-group-item\">Convert to Currency: {{toCurrency}}</li>\r\n\t\t\t<li class=\"list-group-item\">Amount: {{amount}}</li>\r\n\t\t\t<li class=\"list-group-item\">Converted Amount: {{convertToAmount}}</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"btn btn-primary col-md-12\" [routerLink]=\"['/calculator']\">Back</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<h2 class=\"page-header\">Latest Currency Rates:</h2>\r\n</div>\r\n<div align=\"left\">\r\n\t<table style=\"width:50%\">\r\n\t\t<tr>\r\n\t\t\t<th>Symbol</th>\r\n\t\t\t<th>Code</th>\r\n\t\t\t<th>Currency</th> \r\n\t\t\t<th>Daily Rate</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>؋</td>\r\n\t\t\t<td>AFN</td>\r\n\t\t\t<td>Afghan Afghani</td>\r\n\t\t\t<td>{{AFN}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>ARS</td>\r\n\t\t\t<td>Argentine Peso</td>\r\n\t\t\t<td>{{ARS}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>AUD</td>\r\n\t\t\t<td>Australian Dollar</td>\r\n\t\t\t<td>{{AUD}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>лв</td> \r\n\t\t\t<td>BGN</td>\r\n\t\t\t<td>Bulgarian Lev</td>\r\n\t\t\t<td>{{BGN}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>R$</td> \r\n\t\t\t<td>BRL</td>\r\n\t\t\t<td>Brazilian Real</td>\r\n\t\t\t<td>{{BRL}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>CAD</td>\r\n\t\t\t<td>Canadian Dollar</td>\r\n\t\t\t<td>{{CAD}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>CHF</td>\r\n\t\t\t<td>Swiss Franc</td>\r\n\t\t\t<td>{{CHF}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>¥</td> \r\n\t\t\t<td>CNY</td>\r\n\t\t\t<td>Chinese Yuan</td>\r\n\t\t\t<td>{{CNY}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₡</td>\r\n\t\t\t<td>CRC</td>\r\n\t\t\t<td>Costa Rican Colon</td>\r\n\t\t\t<td>{{CRC}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Kč</td> \r\n\t\t\t<td>CZK</td>\r\n\t\t\t<td>Czech Republic Koruna</td>\r\n\t\t\t<td>{{CZK}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>kr</td> \r\n\t\t\t<td>DKK</td>\r\n\t\t\t<td>Danish Krone</td>\r\n\t\t\t<td>{{DKK}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>RD$</td>\r\n\t\t\t<td>DOP</td>\r\n\t\t\t<td>Dominican Peso</td>\r\n\t\t\t<td>{{DOP}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>E£</td>\r\n\t\t\t<td>EGP</td>\r\n\t\t\t<td>Egyptian Pound</td>\r\n\t\t\t<td>{{EGP}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>€</td> \r\n\t\t\t<td>EUR</td>\r\n\t\t\t<td>Euro</td>\r\n\t\t\t<td>{{EUR}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>FJD</td>\r\n\t\t\t<td>Fijian Dollar</td>\r\n\t\t\t<td>{{FJD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>£</td>\r\n\t\t\t<td>GBP</td>\r\n\t\t\t<td>British Pound Sterling</td>\r\n\t\t\t<td>{{GBP}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Q</td>\r\n\t\t\t<td>GTQ</td>\r\n\t\t\t<td>Guatemalan Quetzal</td>\r\n\t\t\t<td>{{GTQ}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>GYD</td>\r\n\t\t\t<td>Guyanaese Dollar</td>\r\n\t\t\t<td>{{GYD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>HKD</td>\r\n\t\t\t<td>Hong Kong Dollar</td>\r\n\t\t\t<td>{{HKD}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>kn</td> \r\n\t\t\t<td>HRK</td>\r\n\t\t\t<td>Croatian Kuna</td>\r\n\t\t\t<td>{{HRK}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>G</td>\r\n\t\t\t<td>HTG</td>\r\n\t\t\t<td>Haitian Gourde</td>\r\n\t\t\t<td>{{HTG}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Ft</td> \r\n\t\t\t<td>HUF</td>\r\n\t\t\t<td>Hungarian Forint</td>\r\n\t\t\t<td>{{HUF}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Rp</td>\r\n\t\t\t<td>IDR</td>\r\n\t\t\t<td>Indonesian Rupiah</td>\r\n\t\t\t<td>{{IDR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₪</td> \r\n\t\t\t<td>ILS</td>\r\n\t\t\t<td>Israeli Shekel</td>\r\n\t\t\t<td>{{ILS}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₹</td>\r\n\t\t\t<td>INR</td>\r\n\t\t\t<td>Indian Rupee</td>\r\n\t\t\t<td>{{INR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>﷼</td>\r\n\t\t\t<td>IRR</td>\r\n\t\t\t<td>Iranian Rial</td>\r\n\t\t\t<td>{{IRR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>kr</td>\r\n\t\t\t<td>ISK</td>\r\n\t\t\t<td>Icelandic Króna</td>\r\n\t\t\t<td>{{ISK}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>J$</td>\r\n\t\t\t<td>JMD</td>\r\n\t\t\t<td>Jamaican Dollar</td>\r\n\t\t\t<td>{{JMD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>¥</td> \r\n\t\t\t<td>JPY</td>\r\n\t\t\t<td>Japanese Yen</td>\r\n\t\t\t<td>{{JPY}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>៛</td>\r\n\t\t\t<td>KHR</td>\r\n\t\t\t<td>Cambodian Riel</td>\r\n\t\t\t<td>{{KHR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₩</td>\r\n\t\t\t<td>KPW</td>\r\n\t\t\t<td>North Korean Won</td>\r\n\t\t\t<td>{{KPW}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₩</td> \r\n\t\t\t<td>KRW</td>\r\n\t\t\t<td>South Korean Won</td>\r\n\t\t\t<td>{{KRW}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>LRD</td>\r\n\t\t\t<td>Liberian Dollar</td>\r\n\t\t\t<td>{{LRD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>MOP$</td>\r\n\t\t\t<td>MOP</td>\r\n\t\t\t<td>Macanese Pataca</td>\r\n\t\t\t<td>{{MOP}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₮</td>\r\n\t\t\t<td>MNT</td>\r\n\t\t\t<td>Mongolian Tugrik</td>\r\n\t\t\t<td>{{MNT}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>MXN</td>\r\n\t\t\t<td>Mexican Peso</td>\r\n\t\t\t<td>{{MXN}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>RM</td> \r\n\t\t\t<td>MYR</td>\r\n\t\t\t<td>Malaysian Ringgit</td>\r\n\t\t\t<td>{{MYR}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>NAD</td>\r\n\t\t\t<td>Namibian Dollar</td>\r\n\t\t\t<td>{{NAD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>kr</td> \r\n\t\t\t<td>NOK</td>\r\n\t\t\t<td>Norwegian Krone</td>\r\n\t\t\t<td>{{NOK}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>NZD</td>\r\n\t\t\t<td>New Zealand Dollar</td>\r\n\t\t\t<td>{{NZD}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>﷼</td>\r\n\t\t\t<td>OMR</td>\r\n\t\t\t<td>Omani Rial</td>\r\n\t\t\t<td>{{OMR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>B/..</td>\r\n\t\t\t<td>PAB</td>\r\n\t\t\t<td>Panamanian Balboa</td>\r\n\t\t\t<td>{{PAB}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>S/..</td>\r\n\t\t\t<td>PEN</td>\r\n\t\t\t<td>Peruvian Sol</td>\r\n\t\t\t<td>{{PEN}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₱</td> \r\n\t\t\t<td>PHP</td>\r\n\t\t\t<td>Philippines Peso</td>\r\n\t\t\t<td>{{PHP}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₨</td>\r\n\t\t\t<td>PKR</td>\r\n\t\t\t<td>Pakistani Rupee</td>\r\n\t\t\t<td>{{PKR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>zł</td> \r\n\t\t\t<td>PLN</td>\r\n\t\t\t<td>Polish Zloty</td>\r\n\t\t\t<td>{{PLN}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>﷼</td>\r\n\t\t\t<td>QAR</td>\r\n\t\t\t<td>Qatari Rial</td>\r\n\t\t\t<td>{{QAR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>lei</td> \r\n\t\t\t<td>RON</td>\r\n\t\t\t<td>Romania New Leu</td>\r\n\t\t\t<td>{{RON}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>РСД</td>\r\n\t\t\t<td>RSD</td>\r\n\t\t\t<td>Serbian Dinar</td>\r\n\t\t\t<td>{{RSD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₽</td> \r\n\t\t\t<td>RUB</td>\r\n\t\t\t<td>Russian Ruble</td>\r\n\t\t\t<td>{{RUB}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>SR</td>\r\n\t\t\t<td>SAR</td>\r\n\t\t\t<td>Saudi Riyal</td>\r\n\t\t\t<td>{{SAR}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>kr</td> \r\n\t\t\t<td>SEK</td>\r\n\t\t\t<td>Swedish Krona</td>\r\n\t\t\t<td>{{SEK}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td> \r\n\t\t\t<td>SGD</td>\r\n\t\t\t<td>Singapore Dollar</td>\r\n\t\t\t<td>{{SGD}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Le</td>\r\n\t\t\t<td>SLL</td>\r\n\t\t\t<td>Sierra Leonean Leone</td>\r\n\t\t\t<td>{{SLL}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>฿</td> \r\n\t\t\t<td>THB</td>\r\n\t\t\t<td>Thai Baht</td>\r\n\t\t\t<td>{{THB}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₺</td> \r\n\t\t\t<td>TRY</td>\r\n\t\t\t<td>Turkish Lira</td>\r\n\t\t\t<td>{{TRY}}</td>\t    \r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>USD</td>\r\n\t\t\t<td>United States Dollar</td>\r\n\t\t\t<td>{{USD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>₫</td>\r\n\t\t\t<td>VND</td>\r\n\t\t\t<td>Vietnamese Dong</td>\r\n\t\t\t<td>{{VND}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>$</td>\r\n\t\t\t<td>XCD</td>\r\n\t\t\t<td>East Caribbean Dollar</td>\r\n\t\t\t<td>{{XCD}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>R</td> \r\n\t\t\t<td>ZAR</td>\r\n\t\t\t<td>South African Rand</td>\r\n\t\t\t<td>{{ZAR}}</td>\t    \r\n\t\t</tr>\r\n\t</table>\r\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"appHome\">\r\n\t<hr/>\r\n\t<div class=\"appHeader\">\r\n\t\t<div id=\"appHeader-heading\">\r\n\t\t\tForeign Exchange <br>\r\n\t\t\tRate Calculator\r\n\t\t</div>\r\n\t\t<div id=\"appHeader-getStartedBtn\">\r\n\t\t\t<!-- Calculator Link -->\r\n\t\t\t<div class=\"btn btn-primary\" [routerLink]=\"['/calculator']\">Get Started</div> \r\n\t\t</div>\r\n\t</div>\r\n\t<hr/>\r\n\t<div class=\"appCalculator\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div id=\"appCalculator-description\">\r\n\t\t\t\t\tWith the Foreign Exchange Rate Currency Calculator, you can convert a numeric amount from and to any of the 30 available currencies in our database. Just select two currencies from the dropdown menu and enter a numeric amount.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<img id=\"appCalculator-image\" src=\"./img/pic.PNG\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr/>\r\n\t<div class=\"appForSupervisor\">\r\n\t\t<div id=\"appForSupervisor-description\">\r\n\t\t\tSupervisors of Western Union are eligible to access our dashboard. Simply setup a user account by registering and logging in to view exclusive content, such as a list of live exchange rates for 60+ currencies in our database.\r\n\t\t</div>\r\n\t\t<div id=\"appForSupervisor-signup-login\">\r\n\t\t\t<div class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</div>\r\n\t\t\t<div class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr/>\r\n\t<div class=\"appFooter\">\r\n\t\t<div id=\"appFooter-ProjectTeam\">\r\n\t\t\tRamanpreet C. Dhwanish P. Justin P. Baitao W. <br>\r\n\t\t\tProfessor Brown . CIS 5800\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<h2 class=\"page-header\">Supervisor Login</h2>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t\t<form (submit)=\"onLogin()\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Employee Id:</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"employeeId\" name=\"employeeId\"  class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Password:</label>\r\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\"  class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<img src=\"./img/logo.png\" />\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\t<ul class=\"general\">\r\n\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact:true }\"><a class=\"btn btn-navbar\" [routerLink]=\"['/']\">Home</a></li>\r\n\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact:true }\"><a class=\"btn btn-navbar\" [routerLink]=\"['/calculator']\">Calculator</a></li>\r\n\t\t<hr/>\r\n\t</ul>\r\n\t<!-- Move admin closer to the bottom of the nav -->\r\n\t<h4>Admin:</h4>\r\n\t<br/>\r\n\t<ul class=\"admin\">\r\n\t\t<!-- If user is not logged in -->\r\n\t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact:true }\"><a class=\"btn btn-navbar\" [routerLink]=\"['/register']\">Register</a></li>\r\n\t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact:true }\"><a class=\"btn btn-navbar\" [routerLink]=\"['/login']\">Login</a></li>\r\n\r\n\t\t<!-- If User is logged in -->\r\n\t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact:true}\"><a class=\"btn btn-navbar\" [routerLink]=\"['/profile']\">Profile</a></li>\r\n\t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact:true }\"><a class=\"btn btn-navbar\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n\r\n\t\t<li *ngIf=\"authService.loggedIn()\"><a class=\"btn btn-navbar\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n\t</ul>\r\n</nav>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n\t<h2 class=\"page-header\">{{user.name}}</h2>\r\n\t<ul class=\"list-group\">\r\n\t\t<li class=\"list-group-item\">Employee Id: {{user.employeeId}}</li>\r\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\r\n\t</ul>\r\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<h2 class=\"page-header\">Supervisor Register</h2>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t\t<form (submit)=\"onRegisterSubmit()\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Name:</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Employee Id:</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"employeeId\" name=\"employeeId\"  class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Email:</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\"  class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Password:</label>\r\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\"  class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateSelectedCurrency = function (fromCurrency, toCurrency) {
        if (fromCurrency == undefined || toCurrency == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAmount = function (amount) {
        if (isNaN(amount) || (amount == undefined)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegistration = function (user) {
        if (user.name == undefined || user.employeeId == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };
    ValidateService.prototype.validatePassword = function (password) {
        if (password.length < 6) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmployeeId = function (employeeId) {
        var regexId = /\b[a-zA-Z]{2}[0-9]{6}\b/;
        return regexId.test(employeeId);
    };
    ValidateService.prototype.validateLoginCredentials = function (user) {
        if (user.employeeId == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(174),
        styles: [__webpack_require__(164)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_calculator_calculator_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_conversion_conversion_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'calculator', component: __WEBPACK_IMPORTED_MODULE_12__components_calculator_calculator_component__["a" /* CalculatorComponent */] },
    { path: 'calculator/conversion', component: __WEBPACK_IMPORTED_MODULE_13__components_conversion_conversion_component__["a" /* ConversionComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_calculator_calculator_component__["a" /* CalculatorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_conversion_conversion_component__["a" /* ConversionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalculatorComponent = (function () {
    function CalculatorComponent(validateService, authService, _flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    CalculatorComponent.prototype.ngOnInit = function () { };
    CalculatorComponent.prototype.onCalculateSubmit = function () {
        var _this = this;
        console.log("this is me");
        var calculator = {
            fromCurrency: this.fromCurrency,
            toCurrency: this.toCurrency,
            amount: this.amount
        };
        console.log(calculator);
        // Validate Currencies
        if (!this.validateService.validateSelectedCurrency(calculator.fromCurrency, calculator.toCurrency)) {
            this._flashMessagesService.show("Please select a currency.", {
                cssClass: 'alert-warning',
                timeout: 3000
            });
            return false;
        }
        // Validate Amount
        if (!this.validateService.validateAmount(calculator.amount)) {
            this._flashMessagesService.show("Please provide a numeric amount.", {
                cssClass: 'alert-warning',
                timeout: 3000
            });
            return false;
        }
        this.authService.calculateConversion(calculator).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show("Finished Calculating", {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['calculator/conversion']);
            }
            else {
                _this._flashMessagesService.show("Something went wrong with the calculator.", {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['calculator']);
            }
        });
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calculator',
        template: __webpack_require__(175),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CalculatorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=calculator.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversionComponent = (function () {
    function ConversionComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ConversionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getConversion().subscribe(function (data) {
            _this.fromCurrency = data.fromCurrency;
            _this.toCurrency = data.toCurrency;
            _this.amount = data.amount;
            _this.convertToAmount = data.convertToAmount;
            console.log(data.amount + " :: " + data.convertToAmount);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ConversionComponent;
}());
ConversionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-conversion',
        template: __webpack_require__(176),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ConversionComponent);

var _a, _b;
//# sourceMappingURL=conversion.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLatestRates().subscribe(function (data) {
            _this.AFN = data.AFN;
            _this.ARS = data.ARS;
            _this.AUD = data.AUD;
            _this.BGN = data.BGN;
            _this.BRL = data.BRL;
            _this.CAD = data.CAD;
            _this.CHF = data.CHF;
            _this.CNY = data.CNY;
            _this.CRC = data.CRC;
            _this.CZK = data.CZK;
            _this.DKK = data.DKK;
            _this.DOP = data.DOP;
            _this.EGP = data.EGP;
            _this.EUR = data.EUR;
            _this.FJD = data.FJD;
            _this.GBP = data.GBP;
            _this.GTQ = data.GTQ;
            _this.GYD = data.GYD;
            _this.HKD = data.HKD;
            _this.HRK = data.HRK;
            _this.HTG = data.HTG;
            _this.HUF = data.HUF;
            _this.IDR = data.IDR;
            _this.ILS = data.ILS;
            _this.INR = data.INR;
            _this.IRR = data.IRR;
            _this.ISK = data.ISK;
            _this.JMD = data.JMD;
            _this.JPY = data.JPY;
            _this.KHR = data.KHR;
            _this.KPW = data.KPW;
            _this.KRW = data.KRW;
            _this.LRD = data.LRD;
            _this.MOP = data.MOP;
            _this.MNT = data.MNT;
            _this.MXN = data.MXN;
            _this.MYR = data.MYR;
            _this.NAD = data.NAD;
            _this.NOK = data.NOK;
            _this.NZD = data.NZD;
            _this.OMR = data.OMR;
            _this.PAB = data.PAB;
            _this.PEN = data.PEN;
            _this.PHP = data.PHP;
            _this.PKR = data.PKR;
            _this.PLN = data.PLN;
            _this.QAR = data.QAR;
            _this.RON = data.RON;
            _this.RSD = data.RSD;
            _this.RUB = data.RUB;
            _this.SAR = data.SAR;
            _this.SEK = data.SEK;
            _this.SGD = data.SGD;
            _this.SLL = data.SLL;
            _this.THB = data.THB;
            _this.TRY = data.TRY;
            _this.TWD = data.TWD;
            _this.USD = data.USD;
            _this.VND = data.VND;
            _this.XCD = data.XCD;
            _this.ZAR = data.ZAR;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(177),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(178),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map