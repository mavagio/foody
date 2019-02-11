(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/animations.ts":
/*!******************************************!*\
  !*** ./src/app/animations/animations.ts ***!
  \******************************************/
/*! exports provided: scaleUp, numberChangeAnimation, progressAnimation, activeStepCircle, brightDimSelection, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUp", function() { return scaleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberChangeAnimation", function() { return numberChangeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressAnimation", function() { return progressAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeStepCircle", function() { return activeStepCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brightDimSelection", function() { return brightDimSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var scaleUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.5)',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in')
    ])
]);
var numberChangeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('numberChangeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(10%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-10%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in')
    ]),
]);
var progressAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('progressAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: '0%',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')
    ])
]);
var activeStepCircle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('activeStepCircle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ border: '2px solid #11F6C3' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => active', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms 300ms ease-in')
    ])
]);
var brightDimSelection = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('brightDimSelection', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ background: 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => active', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')
    ])
]);
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('HomePage => WeeksPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.8)', opacity: 0, }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token');
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-requests.service */ "./src/app/services/api-requests.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router, apiRequestsService) {
        this.http = http;
        this.router = router;
        this.apiRequestsService = apiRequestsService;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.apiRequestsService.postSignup(authData).subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['login']);
            }
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.apiRequestsService.postLogin(authData).subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.userId = response.user._id;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                _this.saveAuthData(token, expirationDate, _this.userId);
                _this.router.navigate(["/profile"]);
            }
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
        this.userId = null;
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem('userId', userId);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        var userId = localStorage.getItem("userId");
        if (!token || !expirationDate || !userId) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_requests_service__WEBPACK_IMPORTED_MODULE_4__["ApiRequestsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/app.component.css":
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routeAnimations]=\"prepareRoute(outlet)\" >\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/animations */ "./src/app/animations/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app.component.css")],
            animations: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"],
            ],
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app.module.ts":
/*!******************************************!*\
  !*** ./src/app/components/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/components/test-component/test-component.component.ts");
/* harmony import */ var _services_api_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-requests.service */ "./src/app/services/api-requests.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/components/app.routing.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _introduction_carousel_introduction_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./introduction-carousel/introduction-carousel.component */ "./src/app/components/introduction-carousel/introduction-carousel.component.ts");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");
/* harmony import */ var angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-useful-swiper */ "./node_modules/angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _weeks_weeks_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./weeks/weeks.component */ "./src/app/components/weeks/weeks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_5__["TestComponentComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _introduction_carousel_introduction_carousel_component__WEBPACK_IMPORTED_MODULE_21__["IntroductionCarouselComponent"],
                _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_22__["ComingSoonComponent"],
                _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_23__["RecipeComponent"],
                _weeks_weeks_component__WEBPACK_IMPORTED_MODULE_25__["WeeksComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_15__["routing"],
                angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_24__["SwiperModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"], multi: true },
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _services_api_requests_service__WEBPACK_IMPORTED_MODULE_6__["ApiRequestsService"],
                _services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/components/app.routing.ts ***!
  \*******************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/components/test-component/test-component.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _weeks_weeks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weeks/weeks.component */ "./src/app/components/weeks/weeks.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");











var routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'HomePage' } },
    { path: 'start/:step', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'HomePage' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'test', component: _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__["TestComponentComponent"] },
    { path: 'weeks', component: _weeks_weeks_component__WEBPACK_IMPORTED_MODULE_9__["WeeksComponent"], data: { animation: 'WeeksPage' } },
    { path: 'recipe', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__["RecipeComponent"], data: { animation: 'RecipePage' } },
    { path: 'coming-soon', component: _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_8__["ComingSoonComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  text-align: center;\n  color: #234DE7;\n}\n\n.header > .h2 {\n  font-style: italic; \n  font-weight: bold;\n  line-height: 37px;\n  font-size: 33px;\n}\n\n.content {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  text-align: center;\n  color: #5075FF;\n}\n\n.content > .h4 {\n  font-size: 22px;\t\n  line-height: 24px;\n  font-weight: 400;\n}\n\n.nav-dotes {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.wrapepr {\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 75px 150px 1fr;\n      grid-template-rows: 75px 150px 1fr;\n  -ms-grid-columns: 300px;\n      grid-template-columns: 300px;\n  justify-content: center;\n  align-content: center;\n}\n\n.smiley {\t\n  height: 40px;\n  width: 40px;\t\n  border: 2px solid #234DE7;\t\n  border-radius: 100%;\t\n  background-color: #FFFFFF;\n  color: #5075FF;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  align-content: center;\n  justify-content: center;\n  display: -ms-grid;\n  display: grid;\n}\n\n.vertical-center {\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh; /* These two lines are counted as one :-)       */\n  display: flex;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\n  <div class=\"container\">\n    <div class=\"wrapepr\">\n      <div class=\"header\">\n        <h2 class=\"h2\">Coming soon</h2>\n      </div>\n      <div class=\"content\">\n        <h4 class=\"h4\">Foody picks recipes for you and your household so you don’t have to!</h4>\n      </div>\n      <div class=\"smiley\">:)</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    ComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/components/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.css */ "./src/app/components/coming-soon/coming-soon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-center {\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh; /* These two lines are counted as one :-)       */\n\n  display: flex;\n  align-items: center;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"vertical-center\">\n  <div class=\"container\"> -->\n      <!-- <div class=\"jumbotron text-center\">\n        <h1><span class=\"fa fa-lock\"></span> Node Authentication</h1>\n        <p>Login or Register with:</p>\n        <a routerLink = \"/login\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> Local Login</a>\n        <a routerLink = \"/signup\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> Local Signup</a>\n      </div> -->\n      <app-introduction-carousel></app-introduction-carousel>\n  <!-- </div>      \n</div> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/introduction-carousel/introduction-carousel.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/introduction-carousel/introduction-carousel.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h2 {\n  color: #234DE7;\n  font-style: italic;\n  font-weight: bold;\n  line-height: 35px;\n  font-size: 30px;\n}\n\n.h4 {\n  font-size: 22px;\n  line-height: 24px;\n  line-height: 28px;\n  font-weight: 300;\n  margin-top: 30px;\n}\n\n.first-page-content {\n  color: white;\n  font-weight: 300;\n}\n\n.content {\n  text-align: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  color: #5075FF;\n}\n\n.allergies-step-content {\n}\n\nmat-selection-list {\n  background: white;\n  text-align: left;\n  border-radius: 8px;\n}\n\n.content-third-page {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  text-align: center;\n  color: #5075FF;\n}\n\n.dark-page-title {\n  color: #101960;\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 31px;\n  text-align: center;\n}\n\n.footer {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.steps-background-image {\n  /* background-image: url(\"https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg\"); */\n  background-image: url(\"/assets/background1.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  /* transform: scale(1.1);  */\n}\n\n.parent-container {\n  position: relative;\n  overflow: hidden;\n}\n\n.layer {\n  background-color: rgba(0,4,23,0.8);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper-container {\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  display: flex;\n  height: 100vh;\n}\n\n.blur-background {\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); \n}\n\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 450px 75px 50px;\n      grid-template-rows: 450px 75px 50px;\n  -ms-grid-columns: 310px;\n      grid-template-columns: 310px;\n  justify-content: center;\n  align-content: center;\n  z-index: 100;\n  position: relative;\n}\n\n.nav-dotes {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 16px 1fr 16px 1fr 16px 1fr 16px;\n      grid-template-columns: 16px 1fr 16px 1fr 16px 1fr 16px;\n}\n\n.nav-dot {\n  height: 16px;\n  width: 16px;\n  border: 2px solid white;\n  border-radius: 8px;\n  display: inline-block;\n}\n\n.nav-dash {\n  border-left: 0;\n  border-right: 0;\n  height: 2px;\n  background: white;\n  width: 100%;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  display: inline-block;\n  position: relative;\n}\n\n.nav-dash>div {\n  position: absolute;\n  background: #11F6C3;\n  height: 100%;\n  width: 100%;\n  top: 0;\n}\n\nbutton[primary] {\n  background-color: #234DE7 !important;\n  width: 115px;\n  border-radius: 8px;\n}\n\nbutton[primary],\nbutton[secondary] {\n  box-shadow: none !important;\n  border: 2px solid #234DE7;\n  font-style: italic;\n}\n\nbutton[mat-mini-fab] {\n  color: #234DE7;\n}\n\nbutton[secondary] {\n  background-color: white !important;\n  color: #234DE7;\n  width: 125px;\n  border-radius: 8px;\n}\n\nbutton~button {\n  margin-left: 10px;\n}\n\n.counter-controles {\n  position: absolute;\n  bottom: 13px;\n  width: 230px;\n  left: 50%;\n  margin-left: -115px;\n}\n\n.minus-button {\n  float: left;\n}\n\n.plus-button {\n  float: right;\n}\n\n.circle {\n  height: 300px;\n  width: 300px;\n  border: 2px solid white;\n  border-radius: 147.5px;\n  position: relative;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  margin: 0 auto;\n}\n\n.circle>span {\n  color: #11F6C3;\n  font-size: 120px;\n  font-weight: bold;\n  font-style: italic;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  line-height: 2.3em;\n  display: inline-block;\n}\n\n.background-circle {\n  border: 2px solid #234DE7;\n  position: absolute;\n  border-radius: 150px;\n  z-index: -1;\n}\n\n.background-circle[large] {\n  height: 180px;\n  width: 180px;\n  left: 50%;\n  top: -40px;\n  margin-left: -90px;\n}\n\n.background-circle[medium] {\n  height: 46px;\n  width: 46px;\n  right: 10%;\n  top: -80px;\n}\n\n.background-circle[small] {\n  height: 17px;\n  width: 17px;\n  left: 60%;\n  top: -70px;\n}\n\n.content-background {\n  position: relative;\n  height: 100%;\n}\n\n.content-background>button {\n  width: 70px;\n  height: 42px;\n}\n\nmat-button-toggle {\n  box-shadow: none !important;\n  border: 2px solid #234DE7 !important;\n  font-style: italic;\n  background-color: white !important;\n  color: #234DE7;\n  width: 75px;\n  border-radius: 8px;\n  font-weight: bold;\n}\n\nmat-button-toggle.mat-button-toggle-checked {\n  color: #11F6C3;\n  background: #234DE7 !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\nmat-button-toggle~mat-button-toggle {\n  margin-left: 10px;\n}\n\nmat-button-toggle-group {\n  border: 0;\n}\n\nmat-form-field {\n  width: 245px;\n}\n\n::ng-deep .mat-list-item-content {\n  color: #010D37;\n}\n\n::ng-deep .mat-select-value {\n  color: #234DE7;\n  font-weight: bold;\n  text-align: center;\n}\n\n::ng-deep .mat-select-trigger {\n  color: #234DE7;\n  font-weight: bold;\n  text-align: center;\n  top: 30%;\n}\n\n.food-type-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  grid-column-gap: 20px;\n}\n\n.food-type-box {\n  width: 140px;\n  height: 250px;\n  background: grey;\n  border-radius: 8px;\n  position: relative;\n  background-color: rgba(0,4,23,0.8);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.vegetarian-food-image {\n  background-image: url('/assets/vegetarian.jpg');\n}\n\n.meat-food-image {\n  background-image: url('/assets/meat2.jpg');\n}\n\n.food-type-layer {\n  background: rgba(0,4,23,0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.food-type-text {\n  position: absolute;\n  bottom: 20px;\n  color: white;\n  font-size: 16px;\t\n  font-weight: 600;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  text-shadow: 0px 0px 10px black;\n}\n\n::ng-deep.mat-pseudo-checkbox::after {\n  display: none !important;\n}\n\n::ng-deep.mat-pseudo-checkbox-indeterminate {\n  border-color: #234DE7 !important;\n}\n\n@media only screen and (max-height: 575px) {\n  .wrapper {\n    -ms-grid-rows: 250px 75px 50px;\n        grid-template-rows: 250px 75px 50px;\n  }\n  .content, .footer, .nav-dotes {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n}"

/***/ }),

/***/ "./src/app/components/introduction-carousel/introduction-carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/introduction-carousel/introduction-carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\n  <div class=\"steps-background-image\" [ngClass]=\"{'blur-background': activePage!=0}\">\n    <div class=\"layer\">\n    </div>\n  </div>\n\n  <div class=\"wrapper-container\">\n  <div class=\"wrapper\">\n      <!-- Zero Section -->\n      <ng-container  *ngIf=\"activePage==0\" class=\"flip-horizontal-bottom\">\n        <div class=\"content\">\n          <h2 class=\"h2\">Foody helps you <br/>find the right things to cook, faster.</h2>\n          <h4 class=\"h4 first-page-content\">Let us help you by asking a <br/> few basic questions.</h4>\n        </div>\n        <div class=\"footer\">\n          <button mat-flat-button color=\"primary\" primary (click)=\"incrementIntroductionPage()\">Let's start</button>\n        </div>\n      </ng-container>\n      <!-- 1 section -->\n      <ng-container  *ngIf=\"activePage==1\">\n        <div class=\"content\">\n          <div class=\"circle\" [@scaleUp]>\n              <span [@numberChangeAnimation]=\"numberOfPeople\">{{numberOfPeople}}</span>\n              <div class=\"counter-controles\">\n                  <button color=\"secondary\" class=\"minus-button\" mat-mini-fab (click)=\"numberOfPeople = numberOfPeople - 1 > 1 ? numberOfPeople - 1 : 1\">\n                    <mat-icon aria-label=\"Example icon-button with a heart icon\">remove</mat-icon>\n                  </button>\n                  <button color=\"secondary\" class=\"plus-button\" mat-mini-fab (click)=\"numberOfPeople = numberOfPeople + 1\">\n                      <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n                  </button>\n                </div>\n          </div>\n          <h4 class=\"h4 first-page-content\">How many <b>people</b> do you have in your <b>household</b>?</h4>\n        </div>\n        <div class=\"footer\">\n          <button mat-flat-button color=\"primary\" primary (click)=\"incrementIntroductionPage()\">Continue</button>\n        </div>\n      </ng-container>\n      <!-- 2 section -->\n      <ng-container  *ngIf=\"activePage==2\">\n        <div class=\"content\">\n          <div class=\"circle\">\n              <span>&euro;</span><span [@numberChangeAnimation]=\"amountPerPerson\">{{amountPerPerson}}</span>\n              <div class=\"counter-controles\">\n                  <button color=\"secondary\" class=\"minus-button\" mat-mini-fab (click)=\"amountPerPerson = amountPerPerson - 1 > 1 ? amountPerPerson - 1 : 1\">\n                      <mat-icon aria-label=\"Example icon-button with a heart icon\">remove</mat-icon>\n                  </button>\n                  <button color=\"secondary\" class=\"plus-button\" mat-mini-fab (click)=\"amountPerPerson = amountPerPerson + 1\">\n                      <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n                  </button>\n                </div>\n          </div>\n          <h4 class=\"h4 first-page-content\">How much money do you guys want to spend <b>per day</b>?</h4>\n        </div>\n        <div class=\"footer\">\n          <button mat-flat-button color=\"primary\" primary (click)=\"incrementIntroductionPage()\">Continue</button>\n        </div>\n      </ng-container>\n      <!-- 3 section -->\n      <ng-container  *ngIf=\"activePage==3\">\n        <div class=\"content allergies-step-content\">\n          <mat-selection-list >\n            <mat-list-option *ngFor=\"let allergie of typeOfAllergies\" #shoes checkboxPosition=\"before\">\n              {{allergie.viewValue}}\n              <mat-divider></mat-divider>\n            </mat-list-option>\n          </mat-selection-list>\n          <h4 class=\"h4 first-page-content\">And to finish it off, which <b>allergies</b> should we keep in mind?</h4>\n        </div>\n        <div class=\"footer\">\n          <button mat-flat-button color=\"primary\" primary (click)=\"incrementIntroductionPage()\">Continue</button>\n        </div>\n      </ng-container>\n\n      <!-- 4 section -->\n      <ng-container  *ngIf=\"activePage==4\">\n        <div class=\"content\">     \n          <div class=\"food-type-container\">\n              <div matRipple [matRippleCentered] class=\"food-type-box vegetarian-food-image\" (click)=\"foodType=foodTypEnum.Vegetarian\">\n                <div class=\"food-type-layer\" [@brightDimSelection]=\"foodType===foodTypEnum.Vegetarian? 'active': ''\"></div>\n                <span class=\"food-type-text\">\n                  Vegetarian\n                </span>\n              </div>   \n              <div matRipple [matRippleCentered] class=\"food-type-box meat-food-image\"  (click)=\"foodType=foodTypEnum.Everything\">\n                <div class=\"food-type-layer\"  [@brightDimSelection]=\"foodType===foodTypEnum.Everything? 'active':''\"></div>\n                <span class=\"food-type-text\">\n                  Everything\n                </span>\n              </div>  \n          </div>  \n          <h4 class=\"h4 first-page-content\">Do you guys prefer to eat vegetarian or everything?</h4>\n        </div>\n        <div class=\"footer\">\n          <button mat-flat-button color=\"primary\" primary (click)=\"generateRecepies()\" [routerLink]=\"['/weeks']\">Done!</button>\n        </div>\n      </ng-container>\n\n      <!-- Navigation dotes -->\n      <div class=\"nav-dotes\" *ngIf=\"activePage!==0\">\n\n        <div class=\"nav-dot\"  [@activeStepCircle]=\"activePage>=1 ? 'active': ''\"></div>\n        <div class=\"nav-dash\">\n          <div *ngIf=\"activePage>=2\" [@progressAnimation]></div>\n        </div>\n\n        <div class=\"nav-dot\"  [@activeStepCircle]=\"activePage>=2 ? 'active': ''\"></div>\n        <div class=\"nav-dash\">\n          <div *ngIf=\"activePage>=3\" [@progressAnimation]></div>\n        </div>\n\n        <div class=\"nav-dot\" [@activeStepCircle]=\"activePage>=3 ? 'active': ''\"></div>\n        <div class=\"nav-dash\">\n          <div *ngIf=\"activePage>=4\" [@progressAnimation]></div>\n        </div>\n\n        <div class=\"nav-dot\" [@activeStepCircle]=\"activePage>=4 ? 'active': ''\"></div> \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/introduction-carousel/introduction-carousel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/introduction-carousel/introduction-carousel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IntroductionCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionCarouselComponent", function() { return IntroductionCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodType;
(function (FoodType) {
    FoodType[FoodType["Vegetarian"] = 0] = "Vegetarian";
    FoodType[FoodType["Everything"] = 1] = "Everything";
})(FoodType || (FoodType = {}));
var IntroductionCarouselComponent = /** @class */ (function () {
    function IntroductionCarouselComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foodTypEnum = FoodType;
        this.isCounterChanged = false;
        this.selectedAlergies = ['no-allergies'];
        this.activePage = 0;
        this.numberOfPeople = 1;
        this.amountPerPerson = 1;
        this.typeOfAllergies = [{ value: 'avocado', viewValue: 'Avocado' },
            { value: 'peanuts', viewValue: 'Peanuts' },
            { value: 'gluten_intolerance', viewValue: 'Gluten intolerance' },
            { value: 'lactose_intolerance', viewValue: 'Lactose intolerance' },
            { value: 'other', viewValue: 'Other' },];
        this.foodType = FoodType.Vegetarian;
    }
    IntroductionCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var step = params['step'];
            if (step) {
                _this.activePage = +step;
            }
        });
    };
    IntroductionCarouselComponent.prototype.incrementIntroductionPage = function () {
        this.router.navigate(['start', this.activePage + 1]);
    };
    IntroductionCarouselComponent.prototype.generateRecepies = function () {
    };
    IntroductionCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction-carousel',
            template: __webpack_require__(/*! ./introduction-carousel.component.html */ "./src/app/components/introduction-carousel/introduction-carousel.component.html"),
            styles: [__webpack_require__(/*! ./introduction-carousel.component.css */ "./src/app/components/introduction-carousel/introduction-carousel.component.css")],
            animations: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_1__["scaleUp"],
                _animations_animations__WEBPACK_IMPORTED_MODULE_1__["numberChangeAnimation"],
                _animations_animations__WEBPACK_IMPORTED_MODULE_1__["progressAnimation"],
                _animations_animations__WEBPACK_IMPORTED_MODULE_1__["activeStepCircle"],
                _animations_animations__WEBPACK_IMPORTED_MODULE_1__["brightDimSelection"]
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntroductionCarouselComponent);
    return IntroductionCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"col-sm-6 col-sm-offset-3\">\n\n    <h1><span class=\"fa fa-sign-in\"></span> Login</h1>\n\n    <!-- show any messages that come back with authentication -->\n\n    <!-- LOGIN FORM -->\n    <form (ngSubmit)=\"onLoginSubmit()\" #loginForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"loginData['email']\"/>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"loginData['password']\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Login</button>\n    </form>\n    <hr>\n    <p>Need an account? <a routerLink=\"/signup\">Signup</a></p>\n    <p>Or go <a routerLink=\"/\">home</a>.</p>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-requests.service */ "./src/app/services/api-requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiRequestsService, router, authService) {
        this.apiRequestsService = apiRequestsService;
        this.router = router;
        this.authService = authService;
        this.loginData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        this.authService.login(this.loginData.email, this.loginData.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequestsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\n.error-template {padding: 40px 15px;text-align: center;}\n.error-actions {margin-top:15px;margin-bottom:15px;}\n.error-actions .btn { margin-right:10px; }\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"error-template\">\n        <h1>\n          Oops!</h1>\n        <h2>\n          404 Not Found</h2>\n        <div class=\"error-details\">\n          Sorry, an error has occured, Requested page not found!\n        </div>\n        <div class=\"error-actions\">\n          <a routerLink = \"/\" class=\"btn btn-primary btn-lg\"><span\n            class=\"glyphicon glyphicon-home\"></span>\n            Take Me Home </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"page-header text-center\">\n    <h1><span class=\"fa fa-anchor\"></span> Profile Page</h1>\n    <a routerLink=\"/\" (click)=\"logout()\" class=\"btn btn-default btn-sm\">Logout</a>\n  </div>\n\n  <div class=\"row\">\n    <!-- LOCAL INFORMATION -->\n    <div class=\"col-sm-6\">\n      <div class=\"well\">\n        <h3><span class=\"fa fa-user\"></span> Local</h3>\n        <p>\n          <strong>id</strong> {{userData.id}}<br>\n          <strong>email</strong> {{userData.email}}<br>\n        </p>\n      </div>\n    </div>\n  </div>\n  <app-test-component></app-test-component>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-requests.service */ "./src/app/services/api-requests.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(apiRequestsService, authService) {
        this.apiRequestsService = apiRequestsService;
        this.authService = authService;
        this.testEntries = [];
        this.userData = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiRequestsService.getUser(this.authService.getUserId()).subscribe(function (response) {
            _this.userData = response.local;
            _this.userData.id = _this.authService.getUserId();
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ProfileComponent.prototype.getTests = function () {
        var _this = this;
        this.apiRequestsService.getTests().subscribe(function (response) { return _this.testEntries = response; });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequestsService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe/recipe.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-wrapper {\n  padding: 36px;\n  padding-top: 0;\n  overflow: scroll;\n  margin: 0 auto;\n  max-width: 500px;\n  margin-bottom: 50px;\n}\n\n.header-container {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  margin-left: -50%;\n  z-index: 100;\n  width: 100%;\n}\n\n.recipe-video {\n  height: 26vh;\n  width: 100%;\n}\n\n.content-container {\n  margin-top: 26vh;\n  overflow: scroll;\n}\n\n.step-container {\n  width: 100%;\n  max-width: 500px;\n  background: #F4F4F4;\n  border-radius: 8px;\n  color: #234DE7;\n  padding: 16px 16px 16px 60px;\n  font-size: 16px;\n  position: relative;\n}\n\n.step-container[last] {\n  background: #FFDE00;\n}\n\n.steps-number {\n  position: absolute;\n  left: 25px;\n  font-weight: bold;\n}\n\n.step-container~.step-container {\n  margin-top: 15px;\n}\n\n.row {\n  margin: 0;\n}\n\nmat-button-toggle {\n  box-shadow: none !important;\n  background: rgba(244, 244, 244, 0.8) !important;\n  color: rgba(35, 77, 231, 0.8);\n  border: 0 !important;\n  width: 150px;\n  font-weight: bold;\n}\n\nmat-button-toggle.mat-button-toggle-checked {\n  color: #234DE7;\n  background: white !important;\n  border: 0 !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\nmat-button-toggle-group {\n  border: 0;\n  box-shadow: 0 -5px 30px 0 rgba(0,0,0,0.1);\n  border-radius: 8px;\n}\n\n.footer-container {\n  position: fixed;\n  left: 50%;\n  margin-left: -150px;\n  bottom: 10%;\n}\n\n.title-text {\n  color: #234DE7;\t\n  font-size: 22px;\t\n  font-weight: 700;\t\n  line-height: 29px;\n  padding: 15px;\n  padding-left: 0;\n}\n\n.section-title-text {\n  margin-bottom: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #234DE7;\n}\n\n/* Footer styles */\n\nmat-button-toggle {\n  box-shadow: none !important;\n  background: rgba(244, 244, 244, 0.8) !important;\n  color: rgba(35, 77, 231, 0.8);\n  border: 0 !important;\n  width: 150px;\n  font-weight: bold;\n}\n\nmat-button-toggle.mat-button-toggle-checked {\n  color: #234DE7;\n  background: white !important;\n  border: 0 !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-pseudo-checkbox::after {\n  display: none !important;\n}\n\nmat-button-toggle-group {\n  border: 0;\n  box-shadow: 0 -5px 30px 0 rgba(0,0,0,0.1);\n  border-radius: 8px;\n}\n\n.footer-container {\n  position: fixed;\n  left: 50%;\n  margin-left: -150px;\n  bottom: 7%;\n}\n\n.weeks-container {\n  margin: 0 auto;\n  max-width: 500px;\n}\n\n/* Footer styles */\n\nmat-button-toggle {\n  box-shadow: none !important;\n  background: rgba(244, 244, 244, 0.8) !important;\n  color: rgba(35, 77, 231, 0.8);\n  border: 0 !important;\n  width: 150px;\n  font-weight: bold;\n}\n\nmat-button-toggle.mat-button-toggle-checked {\n  color: #234DE7;\n  background: white !important;\n  border: 0 !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-pseudo-checkbox::after {\n  display: none !important;\n}\n\nmat-button-toggle-group {\n  border: 0;\n  box-shadow: 0 -5px 30px 0 rgba(0,0,0,0.1);\n  border-radius: 8px;\n}\n\n.footer-container {\n  position: fixed;\n  left: 50%;\n  margin-left: -150px;\n  bottom: 7%;\n}\n\n.weeks-container {\n  margin: 0 auto;\n  max-width: 500px;\n}\n\n/* Tab styles */\n\n::ng-deep.mat-tab-label-container {\n  position: fixed;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  bottom: 20px;\n  z-index: 200 !important;\n  border-radius: 8px;\n  background: rgba(245,245,245,0.8);\n  box-shadow: 0 -5px 30px 0 rgba(0,0,0,0.1);\n}\n\n::ng-deep.mat-tab-label-content {\n  color: #234DE7;\n  size: 16px;\n  font-weight: bold;\n}\n\n::ng-deep.mat-tab-label {\n  width: 150px;\n}\n\n::ng-deep.mat-tab-label-active {\n  opacity: 1 !important;\n  background: white;\n}\n\n::ng-deep.mat-ink-bar {\n  display: none;\n}\n\n::ng-deep mat-tab-header {\n  border-top: none !important;\n}\n"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-tab-group headerPosition=\"below\" position=\"center\" mat-stretch-tabs> \n\n  <!-- Preparetion Tab -->\n\n  <mat-tab label=\"Preparetion\">\n    <div class=\"recipe-wrapper\">\n      <div class=\"header-container\">\n        <iframe class=\"recipe-video\" src=\"https://www.youtube.com/embed/rHXobaiGFZ4?&theme=dark&autohide=1&modestbranding=1&showinfo=0&rel=0&end=149&iv_load_policy=3&mute=1\"\n          frameborder=\"0\">\n        </iframe>\n      </div>\n      <div class=\"content-container\">   \n        <h3 class=\"title-text\">Mexican pulled pork ketogenic high energy taco's</h3>\n        <h3 class=\"section-title-text\">Preparetion</h3>\n        <ng-container *ngFor=\"let preparetionStep of preperationSteps; let i = index\">\n            <div class=\"step-container\">\n              <span class=\"steps-number\">{{i+1}}</span>\n              {{preparetionStep.text}}\n            </div>\n        </ng-container>\n        <div class=\"step-container\" last>\n          <span class=\"steps-number\">{{preperationSteps.length + 1}}</span>Enjoy!\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n\n  <!-- Ingridients Tab -->\n\n  <mat-tab label=\"Ingrideints\"> \n      <div class=\"recipe-wrapper\">\n        <h3 class=\"title-text\">Mexican pulled pork ketogenic high energy taco's</h3>\n        <h4 class=\"section-title-text\">Ingridients</h4>\n        <div class=\"ingridient-container\">\n            <mat-selection-list>\n              <mat-list-option *ngFor=\"let ingridient of ingridientList\" checkboxPosition=\"before\">\n                <mat-divider></mat-divider>\n                {{ingridient.viewValue}}\n              </mat-list-option>\n            </mat-selection-list>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.ts ***!
  \*******************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeComponent = /** @class */ (function () {
    function RecipeComponent() {
        this.preperationSteps =
            [
                { text: 'In a large bowl, season the pork with salt and pepper. Toss untill well-coated.' },
                { text: 'Heat the vegetable oil in a Dutch oven over high heat for 5 minutes, until very hot.' },
                { text: 'Working in batches, sear the pork on each side for 1 minute, until a brown crust forms.' },
                { text: 'Add all of the pork to the pot with the chili powder, oregano, cumin, bay leaf, garlic and onion. Toss to combine. Add the lime juice, orange juice, and chicken broth. Cover, reduce the heat to medium-high, and cook until the meat is tender, 1 hour.' },
                { text: 'Remove the pork from the pot and shred using 2 forks. Let the carnitas cool for 10 minutes.' },
                { text: 'In a large bowl, combine the mixed greens, carnitas, carrots, corn, black beans, and avocado. Toss well. Add dessing if desired.' },
                { text: 'Divide between plates and serve.' },
            ];
        this.ingridientList =
            [
                { value: 'avocado', viewValue: 'Avocado' },
                { value: 'peanuts', viewValue: 'Peanuts' },
                { value: 'zuchini', viewValue: 'Zuchini' },
                { value: 'salt', viewValue: 'Salt' },
                { value: 'sugar', viewValue: 'Sugar' },
                { value: 'zuchini', viewValue: 'Zuchini' },
                { value: 'salt', viewValue: 'Salt' },
                { value: 'sugar', viewValue: 'Sugar' },
            ];
    }
    RecipeComponent.prototype.getScreenSize = function (event) {
    };
    RecipeComponent.prototype.setSlidesPerView = function () {
    };
    RecipeComponent.prototype.ngOnInit = function () {
    };
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/components/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/components/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"col-sm-6 col-sm-offset-3\">\n\n    <h1><span class=\"fa fa-sign-in\"></span> Signup</h1>\n\n    <!-- show any messages that come back with authentication -->\n\n    <!-- LOGIN FORM -->\n    <form (ngSubmit)=\"onSignUpSubmit()\" #signupForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"signupData['email']\"/>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"signupData['password']\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button>\n    </form>\n\n    <hr>\n    <p>Already have an account? <a routerLink=\"/login\">Login</a></p>\n    <p>Or go <a routerLink=\"/\">home</a>.</p>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-requests.service */ "./src/app/services/api-requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(apiRequestsService, router, authService) {
        this.apiRequestsService = apiRequestsService;
        this.router = router;
        this.authService = authService;
        this.signupData = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUpSubmit = function () {
        this.authService.createUser(this.signupData.email, this.signupData.password);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequestsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/test-component/test-component.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test-component/test-component.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col s12\">\n  <div class=\"container col s6\">\n    <h1>Test mongoDB</h1>\n    <h5>Here it is possible to test the connection between client, server and database</h5>\n    <h6>You need to be logged in to be able to use the endpoint</h6>\n    <form (submit)=\"onSubmit()\" novalidate #finalForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" name = \"name\" class=\"form-control\" id=\"name\" [(ngModel)]=\"testValues['name']\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" name = \"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"testValues['email']\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"type\">Type</label>\n        <input type=\"number\" name = \"type\" class=\"form-control\" id=\"type\" [(ngModel)]=\"testValues['type']\" required>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n    </form>\n  </div>\n  <hr/>\n  <div class=\"container col s6\">\n    <button (click)=\"getTests()\" class=\"btn btn-success\">Get entries</button>\n  </div>\n  <br>\n  <div *ngFor=\"let entry of testEntries\">\n      <pre>{{entry | json}}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/test-component/test-component.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-requests.service */ "./src/app/services/api-requests.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponentComponent = /** @class */ (function () {
    function TestComponentComponent(apiRequestsService) {
        this.apiRequestsService = apiRequestsService;
        this.testValues = {};
        this.testEntries = [];
    }
    TestComponentComponent.prototype.ngOnInit = function () {
    };
    TestComponentComponent.prototype.getTests = function () {
        var _this = this;
        this.apiRequestsService.getTests().subscribe(function (response) { return _this.testEntries = response; });
    };
    TestComponentComponent.prototype.onSubmit = function () {
        this.apiRequestsService.postTest(this.testValues).subscribe(function (response) { return alert('Successfully added'); });
    };
    TestComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-component',
            template: __webpack_require__(/*! ./test-component.component.html */ "./src/app/components/test-component/test-component.component.html"),
            styles: [__webpack_require__(/*! ./test-component.component.css */ "./src/app/components/test-component/test-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequestsService"]])
    ], TestComponentComponent);
    return TestComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/weeks/weeks.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/weeks/weeks.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weeks-wrapper {\n  padding: 36px;\n  margin-bottom: 50px;\n}\n\n.weeks-wrapper > ul {\n  padding: 0px;\n}\n\n.week-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 72px 1fr;\n      grid-template-columns: 72px 1fr;\n  justify-content: center;\n  align-content: center;\n  position: relative;\n  grid-column-gap: 15px;\n  margin-top: 20px;\n  cursor: pointer;\n  border-radius: 8px;\n  border-top-left-radius: 40px;\n  border-bottom-left-radius: 40px;\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px;\n}\n\n.week-wrapper>.img {\n  height: 72px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50px;\n}\n\n.week-header {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  align-content: center;\n  justify-content: center;\n  margin: 20px 0px;\n}\n\n.week-title {\n  color: #234DE7;\t\n  font-size: 22px;\t\n  font-weight: 700;\t\n  line-height: 29px;\n  display: inline-block;\n  padding: none;\n  margin: 0;\n}\n\n.edit-settings {\n  color: #BDBDBD;\t\n  font-size: 16px;\t\n  line-height: 21px;\n  cursor: pointer;\n  text-decoration: none;\n  -ms-grid-row-align: center;\n      align-self: center;\n  -ms-grid-column-align: right;\n      justify-self: right;\n}\n\n.recipe-text {\n  color: #010D37;\t\n  font-size: 16px;\t\n  height: 72px;\n  padding-right: 10px;\n  display: table-cell; \n  vertical-align: middle;\n}\n\nmat-tab-groups {\n  height:100%;\n}\n\n/* Footer styles */\n\nmat-button-toggle {\n  box-shadow: none !important;\n  background: rgba(244, 244, 244, 0.8) !important;\n  color: rgba(35, 77, 231, 0.8);\n  border: 0 !important;\n  width: 150px;\n  font-weight: bold;\n}\n\nmat-button-toggle.mat-button-toggle-checked {\n  color: #234DE7;\n  background: white !important;\n  border: 0 !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-pseudo-checkbox::after {\n  display: none !important;\n}\n\nmat-button-toggle-group {\n  border: 0;\n  box-shadow: 0 -5px 30px 0 rgba(0,0,0,0.1);\n  border-radius: 8px;\n}\n\n.footer-container {\n  position: fixed;\n  left: 50%;\n  margin-left: -150px;\n  bottom: 7%;\n}\n\n.weeks-container {\n  margin: 0 auto;\n  max-width: 500px;\n}\n\n/* Tab styles */\n\n::ng-deep.mat-tab-label-container {\n  position: fixed;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  bottom: 20px;\n  z-index: 200 !important;\n  border-radius: 8px;\n  background: rgba(245,245,245,0.8);\n  box-shadow: 0 -5px 30px 0 rgba(0,0,0,0.1);\n}\n\n::ng-deep.mat-tab-label-content {\n  color: #234DE7;\n  size: 16px;\n  font-weight: bold;\n}\n\n::ng-deep.mat-tab-label {\n  width: 150px;\n}\n\n::ng-deep.mat-tab-label-active {\n  opacity: 1 !important;\n  background: white;\n}\n\n::ng-deep.mat-ink-bar {\n  display: none;\n}\n\n::ng-deep mat-tab-header {\n  border-top: none !important;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/weeks/weeks.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/weeks/weeks.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-tab-group headerPosition=\"below\" position=\"center\" mat-stretch-tabs> \n  <mat-tab label=\"Recipes\"> \n      <div class=\"weeks-container\">\n        <div class=\"weeks-wrapper\">\n          <div class=\"week-header\">\n            <h3 class=\"week-title\">Week 1, 2019</h3>\n            <a class=\"edit-settings\" [routerLink]=\"['/start', 1]\">Edit household</a>\n          </div>\n          <ul>\n            <ng-container *ngFor=\"let recipe of recipeList\">\n              <li [routerLink]=\"['/recipe']\" matRipple class=\"week-wrapper\">\n                <div class=\"img\" [style.background-image]=\"recipe.image_url\"></div>\n                <div class=\"content\">\n                  <div class=\"recipe-text\">{{recipe.short_description}}</div>\n                </div>\n              </li>\n            </ng-container>\n          </ul>\n          <div class=\"week-header\">\n            <h3 class=\"week-title\">Week 1, 2019</h3>\n          </div>\n          <ul *ngFor=\"let recipe of recipeList\">\n            <li [routerLink]=\"['/recipe']\" matRipple class=\"week-wrapper\">\n              <div class=\"img\" [style.background-image]=\"recipe.image_url\"></div>\n              <div class=\"content\">\n                <div class=\"recipe-text\">{{recipe.short_description}}</div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n  </mat-tab>\n  <mat-tab label=\"Grocery list\"> \n    <div class=\"weeks-container\">\n      <div class=\"weeks-wrapper\">\n        <div class=\"week-header\">\n          <h3 class=\"week-title\">Week 1, 2019</h3>\n        </div>\n        <div class=\"ingridient-container\">\n            <mat-selection-list>\n              <mat-list-option *ngFor=\"let ingridient of ingridientList\" checkboxPosition=\"before\">\n                <mat-divider></mat-divider>\n                {{ingridient.viewValue}}\n              </mat-list-option>\n            </mat-selection-list>\n        </div>\n        <div class=\"week-header\">\n          <h3 class=\"week-title\">Week 1, 2019</h3>\n        </div>\n        <div class=\"ingridient-container\">\n            <mat-selection-list>\n              <mat-list-option *ngFor=\"let ingridient of ingridientList\" checkboxPosition=\"before\">\n                <mat-divider></mat-divider>\n                {{ingridient.viewValue}}\n              </mat-list-option>\n            </mat-selection-list>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n<!-- <div class=\"footer-container\">\n  <mat-button-toggle-group value=\"preparetion\" #group=\"matButtonToggleGroup\">\n    <mat-button-toggle value=\"preparetion\">\n      Recipes\n    </mat-button-toggle>\n    <mat-button-toggle value=\"ingrideints\">\n      Grocery list\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div> -->\n  "

/***/ }),

/***/ "./src/app/components/weeks/weeks.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/weeks/weeks.component.ts ***!
  \*****************************************************/
/*! exports provided: WeeksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeksComponent", function() { return WeeksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeeksComponent = /** @class */ (function () {
    function WeeksComponent() {
        this.recipeList = [
            {
                short_description: "Mexican pulled pork ketogenic high energy taco's",
                image_url: "url(assets/recipe1.jpg)"
            },
            {
                short_description: "Colombian abricote cottage cheese steak",
                image_url: "url(assets/recipe2.jpg)"
            },
            {
                short_description: "Traditional chicken with onions monstrosity",
                image_url: "url(assets/recipe3.jpg)"
            },
            {
                short_description: "Minimal calories for your food baby maker",
                image_url: "url(assets/recipe4.jpg)"
            },
            {
                short_description: "Eastern promises, when vodka meets potato, magic happens",
                image_url: "url(assets/recipe5.jpg)"
            },
            {
                short_description: "Indian amnsia, you will only remember what you ate in the monring",
                image_url: "url(assets/recipe6.jpg)"
            },
            {
                short_description: "Hand made pizza, oven napoli is jealous how crisp the crust is.",
                image_url: "url(assets/recipe7.jpg)"
            },
        ];
        this.ingridientList =
            [
                { value: 'avocado', viewValue: 'Avocado' },
                { value: 'peanuts', viewValue: 'Peanuts' },
                { value: 'zuchini', viewValue: 'Zuchini' },
                { value: 'salt', viewValue: 'Salt' },
                { value: 'sugar', viewValue: 'Sugar' },
                { value: 'zuchini', viewValue: 'Zuchini' },
                { value: 'salt', viewValue: 'Salt' },
                { value: 'sugar', viewValue: 'Sugar' },
            ];
    }
    WeeksComponent.prototype.ngOnInit = function () {
    };
    WeeksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weeks',
            template: __webpack_require__(/*! ./weeks.component.html */ "./src/app/components/weeks/weeks.component.html"),
            styles: [__webpack_require__(/*! ./weeks.component.css */ "./src/app/components/weeks/weeks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeeksComponent);
    return WeeksComponent;
}());



/***/ }),

/***/ "./src/app/services/api-requests.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api-requests.service.ts ***!
  \**************************************************/
/*! exports provided: ApiRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequestsService", function() { return ApiRequestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiRequestsService = /** @class */ (function () {
    function ApiRequestsService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.testEndpoint = 'test/';
        this.loginEndpoint = 'login/';
        this.signupEndpoint = 'signup/';
        this.userEndpoint = 'user/';
        this.actionUrl = "" + configurationService.apiHost + configurationService.apiPrefix;
    }
    ApiRequestsService.prototype.getTests = function () {
        return this.http.get(this.actionUrl + this.testEndpoint);
    };
    ApiRequestsService.prototype.postTest = function (jsonBody) {
        return this.http.post(this.actionUrl + this.testEndpoint, jsonBody);
    };
    ApiRequestsService.prototype.getUser = function (userId) {
        return this.http.get(this.actionUrl + this.userEndpoint + userId);
    };
    ApiRequestsService.prototype.postLogin = function (jsonBody) {
        return this.http.post(this.actionUrl + this.loginEndpoint, jsonBody);
    };
    ApiRequestsService.prototype.postSignup = function (jsonBody) {
        return this.http.post(this.actionUrl + this.signupEndpoint, jsonBody);
    };
    ApiRequestsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], ApiRequestsService);
    return ApiRequestsService;
}());



/***/ }),

/***/ "./src/app/services/configuration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/configuration.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this.apiHost = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiHost;
        this.apiPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiPrefix;
    }
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiHost: 'http://localhost:4200/',
    apiPrefix: 'api/',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/app.module */ "./src/app/components/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/martinavagyan/Desktop/IBM MAC/PROJECTS/foody/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map