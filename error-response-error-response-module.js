(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-response-error-response-module"],{

/***/ "5IC2":
/*!*********************************************************!*\
  !*** ./src/app/error-response/error-response.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1yZXNwb25zZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "78c4":
/*!*******************************************************!*\
  !*** ./src/app/error-response/error-response.page.ts ***!
  \*******************************************************/
/*! exports provided: ErrorResponsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponsePage", function() { return ErrorResponsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_response_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-response.page.html */ "ZRN0");
/* harmony import */ var _error_response_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-response.page.scss */ "5IC2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErrorResponsePage = class ErrorResponsePage {
    constructor() { }
    ngOnInit() {
    }
};
ErrorResponsePage.ctorParameters = () => [];
ErrorResponsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error-response',
        template: _raw_loader_error_response_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_response_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErrorResponsePage);



/***/ }),

/***/ "Q8bB":
/*!*****************************************************************!*\
  !*** ./src/app/error-response/error-response-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorResponsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponsePageRoutingModule", function() { return ErrorResponsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_response_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-response.page */ "78c4");




const routes = [
    {
        path: '',
        component: _error_response_page__WEBPACK_IMPORTED_MODULE_3__["ErrorResponsePage"]
    }
];
let ErrorResponsePageRoutingModule = class ErrorResponsePageRoutingModule {
};
ErrorResponsePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErrorResponsePageRoutingModule);



/***/ }),

/***/ "ZRN0":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-response/error-response.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Verification Failed\"></app-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <ion-icon\n          name=\"close-outline\"\n          style=\"font-size: 10rem\"\n          color=\"danger\"\n        ></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" sizeSm=\"8\" offsetSm=\"2\" sizeSm=\"6\" offsetSm=\"3\">\n        <ion-text style=\"font-size: 22px; line-height: 1.6\"\n          ><ion-text color=\"danger\">STOP!</ion-text> Do not use! Your product is\n          <ion-text color=\"danger\">suspicious</ion-text> Please ensure that you\n          have an original product and try to scan again Enquiries? Email:\n          <ion-text color=\"dark\"\n            ><a href=\"mailto:help@sproxil.com\">help@sproxil.com</a></ion-text\n          >\n          Linda Cares!</ion-text\n        >\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-margin-top\">\n        <ion-button color=\"danger\" [routerLink]=\"['/scan-and-verify']\"\n          >Go back</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "oOoE":
/*!*********************************************************!*\
  !*** ./src/app/error-response/error-response.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorResponsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponsePageModule", function() { return ErrorResponsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _error_response_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-response-routing.module */ "Q8bB");
/* harmony import */ var _error_response_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-response.page */ "78c4");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let ErrorResponsePageModule = class ErrorResponsePageModule {
};
ErrorResponsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _error_response_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErrorResponsePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_error_response_page__WEBPACK_IMPORTED_MODULE_6__["ErrorResponsePage"]]
    })
], ErrorResponsePageModule);



/***/ })

}]);
//# sourceMappingURL=error-response-error-response-module.js.map