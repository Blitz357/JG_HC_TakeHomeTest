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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\r\n    padding-top: 15px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.inner-heading{\r\n    padding-top: 15px;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron about\">\n  <h1>About</h1>\n  <hr>\n  <h6>The People Search Test App was written by Jason Gregory for a job interview evaluation.</h6>\n  \n   <h6 class=\"inner-heading\">Requirement:</h6>\n   <p class=\"text-muted\">\n     The application accepts search input in a text box and then displays in a pleasing style a list of people where any part of their first or last name matches what was typed in the search box (displaying at least name, address, age, interests, and a picture).\n  </p>\n\n  <h6 class=\"inner-heading\">Summary of Technology:</h6>\n  <!-- <p class=\"text-muted\"> -->\n      <ul class=\"list-style text-muted\">\n          <li>ASP.NET Web API</li>\n          <li>Entity Framework</li>\n          <li>C#</li>\n          <li>NUnit</li>\n          <li>Moq</li>\n          <li>Angular 6</li>\n          <li>Angular CLI</li>\n          <li>Bootstrap 4</li>\n          <li>Typescript</li>\n          <li>Jasmine</li>\n          <li>Karma</li>\n          <li>Etc...</li>\n      </ul>\n</div>   "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _search_main_search_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-main/search-main.component */ "./src/app/search-main/search-main.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _person_info_person_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person-info/person-info.component */ "./src/app/person-info/person-info.component.ts");
/* harmony import */ var _person_address_person_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./person-address/person-address.component */ "./src/app/person-address/person-address.component.ts");
/* harmony import */ var _person_image_person_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./person-image/person-image.component */ "./src/app/person-image/person-image.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./people-list/people-list.component */ "./src/app/people-list/people-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: _search_main_search_main_component__WEBPACK_IMPORTED_MODULE_5__["SearchMainComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavigationBarComponent"],
                _search_main_search_main_component__WEBPACK_IMPORTED_MODULE_5__["SearchMainComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _person_info_person_info_component__WEBPACK_IMPORTED_MODULE_9__["PersonInfoComponent"],
                _person_address_person_address_component__WEBPACK_IMPORTED_MODULE_10__["PersonAddressComponent"],
                _person_image_person_image_component__WEBPACK_IMPORTED_MODULE_11__["PersonImageComponent"],
                _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_13__["PeopleListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main.ts":
/*!*************************!*\
  !*** ./src/app/main.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"/\"><b>People Search Test App</b> <span class=\"glyphicon glyphicon-search\"></span></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"/search\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"/about\">About</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n</nav>  \r\n"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
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

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-not-found-warning {\r\n    padding-top: 15px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.page-not-found-button {\r\n    padding-top: 25px;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron page-not-found-warning\">\r\n    <h1>Page not found</h1>\r\n    <hr>\r\n    <p>Not sure what went wrong. Hmm... How about you go back to the search people page?</p>\r\n    <div class=\"page-not-found-button\">\r\n        <a class=\"btn btn-primary btn-lg float-right\" routerLink=\"/search\" role=\"button\">Go Search</a>\r\n    </div>\r\n</div>   "

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/people-list/people-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/people-list/people-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 20px;\r\n}\r\n\r\n.card-deck {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-deck .card {\r\n    margin: 0 0 1rem;\r\n    min-width: 300px;\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n    .card-deck .card {\r\n        flex: 0 0 48.7%;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n    .card-deck .card {\r\n        flex: 0 0 32%;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .card-deck .card {\r\n        flex: 0 0 24%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/people-list/people-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/people-list/people-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n  <ng-container *ngFor=\"let person of people\">\n      <div class=\"card\">\n          <person-image [id]=\"person.Id\"></person-image>\n          <div class=\"card-body\">\n              <person-info [person]=\"person\"></person-info>\n          </div>\n      </div>\n  </ng-container>\n</div>    "

/***/ }),

/***/ "./src/app/people-list/people-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/people-list/people-list.component.ts ***!
  \******************************************************/
/*! exports provided: PeopleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleListComponent", function() { return PeopleListComponent; });
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

var PeopleListComponent = /** @class */ (function () {
    function PeopleListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PeopleListComponent.prototype, "people", void 0);
    PeopleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'people-list',
            template: __webpack_require__(/*! ./people-list.component.html */ "./src/app/people-list/people-list.component.html"),
            styles: [__webpack_require__(/*! ./people-list.component.css */ "./src/app/people-list/people-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleListComponent);
    return PeopleListComponent;
}());



/***/ }),

/***/ "./src/app/person-address/person-address.component.css":
/*!*************************************************************!*\
  !*** ./src/app/person-address/person-address.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/person-address/person-address.component.html":
/*!**************************************************************!*\
  !*** ./src/app/person-address/person-address.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"text-muted text-center address\">\n  <small>\n      {{address.Address1}} \n      {{address.Address2}}<br/>\n      {{address.City}}, {{address.State}} {{address.ZipCode}}\n  </small>\n</span>\n"

/***/ }),

/***/ "./src/app/person-address/person-address.component.ts":
/*!************************************************************!*\
  !*** ./src/app/person-address/person-address.component.ts ***!
  \************************************************************/
/*! exports provided: PersonAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonAddressComponent", function() { return PersonAddressComponent; });
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

var PersonAddressComponent = /** @class */ (function () {
    function PersonAddressComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonAddressComponent.prototype, "address", void 0);
    PersonAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'person-address',
            template: __webpack_require__(/*! ./person-address.component.html */ "./src/app/person-address/person-address.component.html"),
            styles: [__webpack_require__(/*! ./person-address.component.css */ "./src/app/person-address/person-address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonAddressComponent);
    return PersonAddressComponent;
}());



/***/ }),

