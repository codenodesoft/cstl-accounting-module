(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./src/main/webapp/app/entities/mst-account/mst-account.module.ts":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/entities/mst-account/mst-account.module.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/mst-account/index.ts\");\r\nvar ENTITY_STATES = _1.mstAccountRoute.concat(_1.mstAccountPopupRoute);\r\nvar SoptorshiMstAccountModule = /** @class */ (function () {\r\n    function SoptorshiMstAccountModule() {\r\n    }\r\n    SoptorshiMstAccountModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            // declarations: [\r\n            //     MstAccountComponent,\r\n            //     MstAccountDetailComponent,\r\n            //     MstAccountUpdateComponent,\r\n            //     MstAccountDeleteDialogComponent,\r\n            //     MstAccountDeletePopupComponent\r\n            // ],\r\n            // entryComponents: [MstAccountComponent, MstAccountUpdateComponent, MstAccountDeleteDialogComponent, MstAccountDeletePopupComponent],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiMstAccountModule);\r\n    return SoptorshiMstAccountModule;\r\n}());\r\nexports.SoptorshiMstAccountModule = SoptorshiMstAccountModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL21zdC1hY2NvdW50L21zdC1hY2NvdW50Lm1vZHVsZS50cz9iMDRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUFpRTtBQUNqRSw0R0FBK0M7QUFFL0MsOEZBQW1EO0FBQ25ELDhGQVFZO0FBRVosSUFBTSxhQUFhLEdBQU8sa0JBQWUsUUFBSyx1QkFBb0IsQ0FBQyxDQUFDO0FBY3BFO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix5QkFBeUI7UUFackMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsOEJBQXFCLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEUsa0JBQWtCO1lBQ2xCLDJCQUEyQjtZQUMzQixpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLHVDQUF1QztZQUN2QyxxQ0FBcUM7WUFDckMsS0FBSztZQUNMLHNJQUFzSTtZQUN0SSxPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1cseUJBQXlCLENBQUc7SUFBRCxnQ0FBQztDQUFBO0FBQTVCLDhEQUF5QiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbXN0LWFjY291bnQvbXN0LWFjY291bnQubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNvcHRvcnNoaVNoYXJlZE1vZHVsZSB9IGZyb20gJ2FwcC9zaGFyZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgTXN0QWNjb3VudENvbXBvbmVudCxcclxuICAgIE1zdEFjY291bnREZXRhaWxDb21wb25lbnQsXHJcbiAgICBNc3RBY2NvdW50VXBkYXRlQ29tcG9uZW50LFxyXG4gICAgTXN0QWNjb3VudERlbGV0ZVBvcHVwQ29tcG9uZW50LFxyXG4gICAgTXN0QWNjb3VudERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIG1zdEFjY291bnRSb3V0ZSxcclxuICAgIG1zdEFjY291bnRQb3B1cFJvdXRlXHJcbn0gZnJvbSAnLi8nO1xyXG5cclxuY29uc3QgRU5USVRZX1NUQVRFUyA9IFsuLi5tc3RBY2NvdW50Um91dGUsIC4uLm1zdEFjY291bnRQb3B1cFJvdXRlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbU29wdG9yc2hpU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoRU5USVRZX1NUQVRFUyldLFxyXG4gICAgLy8gZGVjbGFyYXRpb25zOiBbXHJcbiAgICAvLyAgICAgTXN0QWNjb3VudENvbXBvbmVudCxcclxuICAgIC8vICAgICBNc3RBY2NvdW50RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgLy8gICAgIE1zdEFjY291bnRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAvLyAgICAgTXN0QWNjb3VudERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIC8vICAgICBNc3RBY2NvdW50RGVsZXRlUG9wdXBDb21wb25lbnRcclxuICAgIC8vIF0sXHJcbiAgICAvLyBlbnRyeUNvbXBvbmVudHM6IFtNc3RBY2NvdW50Q29tcG9uZW50LCBNc3RBY2NvdW50VXBkYXRlQ29tcG9uZW50LCBNc3RBY2NvdW50RGVsZXRlRGlhbG9nQ29tcG9uZW50LCBNc3RBY2NvdW50RGVsZXRlUG9wdXBDb21wb25lbnRdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3B0b3JzaGlNc3RBY2NvdW50TW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/mst-account/mst-account.module.ts\n");

/***/ })

}]);