(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "./src/main/webapp/app/entities/supply-zone-wise-accumulation/supply-zone-wise-accumulation.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/supply-zone-wise-accumulation/supply-zone-wise-accumulation.module.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/supply-zone-wise-accumulation/index.ts\");\r\nvar ENTITY_STATES = _1.supplyZoneWiseAccumulationRoute.concat(_1.supplyZoneWiseAccumulationPopupRoute);\r\nvar SoptorshiSupplyZoneWiseAccumulationModule = /** @class */ (function () {\r\n    function SoptorshiSupplyZoneWiseAccumulationModule() {\r\n    }\r\n    SoptorshiSupplyZoneWiseAccumulationModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                _1.SupplyZoneWiseAccumulationComponent,\r\n                _1.SupplyZoneWiseAccumulationDetailComponent,\r\n                _1.SupplyZoneWiseAccumulationUpdateComponent,\r\n                _1.SupplyZoneWiseAccumulationDeleteDialogComponent,\r\n                _1.SupplyZoneWiseAccumulationDeletePopupComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.SupplyZoneWiseAccumulationComponent,\r\n                _1.SupplyZoneWiseAccumulationUpdateComponent,\r\n                _1.SupplyZoneWiseAccumulationDeleteDialogComponent,\r\n                _1.SupplyZoneWiseAccumulationDeletePopupComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiSupplyZoneWiseAccumulationModule);\r\n    return SoptorshiSupplyZoneWiseAccumulationModule;\r\n}());\r\nexports.SoptorshiSupplyZoneWiseAccumulationModule = SoptorshiSupplyZoneWiseAccumulationModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3N1cHBseS16b25lLXdpc2UtYWNjdW11bGF0aW9uL3N1cHBseS16b25lLXdpc2UtYWNjdW11bGF0aW9uLm1vZHVsZS50cz8wZGRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUFpRTtBQUNqRSw0R0FBK0M7QUFFL0MsOEZBQW1EO0FBQ25ELGdIQVFZO0FBRVosSUFBTSxhQUFhLEdBQU8sa0NBQStCLFFBQUssdUNBQW9DLENBQUMsQ0FBQztBQW1CcEc7SUFBQTtJQUF3RCxDQUFDO0lBQTVDLHlDQUF5QztRQWpCckQsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsOEJBQXFCLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEUsWUFBWSxFQUFFO2dCQUNWLHNDQUFtQztnQkFDbkMsNENBQXlDO2dCQUN6Qyw0Q0FBeUM7Z0JBQ3pDLGtEQUErQztnQkFDL0MsaURBQThDO2FBQ2pEO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHNDQUFtQztnQkFDbkMsNENBQXlDO2dCQUN6QyxrREFBK0M7Z0JBQy9DLGlEQUE4QzthQUNqRDtZQUNELE9BQU8sRUFBRSxDQUFDLDZCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyx5Q0FBeUMsQ0FBRztJQUFELGdEQUFDO0NBQUE7QUFBNUMsOEZBQXlDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zdXBwbHktem9uZS13aXNlLWFjY3VtdWxhdGlvbi9zdXBwbHktem9uZS13aXNlLWFjY3VtdWxhdGlvbi5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU29wdG9yc2hpU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBTdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvbkNvbXBvbmVudCxcclxuICAgIFN1cHBseVpvbmVXaXNlQWNjdW11bGF0aW9uRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgU3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25EZWxldGVQb3B1cENvbXBvbmVudCxcclxuICAgIFN1cHBseVpvbmVXaXNlQWNjdW11bGF0aW9uRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgc3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25Qb3B1cFJvdXRlLFxyXG4gICAgc3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25Sb3V0ZSxcclxuICAgIFN1cHBseVpvbmVXaXNlQWNjdW11bGF0aW9uVXBkYXRlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi8nO1xyXG5cclxuY29uc3QgRU5USVRZX1NUQVRFUyA9IFsuLi5zdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvblJvdXRlLCAuLi5zdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvblBvcHVwUm91dGVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtTb3B0b3JzaGlTaGFyZWRNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChFTlRJVFlfU1RBVEVTKV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBTdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvbkRldGFpbENvbXBvbmVudCxcclxuICAgICAgICBTdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvblVwZGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBTdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvbkRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBTdXBwbHlab25lV2lzZUFjY3VtdWxhdGlvbkRlbGV0ZVBvcHVwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgU3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgU3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25VcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgU3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25EZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICAgICAgU3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25EZWxldGVQb3B1cENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29wdG9yc2hpU3VwcGx5Wm9uZVdpc2VBY2N1bXVsYXRpb25Nb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/supply-zone-wise-accumulation/supply-zone-wise-accumulation.module.ts\n");

/***/ })

}]);