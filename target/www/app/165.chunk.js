(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[165],{

/***/ "./src/main/webapp/app/entities/financial-account-year-extended/financial-account-year-extended.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/financial-account-year-extended/financial-account-year-extended.module.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/financial-account-year-extended/index.ts\");\r\nvar financial_account_year_1 = __webpack_require__(/*! app/entities/financial-account-year */ \"./src/main/webapp/app/entities/financial-account-year/index.ts\");\r\nvar ENTITY_STATES = _1.financialAccountYearExtendedRoute.concat(_1.financialAccountYearExtendedPopupRoute);\r\nvar SoptorshiFinancialAccountYearExtendedModule = /** @class */ (function () {\r\n    function SoptorshiFinancialAccountYearExtendedModule() {\r\n    }\r\n    SoptorshiFinancialAccountYearExtendedModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                financial_account_year_1.FinancialAccountYearComponent,\r\n                financial_account_year_1.FinancialAccountYearDetailComponent,\r\n                financial_account_year_1.FinancialAccountYearUpdateComponent,\r\n                _1.FinancialAccountYearExtendedComponent,\r\n                _1.FinancialAccountYearExtendedDetailComponent,\r\n                _1.FinancialAccountYearExtendedUpdateComponent,\r\n                financial_account_year_1.FinancialAccountYearDeleteDialogComponent,\r\n                financial_account_year_1.FinancialAccountYearDeletePopupComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.FinancialAccountYearExtendedComponent,\r\n                _1.FinancialAccountYearExtendedUpdateComponent,\r\n                financial_account_year_1.FinancialAccountYearDeleteDialogComponent,\r\n                financial_account_year_1.FinancialAccountYearDeletePopupComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiFinancialAccountYearExtendedModule);\r\n    return SoptorshiFinancialAccountYearExtendedModule;\r\n}());\r\nexports.SoptorshiFinancialAccountYearExtendedModule = SoptorshiFinancialAccountYearExtendedModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2ZpbmFuY2lhbC1hY2NvdW50LXllYXItZXh0ZW5kZWQvZmluYW5jaWFsLWFjY291bnQteWVhci1leHRlbmRlZC5tb2R1bGUudHM/ZDY2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBaUU7QUFDakUsNEdBQStDO0FBRS9DLDhGQUFtRDtBQUNuRCxrSEFNWTtBQUNaLGdLQU82QztBQUU3QyxJQUFNLGFBQWEsR0FBTyxvQ0FBaUMsUUFBSyx5Q0FBc0MsQ0FBQyxDQUFDO0FBc0J4RztJQUFBO0lBQTBELENBQUM7SUFBOUMsMkNBQTJDO1FBcEJ2RCxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw4QkFBcUIsRUFBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RSxZQUFZLEVBQUU7Z0JBQ1Ysc0RBQTZCO2dCQUM3Qiw0REFBbUM7Z0JBQ25DLDREQUFtQztnQkFDbkMsd0NBQXFDO2dCQUNyQyw4Q0FBMkM7Z0JBQzNDLDhDQUEyQztnQkFDM0Msa0VBQXlDO2dCQUN6QyxpRUFBd0M7YUFDM0M7WUFDRCxlQUFlLEVBQUU7Z0JBQ2Isd0NBQXFDO2dCQUNyQyw4Q0FBMkM7Z0JBQzNDLGtFQUF5QztnQkFDekMsaUVBQXdDO2FBQzNDO1lBQ0QsT0FBTyxFQUFFLENBQUMsNkJBQXNCLENBQUM7U0FDcEMsQ0FBQztPQUNXLDJDQUEyQyxDQUFHO0lBQUQsa0RBQUM7Q0FBQTtBQUE5QyxrR0FBMkMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2ZpbmFuY2lhbC1hY2NvdW50LXllYXItZXh0ZW5kZWQvZmluYW5jaWFsLWFjY291bnQteWVhci1leHRlbmRlZC5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU29wdG9yc2hpU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBGaW5hbmNpYWxBY2NvdW50WWVhckV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgRmluYW5jaWFsQWNjb3VudFllYXJFeHRlbmRlZERldGFpbENvbXBvbmVudCxcclxuICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICBmaW5hbmNpYWxBY2NvdW50WWVhckV4dGVuZGVkUm91dGUsXHJcbiAgICBmaW5hbmNpYWxBY2NvdW50WWVhckV4dGVuZGVkUG9wdXBSb3V0ZVxyXG59IGZyb20gJy4vJztcclxuaW1wb3J0IHtcclxuICAgIEZpbmFuY2lhbEFjY291bnRZZWFyQ29tcG9uZW50LFxyXG4gICAgRmluYW5jaWFsQWNjb3VudFllYXJEZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBGaW5hbmNpYWxBY2NvdW50WWVhckRlbGV0ZVBvcHVwQ29tcG9uZW50LFxyXG4gICAgRmluYW5jaWFsQWNjb3VudFllYXJEZXRhaWxDb21wb25lbnQsXHJcbiAgICBmaW5hbmNpYWxBY2NvdW50WWVhclBvcHVwUm91dGUsXHJcbiAgICBGaW5hbmNpYWxBY2NvdW50WWVhclVwZGF0ZUNvbXBvbmVudFxyXG59IGZyb20gJ2FwcC9lbnRpdGllcy9maW5hbmNpYWwtYWNjb3VudC15ZWFyJztcclxuXHJcbmNvbnN0IEVOVElUWV9TVEFURVMgPSBbLi4uZmluYW5jaWFsQWNjb3VudFllYXJFeHRlbmRlZFJvdXRlLCAuLi5maW5hbmNpYWxBY2NvdW50WWVhckV4dGVuZGVkUG9wdXBSb3V0ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1NvcHRvcnNoaVNoYXJlZE1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKEVOVElUWV9TVEFURVMpXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgRmluYW5jaWFsQWNjb3VudFllYXJFeHRlbmRlZERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBGaW5hbmNpYWxBY2NvdW50WWVhckV4dGVuZGVkVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGVsZXRlUG9wdXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBGaW5hbmNpYWxBY2NvdW50WWVhckV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgRmluYW5jaWFsQWNjb3VudFllYXJEZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICAgICAgRmluYW5jaWFsQWNjb3VudFllYXJEZWxldGVQb3B1cENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29wdG9yc2hpRmluYW5jaWFsQWNjb3VudFllYXJFeHRlbmRlZE1vZHVsZSB7fVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/financial-account-year-extended/financial-account-year-extended.module.ts\n");

/***/ })

}]);