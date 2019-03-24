/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
var NgxMaterialDrawerEventEmitter = /** @class */ (function () {
    function NgxMaterialDrawerEventEmitter() {
        this.onMatDrawerInit = new Subject();
        this.onMatDrawerAfterViewInit = new Subject();
        this.onNavStateChange = new Subject();
        this.onDataChange = new ReplaySubject(1);
        this.onSideNavOpen = new Subject();
        this.onSideNavClosed = new Subject();
        this.onMinVarientChange = new Subject();
        this.onSideNavItemClick = new Subject();
        this.onSideNavItemExpanded = new Subject();
        this.onSideNavItemCollapsed = new Subject();
        this.onMenuItemClick = new Subject();
        this.onMenuItemExpanded = new Subject();
        this.onMenuItemCollapsed = new Subject();
        this.onSearchValueChange = new Subject();
        this.onSerachFocusIn = new Subject();
        this.onSerachFocusOut = new Subject();
        this.onSerachInputOpen = new Subject();
        this.onSerachInputClosed = new Subject();
        this.onFabExpanded = new Subject();
        this.onFabCollapsed = new Subject();
        this.onMainFabButtonClick = new Subject();
        this.onFabButtonClick = new Subject();
    }
    /**
     * Material drawer Main component life cycle
     * @param event json
     */
    /**
     * Material drawer Main component life cycle
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.matDrawerInit = /**
     * Material drawer Main component life cycle
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMatDrawerInit.next(event);
    };
    /**
     * Material drawer Main component life cycle
     * @param event json
     */
    /**
     * Material drawer Main component life cycle
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.matDrawerAfterViewInit = /**
     * Material drawer Main component life cycle
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMatDrawerAfterViewInit.next(event);
    };
    /**
     * using on side nav toggle
     * @param event json
     */
    /**
     * using on side nav toggle
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.navStateChange = /**
     * using on side nav toggle
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onNavStateChange.next(event);
    };
    /**
     * On Search value change
     * @param searchObject containing value and input search object
     */
    /**
     * On Search value change
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.searchValueChange = /**
     * On Search value change
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    function (searchObject) {
        this.onSearchValueChange.next(searchObject);
    };
    /**
     * On Search focusin
     * @param searchObject containing value and input search object
     */
    /**
     * On Search focusin
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.serachFocusIn = /**
     * On Search focusin
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    function (searchObject) {
        this.onSerachFocusIn.next(searchObject);
    };
    /**
     * On Search focusout
     * @param searchObject containing value and input search object
     */
    /**
     * On Search focusout
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.serachFocusOut = /**
     * On Search focusout
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    function (searchObject) {
        this.onSerachFocusOut.next(searchObject);
    };
    /**
     * On Search focusout
     * @param searchObject containing value and input search object
     */
    /**
     * On Search focusout
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.serachInputOpen = /**
     * On Search focusout
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    function (searchObject) {
        this.onSerachInputOpen.next(searchObject);
    };
    /**
     * On Search focusout
     * @param searchObject containing value and input search object
     */
    /**
     * On Search focusout
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.serachInputClosed = /**
     * On Search focusout
     * @param {?} searchObject containing value and input search object
     * @return {?}
     */
    function (searchObject) {
        this.onSerachInputClosed.next(searchObject);
    };
    /**
     * on data chamge
     * @param event new json
     */
    /**
     * on data chamge
     * @param {?} event new json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.dataChange = /**
     * on data chamge
     * @param {?} event new json
     * @return {?}
     */
    function (event) {
        this.onDataChange.next(event);
    };
    /**
     * using on side nav open
     * @param event json
     */
    /**
     * using on side nav open
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.sideNavOpen = /**
     * using on side nav open
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onSideNavOpen.next(event);
    };
    /**
     * using on side nav closed
     * @param event json
     */
    /**
     * using on side nav closed
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.sideNavClosed = /**
     * using on side nav closed
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onSideNavClosed.next(event);
    };
    /**
     * Not using currently
     * @param event json
     */
    /**
     * Not using currently
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.minVarientChange = /**
     * Not using currently
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMinVarientChange.next(event);
    };
    /**
     * using in side nav item
     * @param event json
     */
    /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.sideNavItemClick = /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onSideNavItemClick.next(event);
    };
    /**
     * using in side nav item
     * @param event json
     */
    /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.sideNavItemExpanded = /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onSideNavItemExpanded.next(event);
    };
    /**
     * using in side nav item
     * @param event json
     */
    /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.sideNavItemCollapsed = /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onSideNavItemCollapsed.next(event);
    };
    /**
     * using in toolbar menu
     * @param event json
     */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.menuItemClick = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMenuItemClick.next(event);
    };
    /**
     * using in toolbar menu
     * @param event json
     */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.menuItemExpanded = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMenuItemExpanded.next(event);
    };
    /**
     * using in toolbar menu
     * @param event json
     */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.menuItemCollapsed = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMenuItemCollapsed.next(event);
    };
    /**
   * using in toolbar menu
   * @param event json
   */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.fabExpanded = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onFabExpanded.next(event);
    };
    /**
     * using in toolbar menu
     * @param event json
     */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.fabCollapsed = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onFabCollapsed.next(event);
    };
    /**
     * using in toolbar menu
     * @param event json
     */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.mainFabButtonClick = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMainFabButtonClick.next(event);
    };
    /**
     * using in toolbar menu
     * @param event json
     */
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    NgxMaterialDrawerEventEmitter.prototype.fabButtonClick = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onFabButtonClick.next(event);
    };
    NgxMaterialDrawerEventEmitter.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxMaterialDrawerEventEmitter.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxMaterialDrawerEventEmitter.ngInjectableDef = i0.defineInjectable({ factory: function NgxMaterialDrawerEventEmitter_Factory() { return new NgxMaterialDrawerEventEmitter(); }, token: NgxMaterialDrawerEventEmitter, providedIn: "root" });
    return NgxMaterialDrawerEventEmitter;
}());
export { NgxMaterialDrawerEventEmitter };
if (false) {
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMatDrawerInit;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMatDrawerAfterViewInit;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onNavStateChange;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onDataChange;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSideNavOpen;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSideNavClosed;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMinVarientChange;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSideNavItemClick;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSideNavItemExpanded;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSideNavItemCollapsed;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMenuItemClick;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMenuItemExpanded;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMenuItemCollapsed;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSearchValueChange;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSerachFocusIn;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSerachFocusOut;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSerachInputOpen;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onSerachInputClosed;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onFabExpanded;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onFabCollapsed;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onMainFabButtonClick;
    /** @type {?} */
    NgxMaterialDrawerEventEmitter.prototype.onFabButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1kcmF3ZXIvIiwic291cmNlcyI6WyJsaWIvYXBwL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUU5QztJQTRCRTtRQXZCTyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMsNkJBQXdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QywyQkFBc0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxz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Q0FBQztJQUVwQyxDQUFDOztnQkE5TUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0NBTEQ7Q0FrTkMsQUEvTUQsSUErTUM7U0E1TVksNkJBQTZCOzs7SUFFeEMsd0RBQXVDOztJQUN2QyxpRUFBZ0Q7O0lBQ2hELHlEQUF3Qzs7SUFDeEMscURBQTJDOztJQUMzQyxzREFBcUM7O0lBQ3JDLHdEQUF1Qzs7SUFDdkMsMkRBQTBDOztJQUMxQywyREFBMEM7O0lBQzFDLDhEQUE2Qzs7SUFDN0MsK0RBQThDOztJQUM5Qyx3REFBdUM7O0lBQ3ZDLDJEQUEwQzs7SUFDMUMsNERBQTJDOztJQUMzQyw0REFBMkM7O0lBQzNDLHdEQUF1Qzs7SUFDdkMseURBQXdDOztJQUN4QywwREFBeUM7O0lBQ3pDLDREQUEyQzs7SUFDM0Msc0RBQXFDOztJQUNyQyx1REFBc0M7O0lBQ3RDLDZEQUE0Qzs7SUFDNUMseURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgcHVibGljIG9uTWF0RHJhd2VySW5pdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uTWF0RHJhd2VyQWZ0ZXJWaWV3SW5pdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uTmF2U3RhdGVDaGFuZ2UgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvbkRhdGFDaGFuZ2UgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcclxuICBwdWJsaWMgb25TaWRlTmF2T3BlbiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2lkZU5hdkNsb3NlZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uTWluVmFyaWVudENoYW5nZSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2lkZU5hdkl0ZW1DbGljayA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2lkZU5hdkl0ZW1FeHBhbmRlZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2lkZU5hdkl0ZW1Db2xsYXBzZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvbk1lbnVJdGVtQ2xpY2sgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvbk1lbnVJdGVtRXhwYW5kZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvbk1lbnVJdGVtQ29sbGFwc2VkID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2VyYWNoRm9jdXNJbiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2VyYWNoRm9jdXNPdXQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvblNlcmFjaElucHV0T3BlbiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uU2VyYWNoSW5wdXRDbG9zZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvbkZhYkV4cGFuZGVkID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25GYWJDb2xsYXBzZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvbk1haW5GYWJCdXR0b25DbGljayA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uRmFiQnV0dG9uQ2xpY2sgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIC8qKlxyXG4gICAqIE1hdGVyaWFsIGRyYXdlciBNYWluIGNvbXBvbmVudCBsaWZlIGN5Y2xlXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbWF0RHJhd2VySW5pdChldmVudCkge1xyXG4gICAgdGhpcy5vbk1hdERyYXdlckluaXQubmV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiBNYXRlcmlhbCBkcmF3ZXIgTWFpbiBjb21wb25lbnQgbGlmZSBjeWNsZVxyXG4gICAqIEBwYXJhbSBldmVudCBqc29uXHJcbiAgICovXHJcbiAgcHVibGljIG1hdERyYXdlckFmdGVyVmlld0luaXQoZXZlbnQpIHtcclxuICAgIHRoaXMub25NYXREcmF3ZXJBZnRlclZpZXdJbml0Lm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXNpbmcgb24gc2lkZSBuYXYgdG9nZ2xlXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbmF2U3RhdGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMub25OYXZTdGF0ZUNoYW5nZS5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPbiBTZWFyY2ggdmFsdWUgY2hhbmdlXHJcbiAgICogQHBhcmFtIHNlYXJjaE9iamVjdCBjb250YWluaW5nIHZhbHVlIGFuZCBpbnB1dCBzZWFyY2ggb2JqZWN0XHJcbiAgICovXHJcbiAgcHVibGljIHNlYXJjaFZhbHVlQ2hhbmdlKHNlYXJjaE9iamVjdDogeyB2YWx1ZTogc3RyaW5nOyBpbnB1dFJlZjogRWxlbWVudFJlZjxhbnk+OyB9KTogYW55IHtcclxuICAgIHRoaXMub25TZWFyY2hWYWx1ZUNoYW5nZS5uZXh0KHNlYXJjaE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPbiBTZWFyY2ggZm9jdXNpblxyXG4gICAqIEBwYXJhbSBzZWFyY2hPYmplY3QgY29udGFpbmluZyB2YWx1ZSBhbmQgaW5wdXQgc2VhcmNoIG9iamVjdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJhY2hGb2N1c0luKHNlYXJjaE9iamVjdDogeyB2YWx1ZTogc3RyaW5nOyBpbnB1dFJlZjogRWxlbWVudFJlZjxhbnk+OyB9KTogYW55IHtcclxuICAgIHRoaXMub25TZXJhY2hGb2N1c0luLm5leHQoc2VhcmNoT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIFNlYXJjaCBmb2N1c291dFxyXG4gICAqIEBwYXJhbSBzZWFyY2hPYmplY3QgY29udGFpbmluZyB2YWx1ZSBhbmQgaW5wdXQgc2VhcmNoIG9iamVjdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJhY2hGb2N1c091dChzZWFyY2hPYmplY3Q6IHsgdmFsdWU6IHN0cmluZzsgaW5wdXRSZWY6IEVsZW1lbnRSZWY8YW55PjsgfSk6IGFueSB7XHJcbiAgICB0aGlzLm9uU2VyYWNoRm9jdXNPdXQubmV4dChzZWFyY2hPYmplY3QpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBPbiBTZWFyY2ggZm9jdXNvdXRcclxuICAgKiBAcGFyYW0gc2VhcmNoT2JqZWN0IGNvbnRhaW5pbmcgdmFsdWUgYW5kIGlucHV0IHNlYXJjaCBvYmplY3RcclxuICAgKi9cclxuICBwdWJsaWMgc2VyYWNoSW5wdXRPcGVuKHNlYXJjaE9iamVjdDogeyB2YWx1ZTogc3RyaW5nOyBpbnB1dFJlZjogRWxlbWVudFJlZjxhbnk+OyB9KTogYW55IHtcclxuICAgIHRoaXMub25TZXJhY2hJbnB1dE9wZW4ubmV4dChzZWFyY2hPYmplY3QpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBPbiBTZWFyY2ggZm9jdXNvdXRcclxuICAgKiBAcGFyYW0gc2VhcmNoT2JqZWN0IGNvbnRhaW5pbmcgdmFsdWUgYW5kIGlucHV0IHNlYXJjaCBvYmplY3RcclxuICAgKi9cclxuICBwdWJsaWMgc2VyYWNoSW5wdXRDbG9zZWQoc2VhcmNoT2JqZWN0OiB7IHZhbHVlOiBzdHJpbmc7IGlucHV0UmVmOiBFbGVtZW50UmVmPGFueT47IH0pOiBhbnkge1xyXG4gICAgdGhpcy5vblNlcmFjaElucHV0Q2xvc2VkLm5leHQoc2VhcmNoT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG9uIGRhdGEgY2hhbWdlXHJcbiAgICogQHBhcmFtIGV2ZW50IG5ldyBqc29uXHJcbiAgICovXHJcbiAgcHVibGljIGRhdGFDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMub25EYXRhQ2hhbmdlLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIG9uIHNpZGUgbmF2IG9wZW5cclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaWRlTmF2T3BlbihldmVudCkge1xyXG4gICAgdGhpcy5vblNpZGVOYXZPcGVuLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIG9uIHNpZGUgbmF2IGNsb3NlZFxyXG4gICAqIEBwYXJhbSBldmVudCBqc29uXHJcbiAgICovXHJcbiAgcHVibGljIHNpZGVOYXZDbG9zZWQoZXZlbnQpIHtcclxuICAgIHRoaXMub25TaWRlTmF2Q2xvc2VkLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5vdCB1c2luZyBjdXJyZW50bHlcclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBtaW5WYXJpZW50Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uTWluVmFyaWVudENoYW5nZS5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIGluIHNpZGUgbmF2IGl0ZW1cclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaWRlTmF2SXRlbUNsaWNrKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uU2lkZU5hdkl0ZW1DbGljay5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIGluIHNpZGUgbmF2IGl0ZW1cclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaWRlTmF2SXRlbUV4cGFuZGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uU2lkZU5hdkl0ZW1FeHBhbmRlZC5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIGluIHNpZGUgbmF2IGl0ZW1cclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaWRlTmF2SXRlbUNvbGxhcHNlZChldmVudCkge1xyXG4gICAgdGhpcy5vblNpZGVOYXZJdGVtQ29sbGFwc2VkLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbWVudUl0ZW1DbGljayhldmVudCkge1xyXG4gICAgdGhpcy5vbk1lbnVJdGVtQ2xpY2submV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiB1c2luZyBpbiB0b29sYmFyIG1lbnVcclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBtZW51SXRlbUV4cGFuZGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uTWVudUl0ZW1FeHBhbmRlZC5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIGluIHRvb2xiYXIgbWVudVxyXG4gICAqIEBwYXJhbSBldmVudCBqc29uXHJcbiAgICovXHJcbiAgcHVibGljIG1lbnVJdGVtQ29sbGFwc2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uTWVudUl0ZW1Db2xsYXBzZWQubmV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICogdXNpbmcgaW4gdG9vbGJhciBtZW51XHJcbiAqIEBwYXJhbSBldmVudCBqc29uXHJcbiAqL1xyXG4gIHB1YmxpYyBmYWJFeHBhbmRlZChldmVudCkge1xyXG4gICAgdGhpcy5vbkZhYkV4cGFuZGVkLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgZmFiQ29sbGFwc2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRmFiQ29sbGFwc2VkLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbWFpbkZhYkJ1dHRvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uTWFpbkZhYkJ1dHRvbkNsaWNrLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgZmFiQnV0dG9uQ2xpY2soZXZlbnQpIHtcclxuICAgIHRoaXMub25GYWJCdXR0b25DbGljay5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==