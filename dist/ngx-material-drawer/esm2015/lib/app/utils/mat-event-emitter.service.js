/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxMaterialDrawerEventEmitter {
    constructor() {
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
     * @param {?} event json
     * @return {?}
     */
    matDrawerInit(event) {
        this.onMatDrawerInit.next(event);
    }
    /**
     * Material drawer Main component life cycle
     * @param {?} event json
     * @return {?}
     */
    matDrawerAfterViewInit(event) {
        this.onMatDrawerAfterViewInit.next(event);
    }
    /**
     * using on side nav toggle
     * @param {?} event json
     * @return {?}
     */
    navStateChange(event) {
        this.onNavStateChange.next(event);
    }
    /**
     * on data chamge
     * @param {?} event new json
     * @return {?}
     */
    dataChange(event) {
        this.onDataChange.next(event);
    }
    /**
     * using on side nav open
     * @param {?} event json
     * @return {?}
     */
    sideNavOpen(event) {
        this.onSideNavOpen.next(event);
    }
    /**
     * using on side nav closed
     * @param {?} event json
     * @return {?}
     */
    sideNavClosed(event) {
        this.onSideNavClosed.next(event);
    }
    /**
     * Not using currently
     * @param {?} event json
     * @return {?}
     */
    minVarientChange(event) {
        this.onMinVarientChange.next(event);
    }
    /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    sideNavItemClick(event) {
        this.onSideNavItemClick.next(event);
    }
    /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    sideNavItemExpanded(event) {
        this.onSideNavItemExpanded.next(event);
    }
    /**
     * using in side nav item
     * @param {?} event json
     * @return {?}
     */
    sideNavItemCollapsed(event) {
        this.onSideNavItemCollapsed.next(event);
    }
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    menuItemClick(event) {
        this.onMenuItemClick.next(event);
    }
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    menuItemExpanded(event) {
        this.onMenuItemExpanded.next(event);
    }
    /**
     * using in toolbar menu
     * @param {?} event json
     * @return {?}
     */
    menuItemCollapsed(event) {
        this.onMenuItemCollapsed.next(event);
    }
}
NgxMaterialDrawerEventEmitter.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxMaterialDrawerEventEmitter.ctorParameters = () => [];
/** @nocollapse */ NgxMaterialDrawerEventEmitter.ngInjectableDef = i0.defineInjectable({ factory: function NgxMaterialDrawerEventEmitter_Factory() { return new NgxMaterialDrawerEventEmitter(); }, token: NgxMaterialDrawerEventEmitter, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1kcmF3ZXIvIiwic291cmNlcyI6WyJsaWIvYXBwL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUs5QyxNQUFNLE9BQU8sNkJBQTZCO0lBZ0J4QztRQWRPLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNuQywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLDJCQUFzQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUUzQixDQUFDOzs7Ozs7SUFLVixhQUFhLENBQUMsS0FBSztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuQyxDQUFDOzs7Ozs7SUFLTSxzQkFBc0IsQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUMsQ0FBQzs7Ozs7O0lBS00sY0FBYyxDQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQyxDQUFDOzs7Ozs7SUFNTSxVQUFVLENBQUMsS0FBSztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVoQyxDQUFDOzs7Ozs7SUFNTSxXQUFXLENBQUMsS0FBSztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxDQUFDOzs7Ozs7SUFNTSxhQUFhLENBQUMsS0FBSztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuQyxDQUFDOzs7Ozs7SUFNTSxnQkFBZ0IsQ0FBQyxLQUFLO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7Ozs7O0lBS00sZ0JBQWdCLENBQUMsS0FBSztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozs7OztJQUtNLG1CQUFtQixDQUFDLEtBQUs7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6QyxDQUFDOzs7Ozs7SUFLTSxvQkFBb0IsQ0FBQyxLQUFLO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUMsQ0FBQzs7Ozs7O0lBS00sYUFBYSxDQUFDLEtBQUs7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkMsQ0FBQzs7Ozs7O0lBS00sZ0JBQWdCLENBQUMsS0FBSztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozs7OztJQUtNLGlCQUFpQixDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2QyxDQUFDOzs7WUEvSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7O0lBR0Msd0RBQXVDOztJQUN2QyxpRUFBZ0Q7O0lBQ2hELHlEQUF3Qzs7SUFDeEMscURBQTJDOztJQUMzQyxzREFBcUM7O0lBQ3JDLHdEQUF1Qzs7SUFDdkMsMkRBQTBDOztJQUMxQywyREFBMEM7O0lBQzFDLDhEQUE2Qzs7SUFDN0MsK0RBQThDOztJQUM5Qyx3REFBdUM7O0lBQ3ZDLDJEQUEwQzs7SUFDMUMsNERBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyIHtcblxuICBwdWJsaWMgb25NYXREcmF3ZXJJbml0ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uTWF0RHJhd2VyQWZ0ZXJWaWV3SW5pdCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvbk5hdlN0YXRlQ2hhbmdlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uRGF0YUNoYW5nZSA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICBwdWJsaWMgb25TaWRlTmF2T3BlbiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvblNpZGVOYXZDbG9zZWQgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25NaW5WYXJpZW50Q2hhbmdlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uU2lkZU5hdkl0ZW1DbGljayA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvblNpZGVOYXZJdGVtRXhwYW5kZWQgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25TaWRlTmF2SXRlbUNvbGxhcHNlZCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvbk1lbnVJdGVtQ2xpY2sgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgb25NZW51SXRlbUV4cGFuZGVkID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIG9uTWVudUl0ZW1Db2xsYXBzZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIC8qKlxuICAgKiBNYXRlcmlhbCBkcmF3ZXIgTWFpbiBjb21wb25lbnQgbGlmZSBjeWNsZVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIG1hdERyYXdlckluaXQoZXZlbnQpe1xuICAgIHRoaXMub25NYXREcmF3ZXJJbml0Lm5leHQoZXZlbnQpO1xuICBcbiAgfVxuICAvKipcbiAgICogTWF0ZXJpYWwgZHJhd2VyIE1haW4gY29tcG9uZW50IGxpZmUgY3ljbGVcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cbiAgICovXG4gIHB1YmxpYyBtYXREcmF3ZXJBZnRlclZpZXdJbml0KGV2ZW50KXtcbiAgICB0aGlzLm9uTWF0RHJhd2VyQWZ0ZXJWaWV3SW5pdC5uZXh0KGV2ZW50KTtcbiAgXG4gIH1cbiAgLyoqXG4gICAqIHVzaW5nIG9uIHNpZGUgbmF2IHRvZ2dsZVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIG5hdlN0YXRlQ2hhbmdlKGV2ZW50KXtcbiAgICB0aGlzLm9uTmF2U3RhdGVDaGFuZ2UubmV4dChldmVudCk7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogb24gZGF0YSBjaGFtZ2VcbiAgICogQHBhcmFtIGV2ZW50IG5ldyBqc29uXG4gICAqL1xuICBwdWJsaWMgZGF0YUNoYW5nZShldmVudCl7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UubmV4dChldmVudCk7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogdXNpbmcgb24gc2lkZSBuYXYgb3BlblxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIHNpZGVOYXZPcGVuKGV2ZW50KXtcbiAgICB0aGlzLm9uU2lkZU5hdk9wZW4ubmV4dChldmVudCk7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogdXNpbmcgb24gc2lkZSBuYXYgY2xvc2VkXG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgc2lkZU5hdkNsb3NlZChldmVudCl7XG4gICAgdGhpcy5vblNpZGVOYXZDbG9zZWQubmV4dChldmVudCk7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogTm90IHVzaW5nIGN1cnJlbnRseVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIG1pblZhcmllbnRDaGFuZ2UoZXZlbnQpe1xuICAgIHRoaXMub25NaW5WYXJpZW50Q2hhbmdlLm5leHQoZXZlbnQpO1xuICAgIFxuICB9XG4gIC8qKlxuICAgKiB1c2luZyBpbiBzaWRlIG5hdiBpdGVtXG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgc2lkZU5hdkl0ZW1DbGljayhldmVudCl7XG4gICAgdGhpcy5vblNpZGVOYXZJdGVtQ2xpY2submV4dChldmVudCk7XG4gICAgXG4gIH1cbiAgLyoqXG4gICAqIHVzaW5nIGluIHNpZGUgbmF2IGl0ZW1cbiAgICogQHBhcmFtIGV2ZW50IGpzb25cbiAgICovXG4gIHB1YmxpYyBzaWRlTmF2SXRlbUV4cGFuZGVkKGV2ZW50KXtcbiAgICB0aGlzLm9uU2lkZU5hdkl0ZW1FeHBhbmRlZC5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuICAvKipcbiAgICogdXNpbmcgaW4gc2lkZSBuYXYgaXRlbVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIHNpZGVOYXZJdGVtQ29sbGFwc2VkKGV2ZW50KXtcbiAgICB0aGlzLm9uU2lkZU5hdkl0ZW1Db2xsYXBzZWQubmV4dChldmVudCk7XG4gICAgXG4gIH1cbiAgLyoqXG4gICAqIHVzaW5nIGluIHRvb2xiYXIgbWVudVxuICAgKiBAcGFyYW0gZXZlbnQganNvblxuICAgKi9cbiAgcHVibGljIG1lbnVJdGVtQ2xpY2soZXZlbnQpe1xuICAgIHRoaXMub25NZW51SXRlbUNsaWNrLm5leHQoZXZlbnQpO1xuICAgIFxuICB9XG4gIC8qKlxuICAgKiB1c2luZyBpbiB0b29sYmFyIG1lbnVcbiAgICogQHBhcmFtIGV2ZW50IGpzb25cbiAgICovXG4gIHB1YmxpYyBtZW51SXRlbUV4cGFuZGVkKGV2ZW50KXtcbiAgICB0aGlzLm9uTWVudUl0ZW1FeHBhbmRlZC5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxuICAvKipcbiAgICogdXNpbmcgaW4gdG9vbGJhciBtZW51XG4gICAqIEBwYXJhbSBldmVudCBqc29uXG4gICAqL1xuICBwdWJsaWMgbWVudUl0ZW1Db2xsYXBzZWQoZXZlbnQpe1xuICAgIHRoaXMub25NZW51SXRlbUNvbGxhcHNlZC5uZXh0KGV2ZW50KTtcbiAgICBcbiAgfVxufVxuIl19