/***/ "./src/app/person-image/person-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/person-image/person-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/person-image/person-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/person-image/person-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"card-img-top\" [src]=\"imageSrc\" alt=\"Image\">\n"

/***/ }),

/***/ "./src/app/person-image/person-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/person-image/person-image.component.ts ***!
  \********************************************************/
/*! exports provided: PersonImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonImageComponent", function() { return PersonImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonImageComponent = /** @class */ (function () {
    function PersonImageComponent(http) {
        this.http = http;
        this.imageSrc = '../Src/assets/placeholder.png';
    }
    PersonImageComponent.prototype.ngAfterViewInit = function () {
        this.fetchImage();
    };
    PersonImageComponent.prototype.fetchImage = function () {
        var _this = this;
        var url = "api/peopleimage/" + this.id.toString();
        this.http.get(url).subscribe(function (base64String) {
            _this.imageSrc = base64String;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PersonImageComponent.prototype, "id", void 0);
    PersonImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'person-image',
            template: __webpack_require__(/*! ./person-image.component.html */ "./src/app/person-image/person-image.component.html"),
            styles: [__webpack_require__(/*! ./person-image.component.css */ "./src/app/person-image/person-image.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonImageComponent);
    return PersonImageComponent;
}());



/***/ }),

/***/ "./src/app/person-info/person-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/person-info/person-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".interest {\r\n    display: block; \r\n    padding-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/person-info/person-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-info/person-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h5 class=\"card-title\">{{getFullName()}}</h5>\r\n<hr/>\r\n<div>\r\n    <p class=\"card-text\">Age: <small class=\"text-muted\">{{getAge()}}</small></p>\r\n    <p class=\"card-text\">\r\n        Interests:<br />\r\n        <span class=\"text-muted interest\">\r\n            <small>{{getInterest()}}</small>\r\n        </span>\r\n    </p>\r\n\r\n    <p class=\"card-text\">\r\n        Address: <br />\r\n        <person-address [address]=\"person.PersonAddress\"></person-address>\r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/person-info/person-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-info/person-info.component.ts ***!
  \******************************************************/
/*! exports provided: PersonInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonInfoComponent", function() { return PersonInfoComponent; });
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

var PersonInfoComponent = /** @class */ (function () {
    function PersonInfoComponent() {
    }
    PersonInfoComponent.prototype.getFullName = function () {
        if (this.person.FirstName && this.person.LastName) {
            return this.person.FirstName + " " + this.person.LastName;
        }
        else if (this.person.FirstName) {
            return this.person.FirstName;
        }
        else if (this.person.LastName) {
            return this.person.LastName;
        }
        else {
            return 'Unknown';
        }
    };
    PersonInfoComponent.prototype.getAge = function () {
        if (!this.person.DateOfBirth) {
            return 0;
        }
        var today = new Date();
        var dateOfBirth = new Date(this.person.DateOfBirth);
        var age = today.getFullYear() - dateOfBirth.getFullYear();
        var m = today.getMonth() - dateOfBirth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
            age--;
        }
        return age;
    };
    PersonInfoComponent.prototype.getInterest = function () {
        if (!this.person.Interests) {
            return '';
        }
        return this.person.Interests;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonInfoComponent.prototype, "person", void 0);
    PersonInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'person-info',
            template: __webpack_require__(/*! ./person-info.component.html */ "./src/app/person-info/person-info.component.html"),
            styles: [__webpack_require__(/*! ./person-info.component.css */ "./src/app/person-info/person-info.component.css")]
        })
    ], PersonInfoComponent);
    return PersonInfoComponent;
}());



/***/ }),

/***/ "./src/app/search-main/search-main.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-main/search-main.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-input{\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n\r\n.people-list{\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/search-main/search-main.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-main/search-main.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"input-group search-input\">\r\n        <input #searchInput type=\"text\" class=\"form-control\" (keyup.enter)=\"getPeople(searchInput.value)\" placeholder=\"Enter the name you would like to search or leave blank to show all:\">\r\n        <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-default\" (click)=\"getPeople(searchInput.value)\">Search</button> \r\n        </span>\r\n    </div>\r\n    <people-list [people]=\"people\"></people-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search-main/search-main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-main/search-main.component.ts ***!
  \******************************************************/
/*! exports provided: SearchMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMainComponent", function() { return SearchMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/people.service */ "./src/app/services/people.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchMainComponent = /** @class */ (function () {
    function SearchMainComponent(peopleServcie) {
        this.peopleServcie = peopleServcie;
    }
    SearchMainComponent.prototype.getPeople = function (searchCriteria) {
        var _this = this;
        this.peopleServcie.getPeople(searchCriteria).subscribe(function (listOfPerson) {
            _this.people = listOfPerson;
        });
    };
    SearchMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-main',
            template: __webpack_require__(/*! ./search-main.component.html */ "./src/app/search-main/search-main.component.html"),
            styles: [__webpack_require__(/*! ./search-main.component.css */ "./src/app/search-main/search-main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], SearchMainComponent);
    return SearchMainComponent;
}());



/***/ }),

/***/ "./src/app/services/people.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/people.service.ts ***!
  \********************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getPeople = function (searchCriteria) {
        var httpParams;
        if (searchCriteria) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('filterBy', searchCriteria);
        }
        return this.http.get("/api/people", { params: httpParams });
    };
    PeopleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/app/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Health Catalyst App\git\JG_PeopleSearch\JG_PeopleSearch\src\app\main.ts */"./src/app/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map