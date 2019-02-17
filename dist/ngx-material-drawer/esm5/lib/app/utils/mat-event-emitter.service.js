/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
var MatEventEmitterService = /** @class */ (function () {
    function MatEventEmitterService() {
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
    MatEventEmitterService.prototype.matDrawerInit = /**
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
    MatEventEmitterService.prototype.matDrawerAfterViewInit = /**
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
    MatEventEmitterService.prototype.navStateChange = /**
     * using on side nav toggle
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onNavStateChange.next(event);
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
    MatEventEmitterService.prototype.dataChange = /**
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
    MatEventEmitterService.prototype.sideNavOpen = /**
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
    MatEventEmitterService.prototype.sideNavClosed = /**
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
    MatEventEmitterService.prototype.minVarientChange = /**
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
    MatEventEmitterService.prototype.sideNavItemClick = /**
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
    MatEventEmitterService.prototype.sideNavItemExpanded = /**
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
    MatEventEmitterService.prototype.sideNavItemCollapsed = /**
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
    MatEventEmitterService.prototype.menuItemClick = /**
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
    MatEventEmitterService.prototype.menuItemExpanded = /**
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
    MatEventEmitterService.prototype.menuItemCollapsed = /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    function (event) {
        this.onMenuItemCollapsed.next(event);
    };
    MatEventEmitterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatEventEmitterService.ctorParameters = function () { return []; };
    /** @nocollapse */ MatEventEmitterService.ngInjectableDef = i0.defineInjectable({ factory: function MatEventEmitterService_Factory() { return new MatEventEmitterService(); }, token: MatEventEmitterService, providedIn: "root" });
    return MatEventEmitterService;
}());
export { MatEventEmitterService };
if (false) {
    /** @type {?} */
    MatEventEmitterService.prototype.onMatDrawerInit;
    /** @type {?} */
    MatEventEmitterService.prototype.onMatDrawerAfterViewInit;
    /** @type {?} */
    MatEventEmitterService.prototype.onNavStateChange;
    /** @type {?} */
    MatEventEmitterService.prototype.onDataChange;
    /** @type {?} */
    MatEventEmitterService.prototype.onSideNavOpen;
    /** @type {?} */
    MatEventEmitterService.prototype.onSideNavClosed;
    /** @type {?} */
    MatEventEmitterService.prototype.onMinVarientChange;
    /** @type {?} */
    MatEventEmitterService.prototype.onSideNavItemClick;
    /** @type {?} */
    MatEventEmitterService.prototype.onSideNavItemExpanded;
    /** @type {?} */
    MatEventEmitterService.prototype.onSideNavItemCollapsed;
    /** @type {?} */
    MatEventEmitterService.prototype.onMenuItemClick;
    /** @type {?} */
    MatEventEmitterService.prototype.onMenuItemExpanded;
    /** @type {?} */
    MatEventEmitterService.prototype.onMenuItemCollapsed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1kcmF3ZXIvIiwic291cmNlcyI6WyJsaWIvYXBwL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUU5QztJQW1CRTtRQWRPLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNuQywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLDJCQUFzQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBQ2pCOzs7T0FHRzs7Ozs7O0lBQ0ksOENBQWE7Ozs7O0lBQXBCLFVBQXFCLEtBQUs7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7O0lBQ0ksdURBQXNCOzs7OztJQUE3QixVQUE4QixLQUFLO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUMsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7O0lBQ0ksK0NBQWM7Ozs7O0lBQXJCLFVBQXNCLEtBQUs7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSwyQ0FBVTs7Ozs7SUFBakIsVUFBa0IsS0FBSztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSw0Q0FBVzs7Ozs7SUFBbEIsVUFBbUIsS0FBSztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSw4Q0FBYTs7Ozs7SUFBcEIsVUFBcUIsS0FBSztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSxpREFBZ0I7Ozs7O0lBQXZCLFVBQXdCLEtBQUs7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSSxpREFBZ0I7Ozs7O0lBQXZCLFVBQXdCLEtBQUs7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSSxvREFBbUI7Ozs7O0lBQTFCLFVBQTJCLEtBQUs7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6QyxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSSxxREFBb0I7Ozs7O0lBQTNCLFVBQTRCLEtBQUs7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSSw4Q0FBYTs7Ozs7SUFBcEIsVUFBcUIsS0FBSztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSSxpREFBZ0I7Ozs7O0lBQXZCLFVBQXdCLEtBQUs7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSSxrREFBaUI7Ozs7O0lBQXhCLFVBQXlCLEtBQUs7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2QyxDQUFDOztnQkEvSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7aUNBTEQ7Q0FtSUMsQUFoSUQsSUFnSUM7U0E3SFksc0JBQXNCOzs7SUFFakMsaURBQXVDOztJQUN2QywwREFBZ0Q7O0lBQ2hELGtEQUF3Qzs7SUFDeEMsOENBQTJDOztJQUMzQywrQ0FBcUM7O0lBQ3JDLGlEQUF1Qzs7SUFDdkMsb0RBQTBDOztJQUMxQyxvREFBMEM7O0lBQzFDLHVEQUE2Qzs7SUFDN0Msd0RBQThDOztJQUM5QyxpREFBdUM7O0lBQ3ZDLG9EQUEwQzs7SUFDMUMscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdEV2ZW50RW1pdHRlclNlcnZpY2Uge1xuXG4gIHB1YmxpYyBvbk1hdERyYXdlckluaXQgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25NYXREcmF3ZXJBZnRlclZpZXdJbml0ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uTmF2U3RhdGVDaGFuZ2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25EYXRhQ2hhbmdlID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIHB1YmxpYyBvblNpZGVOYXZPcGVuID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uU2lkZU5hdkNsb3NlZCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvbk1pblZhcmllbnRDaGFuZ2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25TaWRlTmF2SXRlbUNsaWNrID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uU2lkZU5hdkl0ZW1FeHBhbmRlZCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvblNpZGVOYXZJdGVtQ29sbGFwc2VkID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uTWVudUl0ZW1DbGljayA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvbk1lbnVJdGVtRXhwYW5kZWQgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25NZW51SXRlbUNvbGxhcHNlZCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgLyoqXG4gICAqIE1hdGVyaWFsIGRyYXdlciBNYWluIGNvbXBvbmVudCBsaWZlIGN5Y2xlXG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgbWF0RHJhd2VySW5pdChldmVudCl7XG4gICAgdGhpcy5vbk1hdERyYXdlckluaXQubmV4dChldmVudCk7XG4gIFxuICB9XG4gIC8qKlxuICAgKiBNYXRlcmlhbCBkcmF3ZXIgTWFpbiBjb21wb25lbnQgbGlmZSBjeWNsZVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIG1hdERyYXdlckFmdGVyVmlld0luaXQoZXZlbnQpe1xuICAgIHRoaXMub25NYXREcmF3ZXJBZnRlclZpZXdJbml0Lm5leHQoZXZlbnQpO1xuICBcbiAgfVxuICAvKipcbiAgICogdXNpbmcgb24gc2lkZSBuYXYgdG9nZ2xlXG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgbmF2U3RhdGVDaGFuZ2UoZXZlbnQpe1xuICAgIHRoaXMub25OYXZTdGF0ZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBkYXRhIGNoYW1nZVxuICAgKiBAcGFyYW0gZXZlbnQgbmV3IGpzb25cbiAgICovXG4gIHB1YmxpYyBkYXRhQ2hhbmdlKGV2ZW50KXtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiB1c2luZyBvbiBzaWRlIG5hdiBvcGVuXG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgc2lkZU5hdk9wZW4oZXZlbnQpe1xuICAgIHRoaXMub25TaWRlTmF2T3Blbi5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiB1c2luZyBvbiBzaWRlIG5hdiBjbG9zZWRcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cbiAgICovXG4gIHB1YmxpYyBzaWRlTmF2Q2xvc2VkKGV2ZW50KXtcbiAgICB0aGlzLm9uU2lkZU5hdkNsb3NlZC5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3QgdXNpbmcgY3VycmVudGx5XG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgbWluVmFyaWVudENoYW5nZShldmVudCl7XG4gICAgdGhpcy5vbk1pblZhcmllbnRDaGFuZ2UubmV4dChldmVudCk7XG4gICAgXG4gIH1cbiAgLyoqXG4gICAqIHVzaW5nIGluIHNpZGUgbmF2IGl0ZW1cbiAgICogQHBhcmFtIGV2ZW50IGpzb25cbiAgICovXG4gIHB1YmxpYyBzaWRlTmF2SXRlbUNsaWNrKGV2ZW50KXtcbiAgICB0aGlzLm9uU2lkZU5hdkl0ZW1DbGljay5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuICAvKipcbiAgICogdXNpbmcgaW4gc2lkZSBuYXYgaXRlbVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIHNpZGVOYXZJdGVtRXhwYW5kZWQoZXZlbnQpe1xuICAgIHRoaXMub25TaWRlTmF2SXRlbUV4cGFuZGVkLm5leHQoZXZlbnQpO1xuICAgIFxuICB9XG4gIC8qKlxuICAgKiB1c2luZyBpbiBzaWRlIG5hdiBpdGVtXG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgc2lkZU5hdkl0ZW1Db2xsYXBzZWQoZXZlbnQpe1xuICAgIHRoaXMub25TaWRlTmF2SXRlbUNvbGxhcHNlZC5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuICAvKipcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgbWVudUl0ZW1DbGljayhldmVudCl7XG4gICAgdGhpcy5vbk1lbnVJdGVtQ2xpY2submV4dChldmVudCk7XG4gICAgXG4gIH1cbiAgLyoqXG4gICAqIHVzaW5nIGluIHRvb2xiYXIgbWVudVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIG1lbnVJdGVtRXhwYW5kZWQoZXZlbnQpe1xuICAgIHRoaXMub25NZW51SXRlbUV4cGFuZGVkLm5leHQoZXZlbnQpO1xuICAgIFxuICB9XG4gIC8qKlxuICAgKiB1c2luZyBpbiB0b29sYmFyIG1lbnVcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cbiAgICovXG4gIHB1YmxpYyBtZW51SXRlbUNvbGxhcHNlZChldmVudCl7XG4gICAgdGhpcy5vbk1lbnVJdGVtQ29sbGFwc2VkLm5leHQoZXZlbnQpO1xuICAgIFxuICB9XG59XG4iXX0=