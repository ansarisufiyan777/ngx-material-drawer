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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1kcmF3ZXIvIiwic291cmNlcyI6WyJsaWIvYXBwL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUU5QztJQXNCRTtRQWpCTyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMsNkJBQXdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QywyQkFBc0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBQ2pCOzs7T0FHRzs7Ozs7O0lBQ0kscURBQWE7Ozs7O0lBQXBCLFVBQXFCLEtBQUs7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7O0lBQ0ksOERBQXNCOzs7OztJQUE3QixVQUE4QixLQUFLO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUMsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7O0lBQ0ksc0RBQWM7Ozs7O0lBQXJCLFVBQXNCLEtBQUs7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSx5REFBaUI7Ozs7O0lBQXhCLFVBQXlCLFlBQTJEO1FBQ2xGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0kscURBQWE7Ozs7O0lBQXBCLFVBQXFCLFlBQTJEO1FBQzlFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHNEQUFjOzs7OztJQUFyQixVQUFzQixZQUEyRDtRQUMvRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLGtEQUFVOzs7OztJQUFqQixVQUFrQixLQUFLO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLG1EQUFXOzs7OztJQUFsQixVQUFtQixLQUFLO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHFEQUFhOzs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHdEQUFnQjs7Ozs7SUFBdkIsVUFBd0IsS0FBSztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNJLHdEQUFnQjs7Ozs7SUFBdkIsVUFBd0IsS0FBSztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNJLDJEQUFtQjs7Ozs7SUFBMUIsVUFBMkIsS0FBSztRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNJLDREQUFvQjs7Ozs7SUFBM0IsVUFBNEIsS0FBSztRQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNJLHFEQUFhOzs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNJLHdEQUFnQjs7Ozs7SUFBdkIsVUFBd0IsS0FBSztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNJLHlEQUFpQjs7Ozs7SUFBeEIsVUFBeUIsS0FBSztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZDLENBQUM7O2dCQTFKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3Q0FMRDtDQThKQyxBQTNKRCxJQTJKQztTQXhKWSw2QkFBNkI7OztJQUV4Qyx3REFBdUM7O0lBQ3ZDLGlFQUFnRDs7SUFDaEQseURBQXdDOztJQUN4QyxxREFBMkM7O0lBQzNDLHNEQUFxQzs7SUFDckMsd0RBQXVDOztJQUN2QywyREFBMEM7O0lBQzFDLDJEQUEwQzs7SUFDMUMsOERBQTZDOztJQUM3QywrREFBOEM7O0lBQzlDLHdEQUF1Qzs7SUFDdkMsMkRBQTBDOztJQUMxQyw0REFBMkM7O0lBQzNDLDREQUEyQzs7SUFDM0Msd0RBQXVDOztJQUN2Qyx5REFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxEcmF3ZXJFdmVudEVtaXR0ZXIge1xyXG5cclxuICBwdWJsaWMgb25NYXREcmF3ZXJJbml0ID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25NYXREcmF3ZXJBZnRlclZpZXdJbml0ID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25OYXZTdGF0ZUNoYW5nZSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uRGF0YUNoYW5nZSA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xyXG4gIHB1YmxpYyBvblNpZGVOYXZPcGVuID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TaWRlTmF2Q2xvc2VkID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25NaW5WYXJpZW50Q2hhbmdlID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TaWRlTmF2SXRlbUNsaWNrID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TaWRlTmF2SXRlbUV4cGFuZGVkID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TaWRlTmF2SXRlbUNvbGxhcHNlZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uTWVudUl0ZW1DbGljayA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uTWVudUl0ZW1FeHBhbmRlZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIG9uTWVudUl0ZW1Db2xsYXBzZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBvblNlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TZXJhY2hGb2N1c0luID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgb25TZXJhY2hGb2N1c091dCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgLyoqXHJcbiAgICogTWF0ZXJpYWwgZHJhd2VyIE1haW4gY29tcG9uZW50IGxpZmUgY3ljbGVcclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYXREcmF3ZXJJbml0KGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uTWF0RHJhd2VySW5pdC5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIE1hdGVyaWFsIGRyYXdlciBNYWluIGNvbXBvbmVudCBsaWZlIGN5Y2xlXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbWF0RHJhd2VyQWZ0ZXJWaWV3SW5pdChldmVudCkge1xyXG4gICAgdGhpcy5vbk1hdERyYXdlckFmdGVyVmlld0luaXQubmV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiB1c2luZyBvbiBzaWRlIG5hdiB0b2dnbGVcclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYXZTdGF0ZUNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5vbk5hdlN0YXRlQ2hhbmdlLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIFNlYXJjaCB2YWx1ZSBjaGFuZ2VcclxuICAgKiBAcGFyYW0gc2VhcmNoT2JqZWN0IGNvbnRhaW5pbmcgdmFsdWUgYW5kIGlucHV0IHNlYXJjaCBvYmplY3RcclxuICAgKi9cclxuICBwdWJsaWMgc2VhcmNoVmFsdWVDaGFuZ2Uoc2VhcmNoT2JqZWN0OiB7IHZhbHVlOiBzdHJpbmc7IGlucHV0UmVmOiBFbGVtZW50UmVmPGFueT47IH0pOiBhbnkge1xyXG4gICAgdGhpcy5vblNlYXJjaFZhbHVlQ2hhbmdlLm5leHQoc2VhcmNoT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIFNlYXJjaCBmb2N1c2luXHJcbiAgICogQHBhcmFtIHNlYXJjaE9iamVjdCBjb250YWluaW5nIHZhbHVlIGFuZCBpbnB1dCBzZWFyY2ggb2JqZWN0XHJcbiAgICovXHJcbiAgcHVibGljIHNlcmFjaEZvY3VzSW4oc2VhcmNoT2JqZWN0OiB7IHZhbHVlOiBzdHJpbmc7IGlucHV0UmVmOiBFbGVtZW50UmVmPGFueT47IH0pOiBhbnkge1xyXG4gICAgdGhpcy5vblNlcmFjaEZvY3VzSW4ubmV4dChzZWFyY2hPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT24gU2VhcmNoIGZvY3Vzb3V0XHJcbiAgICogQHBhcmFtIHNlYXJjaE9iamVjdCBjb250YWluaW5nIHZhbHVlIGFuZCBpbnB1dCBzZWFyY2ggb2JqZWN0XHJcbiAgICovXHJcbiAgcHVibGljIHNlcmFjaEZvY3VzT3V0KHNlYXJjaE9iamVjdDogeyB2YWx1ZTogc3RyaW5nOyBpbnB1dFJlZjogRWxlbWVudFJlZjxhbnk+OyB9KTogYW55IHtcclxuICAgIHRoaXMub25TZXJhY2hGb2N1c091dC5uZXh0KHNlYXJjaE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBvbiBkYXRhIGNoYW1nZVxyXG4gICAqIEBwYXJhbSBldmVudCBuZXcganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRhQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRGF0YUNoYW5nZS5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB1c2luZyBvbiBzaWRlIG5hdiBvcGVuXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgc2lkZU5hdk9wZW4oZXZlbnQpIHtcclxuICAgIHRoaXMub25TaWRlTmF2T3Blbi5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB1c2luZyBvbiBzaWRlIG5hdiBjbG9zZWRcclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaWRlTmF2Q2xvc2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uU2lkZU5hdkNsb3NlZC5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOb3QgdXNpbmcgY3VycmVudGx5XHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbWluVmFyaWVudENoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5vbk1pblZhcmllbnRDaGFuZ2UubmV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiB1c2luZyBpbiBzaWRlIG5hdiBpdGVtXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgc2lkZU5hdkl0ZW1DbGljayhldmVudCkge1xyXG4gICAgdGhpcy5vblNpZGVOYXZJdGVtQ2xpY2submV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiB1c2luZyBpbiBzaWRlIG5hdiBpdGVtXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgc2lkZU5hdkl0ZW1FeHBhbmRlZChldmVudCkge1xyXG4gICAgdGhpcy5vblNpZGVOYXZJdGVtRXhwYW5kZWQubmV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiB1c2luZyBpbiBzaWRlIG5hdiBpdGVtXHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgc2lkZU5hdkl0ZW1Db2xsYXBzZWQoZXZlbnQpIHtcclxuICAgIHRoaXMub25TaWRlTmF2SXRlbUNvbGxhcHNlZC5uZXh0KGV2ZW50KTtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVzaW5nIGluIHRvb2xiYXIgbWVudVxyXG4gICAqIEBwYXJhbSBldmVudCBqc29uXHJcbiAgICovXHJcbiAgcHVibGljIG1lbnVJdGVtQ2xpY2soZXZlbnQpIHtcclxuICAgIHRoaXMub25NZW51SXRlbUNsaWNrLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XHJcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cclxuICAgKi9cclxuICBwdWJsaWMgbWVudUl0ZW1FeHBhbmRlZChldmVudCkge1xyXG4gICAgdGhpcy5vbk1lbnVJdGVtRXhwYW5kZWQubmV4dChldmVudCk7XHJcblxyXG4gIH1cclxuICAvKipcclxuICAgKiB1c2luZyBpbiB0b29sYmFyIG1lbnVcclxuICAgKiBAcGFyYW0gZXZlbnQganNvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBtZW51SXRlbUNvbGxhcHNlZChldmVudCkge1xyXG4gICAgdGhpcy5vbk1lbnVJdGVtQ29sbGFwc2VkLm5leHQoZXZlbnQpO1xyXG5cclxuICB9XHJcbn1cclxuIl19