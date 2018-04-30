webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".infopanel{\n    margin-top: 150px;\n}\n\n.formholer{\n    margin-top: 50px;\n}\n\n.roomli{\n    list-style-type: none;\n}\n\n.card-body{\nbackground-color: rgba(47, 166, 221, 0.61);\n}\n\n.help-block{\n    color: red;\n}\n\n.frontpic > img{\n    border-radius: 10px;\n}\n\n.infoheader{\n    color: red;\n}\n\n.infomsg{\n    color:white;\n}\n\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infopanel container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title infoheader\" align=\"center\">ABOUT OUR HOTEL</h5>\n      <p class=\"card-text infomsg\"> <i>Sweet Residence Hotel is a smaller 3-star business hotel, which offers excellent location and full comfort. The hotel\n        is only a step away from the main bus and railway stations. The sights of Jakarta and the old city centre are accessible\n        on foot. The hotel has comfortable rooms and 3 suites. If you travel by car you can use the parking garage in close\n        vicinity of the hotel.</i></p>\n      <br>\n      <div class=\"frontpic container\" align=\"center\"><img class=\"img-fluid\"src=\"../assets/img/receptionist.jpg\" alt=\"\"></div>\n      <br>\n      <div align=\"center\">\n        <a href=\"#\" class=\"btn btn-danger\" routerLink=\"/rooms\">CHECK OUR ROOMS</a>\n      </div>\n    </div>\n  </div>\n  <br>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 formholer\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">ADDRESS</h5>\n          <p class=\"card-text infomsg\">Jl. Budi Raya 21, Kebon Jeruk, Jakarta <br>\n          Indonesia</p>\n          <p>contact: +62 10000000000 <br>email: +62 contact@contact.com</p>\n        </div>\n      </div>\n      <br>\n    </div>\n    <div class=\"col-sm-6 formholer\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">SOCIAL MEDIA</h5>\n          <p class=\"card-text infomsg\">follow our social media platforms <br>for promo's and news.</p>\n          <a href=\"https://facebook.com/lamingitteh\" target=\"_blank\">facebook</a>\n          <br> <a href=\"https://instagram.com/lamingitteh\" target=\"_blank\">instagram</a>\n          <br>\n          <br>\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_rooms_component__ = __webpack_require__("./src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_component__ = __webpack_require__("./src/app/reservation/reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //
 //



// import { AddComponent } from './add/add.component';//
// import { EditComponent } from './edit/edit.component';//
// constant for redirecting
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_4__rooms_rooms_component__["a" /* RoomsComponent */] },
    { path: 'reservation', component: __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_component__["a" /* ReservationComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] }
];
// -----------------------
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes) //
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-background></app-background>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rooms_rooms_component__ = __webpack_require__("./src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reservation_reservation_component__ = __webpack_require__("./src/app/reservation/reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_available_service__ = __webpack_require__("./src/app/services/available.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_room_service__ = __webpack_require__("./src/app/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_reservation_service__ = __webpack_require__("./src/app/services/reservation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__background_background_component__ = __webpack_require__("./src/app/background/background.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 // BS Datepicker

// ROUTING
 //








// SERVICES
 // Import service




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__reservation_reservation_component__["a" /* ReservationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__background_background_component__["a" /* BackgroundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["b" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_available_service__["a" /* AvailableService */], __WEBPACK_IMPORTED_MODULE_15__services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_16__services_reservation_service__["a" /* ReservationService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/***/ (function(module, exports) {

module.exports = ".mainbackground{\n    background-image: url('/assets/img/mainback.jpg');\n        background-repeat: no-repeat;\n            background-position: center; \n    background-size:cover;\n    position: fixed;\n    top: 0; right: 0; bottom: 0; left: 0;\n}"

/***/ }),

/***/ "./src/app/background/background.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbackground\">\n\n  </div>"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    BackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-background',
            template: __webpack_require__("./src/app/background/background.component.html"),
            styles: [__webpack_require__("./src/app/background/background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".page-footer {\n    background-color: #0090F7;\n    clear: both;\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n}\n\n.footer-copyright  {\n    color: white;\n    background-color:black;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n\n.page-footer > info{\n    font-size: 1rem;\n    color: white;\n}\n\n.text-uppercase{\n    color: white;\n    margin-top: 0%;\n}\n\n.footerlinks{\n    color: red;\n}\n\n.footercontainer{\n    bottom: 0px;\n    position: -webkit-sticky;\n    position: sticky\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footercontainer\">\n  <footer class=\"page-footer font-small blue pt-4 mt-4\">\n    <div class=\"text-uppercase\" align=\"center\">Sweet Residence - Jakarta Barat</div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid text-center\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            \"Sweet Residence\" is an elegant 3-star hotel in the center of Jakarta, 250m away from the main Airport and central\n          </div>\n        </div>\n      </div>\n  \n      <!--/.Footer Links-->\n  \n      <div class=\"footer-copyright py-2 text-center\">\n        © 2018 Copyright -\n        <a href=\"https://github.com/laminry\" target=\"_blank\">Lamin & Amelia </a>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\n.mainbody{\n    margin-top: 150px;\n    position: relative;\n}\n\n.myjumbotron input:hover, select:hover\n{\t\n    background-color: rgb(223, 157, 66);\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n      transition: .5s ease-in-out;\n  -webkit-transition: .5s ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n\t\n}\n\n.myjumbotron\n{\t\n\tmargin-top: 100px;\n\tbackground-color: rgba(0,0,0,0.61);\n\tcolor: white;\n\theight: 300px;\n    border: groove;\n}\n\n.myjumbotron input, option\n{\t\n\tcolor: black;\n\t\n}\n\n.promo{\n    width: 100%;\n    background-color: red;\n    margin-left: 0px;\n\n}\n\n.space:hover{\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    border-color: red;\n}\n\n.container img {\n    width: 100%;\n    height: 300px;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"mainbody\">\n    <div class=\"jumbotron container myjumbotron\">\n      <div class=\"panel\">\n        <div class=\"panel-body\">\n          <form #searchform=\"ngForm\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Check-In</th>\n                  <th>Check-Out</th>\n                  <th>No. Adults</th>\n                  <th>No. Children</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" id=\"checkin\" placeholder=\"Check In-Date\" name=\"Check In-Date\" [(ngModel)]=\"filterrooms.checkin\" bsDatepicker>\n                  </td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" id=\"checkout\" placeholder=\"Check In-Date\" name=\"Check Out-Date\" [(ngModel)]=\"filterrooms.checkout\"  bsDatepicker>\n                  </td>\n                  <td>\n                    <div class=\"form-group\">\n                      <select class=\"form-control\" id=\"noadults\" name=\"No. Adults\" [(ngModel)]=\"filterrooms.noadults\">\n                        <option>1</option>\n                        <option>2</option>\n                      </select>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-group\">\n                      <select class=\"form-control\" id=\"nochildren\" name=\"No. Children\" [(ngModel)]=\"filterrooms.nochildren\">\n                        <option>0</option>\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                      </select>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n\n          </form>\n          <div class=\"panel-footer\" align=\"right\">\n            <button type=\"submit\" class=\"btn btn-danger\" data-toggle=\"collapse\" data-target=\"#result\" (click)=\"checkSearch() \">Search</button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"container \">\n      <div class=\"container\" id=\"result\" class=\"collapse\">\n        <div class=\"row\">\n          <div class=\"card-deck mb-4 col-sm-4 space\" *ngFor=\"let room of rooms\">\n            <div class=\"card\">\n              <img class=\"card-img-top imgsize\" src=\"{{room.image}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{room.roomtype}}</h5>\n                <p class=\"card-text\">{{room.description}}</p>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"btn-group downbtn\">\n                  <button type=\"button\" class=\"btn btn-default btn-md\">\n                    <strong>Rp: {{room.price}}</strong>\n                  </button>&nbsp;&nbsp;\n                  <button type=\"button\" class=\"btn btn-danger btn-md btn-block\" routerLink=\"/reservation\">BOOK NOW</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"https://res.cloudinary.com/dg4oldfw9/image/upload/v1524744800/welcome.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"https://res.cloudinary.com/dg4oldfw9/image/upload/v1524744442/two.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"https://res.cloudinary.com/dg4oldfw9/image/upload/v1524744271/one.jpg\" alt=\"Third slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n\n\n\n    <div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_available_service__ = __webpack_require__("./src/app/services/available.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Import service

var HomeComponent = /** @class */ (function () {
    function HomeComponent(roomService, datepipe) {
        this.roomService = roomService;
        this.datepipe = datepipe;
        this.rooms = [];
        this.filterrooms = {
            checkin: '',
            checkout: '',
            noadults: 0,
            nochildren: 0
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.checkSearch = function () {
        var _this = this;
        console.log(this.filterrooms);
        this.filterrooms.checkin = this.datepipe.transform(this.filterrooms.checkin, 'yyyy-MM-dd');
        this.filterrooms.checkout = this.datepipe.transform(this.filterrooms.checkout, 'yyyy-MM-dd');
        this.roomService.getAvailable(this.filterrooms).subscribe(function (res) { _this.rooms = res; });
        console.log(this.filterrooms);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_available_service__["a" /* AvailableService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "nav a:hover{\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    border-radius: 10px;\n    color:white;\n    background-color: rgb(0, 119, 255);\n    transition: .5s ease-in-out;\n    -webkit-transition: .5s ease-in-out;\n\n}\n\nnav a{\n    color: red;\n}\n\nnav li{\n    margin-left: 10px;\n}\n\nmodalbtn:hover{\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2);\n    border-radius: 10px;\n    color: red;\n    background-color: white;\n    transition: .5s ease-in-out;\n    -webkit-transition: .5s ease-in-out;\n}\n\ninput:hover{\n    background-color: rgb(223, 157, 66);\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n      transition: .5s ease-in-out;\n  -webkit-transition: .5s ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n\n}\n\n.modalbody{\npadding:9px 15px;\n    background-color: rgba(0,0,0,0.61);\n}\n\n.menutogglebtn{\n    color: red;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbackground\">\n  <nav class=\"navbar navbar-expand-lg nav-bar default\">\n    <button class=\"navbar-toggler menutogglebtn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <strong class=\"material-icons menutoggle\">MENU</strong>\n    </button>\n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/rooms\">Rooms</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <a href=\"#aboutdev\" data-toggle=\"modal\">\n          <button class=\"btn btn-danger\" type=\"button\">About Dev</button>\n        </a>\n      </form>\n    </div>\n  </nav>\n\n\n\n\n\n  <div id=\"aboutdev\" class=\"modal fade modalbody\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" align=\"center\"> APP DEVELOPED BY....</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"card-deck\">\n            <div class=\"card mb-4\">\n              <div class=\"view overlay checkroom\">\n                <!-- <img class=\"img-fluid imgsize\" src=\"../assets/rooms/superior.jpg\" alt=\"Card image cap\"> -->\n                <a href=\"#!\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <h4 class=\"card-title\">Lamin Gitteh</h4>\n                </div>\n                <p class=\"card-text\">Binus International University</p>\n              </div>\n              <div class=\"card-footer\">\n                <a href=\"https://www.github.com/laminry\" target=\"_blank\">\n                  <button type=\"button\" class=\"btn btn-danger btn-md btn-block\">GITHUB</button>\n                </a>\n              </div>\n            </div>\n\n            <div class=\"card mb-4\">\n              <div class=\"view overlay checkroom\">\n                <!-- <img class=\"img-fluid imgsize\" src=\"../assets/rooms/executive.jpg\" alt=\"Card image cap\"> -->\n                <a href=\"#!\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Amelia</h4>\n                <p class=\"card-text\">Binus International University</p>\n              </div>\n              <div class=\"card-footer\">\n                <a href=\"https://www.github.com/ameliandrini\" target=\"_blank\">\n                  <button type=\"button\" class=\"btn btn-danger btn-md btn-block\">GITHUB</button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    // -----------
    NavbarComponent.prototype.setActive = function (menu) {
        $('li').removeClass();
        $('#' + menu).addClass('active');
    }; // -----
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/reservation/reservation.component.css":
/***/ (function(module, exports) {

module.exports = ".mainbody{\n    margin-top: 50px;\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n.formholer{\n    margin-top: 50px;\n}\n\n.roomli{\n    list-style-type: none;\n}\n\n.card-body{\nbackground-color: rgba(47, 166, 221, 0.61);\n}\n\n.help-block{\n    color: red;\n}"

/***/ }),

/***/ "./src/app/reservation/reservation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainbody\">\n  <div class=\"col-sm-6 formholer\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">RESERVATION</h5>\n        <div class=\"container formcontainer\">\n          <div class=\"innerform\">\n            <form #reservationform=\"ngForm\" (ngSubmit)=\"reservationinfo(reservationform)\">\n              <div class=\"form-group\" [class.has-error]=\"inputname.invalid && inputname.touched\">\n                <label for=\"name\" class=\"control-label\">Full Name</label>\n                <input id=\"name\" required type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"guessbooking.name\" #inputname=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"inputname.invalid && inputname.touched\">\n                  Sorry! Guess name is required\n                </span>\n              </div>\n\n              <div class=\"form-group\" [class.has-error]=\"inputemail.invalid && inputemail.touched\">\n                <label for=\"email\" class=\"control-label\">Email</label>\n                <input id=\"email\" required type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"guessbooking.email\" #inputemail=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"inputemail.invalid && inputemail.touched\">\n                  Sorry! E-mail Address is required\n                </span>\n              </div>\n\n\n              <div class=\"form-group\" [class.has-error]=\"inputpassid.invalid && inputpassid.touched\">\n                <label for=\"passid\" class=\"control-label\">Passport / ID</label>\n                <input id=\"passid\" required type=\"text\" class=\"form-control\" name=\"passid\" [(ngModel)]=\"guessbooking.passid\" #inputpassid=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"inputpassid.invalid && inputpassid.touched\">\n                  Sorry! Passport or ID is required\n                </span>\n              </div>\n\n\n              <div class=\"form-group\" [class.has-error]=\"inputroom.invalid && inputroom.touched\">\n                <label for=\"roomtype\">Room Type</label>\n                <select class=\"form-control col-sm-12\" id=\"roomtype\" required name=\"roomtype\" [(ngModel)]=\"guessbooking.room_id\" #inputroom=\"ngModel\">\n                  <option *ngFor=\"let allrooms of rourooms\"> {{allrooms.id}}</option>\n                </select>\n                <span class=\"help-block\" *ngIf=\"inputroom.invalid && inputroom.touched\">\n                  Sorry! A room is required.\n                </span>\n              </div>\n\n\n              <div class=\"form-group\" [class.has-error]=\"incheckin.invalid && incheckin.touched\">\n                <label for=\"checkin\">Check In-Date</label>\n                <input type=\"text\" class=\"form-contro col-sm-12\" required id=\"checkin\" placeholder=\"Check In-Date\" name=\"Check In-Date\" [(ngModel)]=\"guessbooking.checkin\"\n                  #incheckin=\"ngModel\" bsDatepicker>\n                <span class=\"help-block\" *ngIf=\"incheckin.invalid && incheckin.touched\">\n                  Sorry! Check-in date is required.\n                </span>\n              </div>\n\n\n              <div class=\"form-group\" [class.has-error]=\"inputcheckout.invalid && inputcheckout.touched\">\n                <label for=\"checkout\">Check Out-Date</label>\n                <input type=\"text\" class=\"form-contro col-sm-12\" required id=\"checkout\" placeholder=\"Check In-Date\" name=\"Check Out-Date\"\n                  [(ngModel)]=\"guessbooking.checkout\" #inputcheckout=\"ngModel\" bsDatepicker>\n                <span class=\"help-block\" *ngIf=\"inputcheckout.invalid && inputcheckout.touched\">\n                  Sorry! Check-Out date is required.\n                </span>\n              </div>\n\n\n              <div class=\"form-group\" [class.has-error]=\"inputnoadults.invalid && inputnoadults.touched\">\n                <label for=\"noadults\">No. Adults</label>\n                <select class=\"form-control col-sm-12\" required id=\"noadults\" name=\"No. Adults\" [(ngModel)]=\"guessbooking.noadults\" #inputnoadults=\"ngModel\">\n                  <span class=\"help-block\" *ngIf=\"inputnoadults.invalid && inputnoadults.touched\">\n                    Sorry! Number is Adults required.\n                  </span>\n                  <option>1</option>\n                  <option>2</option>\n                </select>\n              </div>\n\n\n              <div class=\"form-group\" [class.has-error]=\"inputkids.invalid && inputkids.touched\">\n                <label for=\"nochildren\">No. Children</label>\n                <select class=\"form-control col-sm-12\" required id=\"nochildren\" name=\"No. Children\" [(ngModel)]=\"guessbooking.nochildren\"\n                  #inputkids=\"ngModel\">\n                  <option>0</option>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                </select>\n                <span class=\"help-block\" *ngIf=\"inputkids.invalid && inputkids.touched\">\n                  Sorry! Number is kids required.\n                </span>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label for=\"additional\">Additional</label>\n                <textarea class=\"form-control col-sm-12\" rows=\"5\" id=\"additional\" name=\"Additional Request\" [(ngModel)]=\"guessbooking.additional\">\n              </textarea>\n              </div>\n\n\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"reservationform.invalid\">\n                Book Now\n              </button>\n            </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div class=\"col-sm-6 formholer\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">RESERVATION CENTER</h5>\n        <p class=\"card-text\">Kindly contact us for any changes requires. Only availble 3 nights before checkin.</p>\n        <a href=\"#\" class=\"btn btn-danger\" routerLink=\"/rooms\">CHECK OUR ROOMS</a>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\n        <br>\n        <br>\n        <pre class=\"card card-block card-header\">{{message}}</pre>\n        <ng-template #template>\n          <div class=\"modal-body text-center\">\n            <p>Do you want to confirm?</p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\">Yes</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">No</button>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <br>\n    <div class=\"card text-white bg-info mb-3\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">AVAILABLE ROOMS</h5>\n        <div class=\"alert alert-info\" align=\"center\">\n          <strong>Select Room Index !</strong>\n        </div>\n        <ul>\n          <li class=\"help-block roomli\" *ngFor=\"let allrooms of rourooms\">{{allrooms.id}} - {{allrooms.roomtype}} </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reservation/reservation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_reservation_service__ = __webpack_require__("./src/app/services/reservation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_service__ = __webpack_require__("./src/app/services/room.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // Import service
var ReservationComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function ReservationComponent(reservationService, roomService, router, datepipe) {
        this.reservationService = reservationService;
        this.roomService = roomService;
        this.router = router;
        this.datepipe = datepipe;
        this.bookings = [];
        this.guessbooking = {
            name: '',
            email: '',
            passid: '',
            room_id: null,
            checkin: '',
            checkout: '',
            noadults: 0,
            nochildren: 0,
            additional: ''
        };
        this.rourooms = [];
    }
    ReservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getRooms().subscribe(function (res) { _this.rourooms = res; });
    };
    ReservationComponent.prototype.reservationinfo = function (reservation) {
        var _this = this;
        this.guessbooking.checkin = this.datepipe.transform(this.guessbooking.checkin, 'yyyy-MM-dd');
        this.guessbooking.checkout = this.datepipe.transform(this.guessbooking.checkout, 'yyyy-MM-dd');
        this.reservationService.submitReservation(this.guessbooking).subscribe(function (res) { _this.bookings = res; });
    };
    ReservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reservation',
            template: __webpack_require__("./src/app/reservation/reservation.component.html"),
            styles: [__webpack_require__("./src/app/reservation/reservation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_reservation_service__["a" /* ReservationService */], __WEBPACK_IMPORTED_MODULE_4__services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/rooms/rooms.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n    padding-left: 20px;\n}\n\n\n\n.space{\n    padding: 20px;\n}\n\n\n\n.card-title{\n    /* background-color: rgba(0,0,0,0.61); */\n    color:black;\n}\n\n\n\n.space:hover{\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    border-color: red;\n}\n\n\n\n.downbtn{\n    padding-left: 20px;\n}\n\n\n\n.infopanel{\n    background-color: rgba(0, 0, 0,0.7);\n    border-width: 4px;\n    margin-top: 150px;\n    position: relative;\n    border-radius: 10px;\n}\n\n\n\n.injum{\n        padding-top: 30px;\n}\n\n\n\n.container img {\n    width: 100%;\n    height: 300px;\n}\n\n\n\n#hd{\n    color: red;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n}\n\n\n\n#motto{\n    font-size: 15px;\n    color: white;\n}\n\n\n\n.mainbody > img{\n    height: 470px;\n    width : auto ;/*maintain aspect ratio*/\n    max-width : 370px;\n}"

/***/ }),

/***/ "./src/app/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron infopanel\" align=\"center\">\n    <h1 id=\"hd\">Sweet Residence</h1>\n    <p id=\"motto\">We offer high-quality\n    service at affordable prices. Our team pays attention at every detail in order to offer its guests maximum comfort during\n    their business or holiday trips. Convenience and cosines are our priorities and customer satisfaction – our major</p>\n  </div>\n\n</div>\n\n\n<div class=\"mainbody\">\n  <div class=\"container-fluid holder\">\n    <div class=\"row\">\n      <div class=\"card-deck mb-2 col-sm-4 space\" *ngFor=\"let room of rooms\">\n        <div class=\"card\">\n          <img class=\"card-img-top imgsize\" src=\"{{room.image}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{room.roomtype}}</h5>\n            <p class=\"card-text\">{{room.description}}</p>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"btn-group downbtn\">\n              <button type=\"button\" class=\"btn btn-default btn-md\">\n                <strong>Rp: {{room.price}}</strong>\n              </button>&nbsp;&nbsp;\n              <!-- <button type=\"button\" class=\"btn btn-danger btn-md btn-block\" (click)=\"bookNow(bookInfo.id)\">BOOK NOW</button> -->\n              <button type=\"button\" class=\"btn btn-danger btn-md btn-block\" routerLink=\"/home\">CHECK AVAILABILITY</button>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_service__ = __webpack_require__("./src/app/services/room.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Import service
var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(roomService) {
        this.roomService = roomService;
        this.rooms = [];
        this.bookInfo = {};
        this.result = {};
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getRooms().subscribe(function (res) { _this.rooms = res; });
        // console.log(this.rooms);
    };
    RoomsComponent.prototype.bookNow = function (rid) {
        console.log(this.rooms.indexOf[0]);
        // this.roomService.getType(this.rooms['id']).subscribe(
        //   res => { this.result = res;
        //   console.log(this.result);
        //   },
        //   err => console.log(err.error)
        // );
    };
    RoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rooms',
            template: __webpack_require__("./src/app/rooms/rooms.component.html"),
            styles: [__webpack_require__("./src/app/rooms/rooms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_room_service__["a" /* RoomService */]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/services/available.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AvailableService = /** @class */ (function () {
    function AvailableService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/availablerooms';
    }
    // getRooms(): Observable<Checking[]> {
    //   return this.http.get<Checking[]>(this.url);
    // }
    AvailableService.prototype.getAvailable = function (formData) {
        return this.http.post(this.url, formData, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    AvailableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AvailableService);
    return AvailableService;
}());



/***/ }),

/***/ "./src/app/services/reservation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var ReservationService = /** @class */ (function () {
    function ReservationService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/postbooking';
    }
    // getRooms(): Observable<Checking[]> {
    //   return this.http.get<Checking[]>(this.url);
    // }
    ReservationService.prototype.submitReservation = function (reservationform) {
        return this.http.post(this.url, reservationform, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    ReservationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ReservationService);
    return ReservationService;
}());



/***/ }),

/***/ "./src/app/services/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var RoomService = /** @class */ (function () {
    function RoomService(http, http2) {
        this.http = http;
        this.http2 = http2;
        this.url = 'http://localhost:8000/api/rooms';
    }
    RoomService.prototype.getRooms = function () {
        return this.http.get(this.url);
    };
    RoomService.prototype.getType = function (rid) {
        // return this.http2.get('http://localhost:8000/api/type/' + rid).map(res => res.json());
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map