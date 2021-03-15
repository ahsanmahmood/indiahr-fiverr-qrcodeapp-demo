(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-response-success-response-module"],{

/***/ "+8S8":
/*!*************************************************************!*\
  !*** ./src/app/success-response/success-response.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLXJlc3BvbnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "LZbG":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success-response/success-response.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Verification Success\"></app-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <ion-icon\n          name=\"checkmark-circle-outline\"\n          style=\"font-size: 10rem\"\n          color=\"success\"\n        ></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" sizeSm=\"8\" offsetSm=\"2\" sizeSm=\"6\" offsetSm=\"3\">\n        <ion-text style=\"font-size: 22px; line-height: 1.6;\"\n          >You have purchased an original <ion-text color=\"primary\">XPression hair</ion-text> form <ion-text color=\"secondary\">Linda\n          Manufacturing Co Ltd</ion-text>. Express your beauty with X-Pression products.\n          Enquiries? Email: <ion-text color=\"dark\"><a href=\"mailto:help@sproxil.com\">help@sproxil.com</a></ion-text> Thank you!</ion-text\n        >\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-margin-top\">\n        <ion-button color=\"danger\" [routerLink]=\"['/scan-and-verify']\"\n          >Scan Another Product</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "V0DM":
/*!*********************************************************************!*\
  !*** ./src/app/success-response/success-response-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SuccessResponsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessResponsePageRoutingModule", function() { return SuccessResponsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _success_response_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success-response.page */ "jbRf");




const routes = [
    {
        path: '',
        component: _success_response_page__WEBPACK_IMPORTED_MODULE_3__["SuccessResponsePage"]
    }
];
let SuccessResponsePageRoutingModule = class SuccessResponsePageRoutingModule {
};
SuccessResponsePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuccessResponsePageRoutingModule);



/***/ }),

/***/ "jbRf":
/*!***********************************************************!*\
  !*** ./src/app/success-response/success-response.page.ts ***!
  \***********************************************************/
/*! exports provided: SuccessResponsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessResponsePage", function() { return SuccessResponsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_response_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-response.page.html */ "LZbG");
/* harmony import */ var _success_response_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-response.page.scss */ "+8S8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SuccessResponsePage = class SuccessResponsePage {
    constructor() { }
    ngOnInit() {
    }
};
SuccessResponsePage.ctorParameters = () => [];
SuccessResponsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-response',
        template: _raw_loader_success_response_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_response_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessResponsePage);



/***/ }),

/***/ "lEF3":
/*!*************************************************************!*\
  !*** ./src/app/success-response/success-response.module.ts ***!
  \*************************************************************/
/*! exports provided: SuccessResponsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessResponsePageModule", function() { return SuccessResponsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _success_response_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-response-routing.module */ "V0DM");
/* harmony import */ var _success_response_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success-response.page */ "jbRf");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let SuccessResponsePageModule = class SuccessResponsePageModule {
};
SuccessResponsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _success_response_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessResponsePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_success_response_page__WEBPACK_IMPORTED_MODULE_6__["SuccessResponsePage"]]
    })
], SuccessResponsePageModule);



/***/ })

}]);
//# sourceMappingURL=success-response-success-response-module.js.map