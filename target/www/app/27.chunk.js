(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./src/main/webapp/app/entities/monthly-salary/monthly-salary.module.ts":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/entities/monthly-salary/monthly-salary.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/monthly-salary/index.ts\");\r\nvar ENTITY_STATES = _1.monthlySalaryRoute.concat(_1.monthlySalaryPopupRoute);\r\nvar SoptorshiMonthlySalaryModule = /** @class */ (function () {\r\n    function SoptorshiMonthlySalaryModule() {\r\n    }\r\n    SoptorshiMonthlySalaryModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            /* declarations: [\r\n                MonthlySalaryComponent,\r\n                MonthlySalaryDetailComponent,\r\n                MonthlySalaryUpdateComponent,\r\n                MonthlySalaryDeleteDialogComponent,\r\n                MonthlySalaryDeletePopupComponent\r\n            ],\r\n            entryComponents: [\r\n                MonthlySalaryComponent,\r\n                MonthlySalaryUpdateComponent,\r\n                MonthlySalaryDeleteDialogComponent,\r\n                MonthlySalaryDeletePopupComponent\r\n            ],*/\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiMonthlySalaryModule);\r\n    return SoptorshiMonthlySalaryModule;\r\n}());\r\nexports.SoptorshiMonthlySalaryModule = SoptorshiMonthlySalaryModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL21vbnRobHktc2FsYXJ5L21vbnRobHktc2FsYXJ5Lm1vZHVsZS50cz9hOTczIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUFpRTtBQUNqRSw0R0FBK0M7QUFFL0MsOEZBQW1EO0FBQ25ELGlHQVFZO0FBRVosSUFBTSxhQUFhLEdBQU8scUJBQWtCLFFBQUssMEJBQXVCLENBQUMsQ0FBQztBQW1CMUU7SUFBQTtJQUEyQyxDQUFDO0lBQS9CLDRCQUE0QjtRQWpCeEMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsOEJBQXFCLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEU7Ozs7Ozs7Ozs7OztnQkFZSTtZQUNKLE9BQU8sRUFBRSxDQUFDLDZCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyw0QkFBNEIsQ0FBRztJQUFELG1DQUFDO0NBQUE7QUFBL0Isb0VBQTRCIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tb250aGx5LXNhbGFyeS9tb250aGx5LXNhbGFyeS5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU29wdG9yc2hpU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBNb250aGx5U2FsYXJ5Q29tcG9uZW50LFxyXG4gICAgTW9udGhseVNhbGFyeURldGFpbENvbXBvbmVudCxcclxuICAgIE1vbnRobHlTYWxhcnlVcGRhdGVDb21wb25lbnQsXHJcbiAgICBNb250aGx5U2FsYXJ5RGVsZXRlUG9wdXBDb21wb25lbnQsXHJcbiAgICBNb250aGx5U2FsYXJ5RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgbW9udGhseVNhbGFyeVJvdXRlLFxyXG4gICAgbW9udGhseVNhbGFyeVBvcHVwUm91dGVcclxufSBmcm9tICcuLyc7XHJcblxyXG5jb25zdCBFTlRJVFlfU1RBVEVTID0gWy4uLm1vbnRobHlTYWxhcnlSb3V0ZSwgLi4ubW9udGhseVNhbGFyeVBvcHVwUm91dGVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtTb3B0b3JzaGlTaGFyZWRNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChFTlRJVFlfU1RBVEVTKV0sXHJcbiAgICAvKiBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNb250aGx5U2FsYXJ5Q29tcG9uZW50LFxyXG4gICAgICAgIE1vbnRobHlTYWxhcnlEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTW9udGhseVNhbGFyeVVwZGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBNb250aGx5U2FsYXJ5RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgICAgIE1vbnRobHlTYWxhcnlEZWxldGVQb3B1cENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIE1vbnRobHlTYWxhcnlDb21wb25lbnQsXHJcbiAgICAgICAgTW9udGhseVNhbGFyeVVwZGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBNb250aGx5U2FsYXJ5RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgICAgIE1vbnRobHlTYWxhcnlEZWxldGVQb3B1cENvbXBvbmVudFxyXG4gICAgXSwqL1xyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3B0b3JzaGlNb250aGx5U2FsYXJ5TW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/monthly-salary/monthly-salary.module.ts\n");

/***/ })

}]);