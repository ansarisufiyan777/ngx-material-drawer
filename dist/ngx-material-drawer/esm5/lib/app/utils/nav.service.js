/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxMaterialDrawerEventEmitter } from './mat-event-emitter.service';
import * as i0 from "@angular/core";
import * as i1 from "./mat-event-emitter.service";
var NgxNavService = /** @class */ (function () {
    function NgxNavService(matEventEmitterService) {
        this.matEventEmitterService = matEventEmitterService;
        this.currentUrl = new BehaviorSubject(undefined);
        this.isDrawerOpened = false;
    }
    /**
     * @return {?}
     */
    NgxNavService.prototype.closeNav = /**
     * @return {?}
     */
    function () {
        if (!this.isMiniVarient) {
            this.appDrawer.close();
        }
        this.isOpened = false;
        this.matEventEmitterService.sideNavClosed(this.getData(this.isOpened));
    };
    /**
     * @return {?}
     */
    NgxNavService.prototype.openNav = /**
     * @return {?}
     */
    function () {
        if (!this.isMiniVarient) {
            this.appDrawer.open();
        }
        this.isOpened = true;
        this.matEventEmitterService.sideNavOpen(this.getData(this.isOpened));
    };
    /**
     * @return {?}
     */
    NgxNavService.prototype.toggleNav = /**
     * @return {?}
     */
    function () {
        if (!this.isMiniVarient) {
            this.appDrawer.toggle();
        }
        this.isOpened = !this.isOpened;
        if (this.isOpened) {
            this.matEventEmitterService.sideNavOpen(this.getData(this.isOpened));
        }
        else {
            this.matEventEmitterService.sideNavClosed(this.getData(this.isOpened));
        }
        this.matEventEmitterService.navStateChange(this.getData(this.isOpened));
    };
    /**
     * @param {?} b
     * @return {?}
     */
    NgxNavService.prototype.getData = /**
     * @param {?} b
     * @return {?}
     */
    function (b) {
        return {
            drawer: this.appDrawer,
            isOpened: b
        };
    };
    NgxNavService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxNavService.ctorParameters = function () { return [
        { type: NgxMaterialDrawerEventEmitter }
    ]; };
    /** @nocollapse */ NgxNavService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxNavService_Factory() { return new NgxNavService(i0.ɵɵinject(i1.NgxMaterialDrawerEventEmitter)); }, token: NgxNavService, providedIn: "root" });
    return NgxNavService;
}());
export { NgxNavService };
if (false) {
    /** @type {?} */
    NgxNavService.prototype.appDrawer;
    /** @type {?} */
    NgxNavService.prototype.isMiniVarient;
    /** @type {?} */
    NgxNavService.prototype.isOpened;
    /** @type {?} */
    NgxNavService.prototype.currentUrl;
    /** @type {?} */
    NgxNavService.prototype.isDrawerOpened;
    /** @type {?} */
    NgxNavService.prototype.matEventEmitterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC91dGlscy9uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBQzVFO0lBU0UsdUJBQ1Msc0JBQXFEO1FBQXJELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBK0I7UUFIdkQsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSTlCLENBQUM7Ozs7SUFDTSxnQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFTSwrQkFBTzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFTSxpQ0FBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNmLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN0RTthQUFJO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLENBQUM7UUFDUCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQTtJQUNILENBQUM7O2dCQS9DRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUhRLDZCQUE2Qjs7O3dCQUZ0QztDQW1EQyxBQWhERCxJQWdEQztTQTdDWSxhQUFhOzs7SUFDeEIsa0NBQXNCOztJQUN0QixzQ0FBMEI7O0lBQzFCLGlDQUF5Qjs7SUFDekIsbUNBQTJEOztJQUMzRCx1Q0FBOEI7O0lBRTVCLCtDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxEcmF3ZXJFdmVudEVtaXR0ZXIgfSBmcm9tICcuL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hOYXZTZXJ2aWNlIHtcclxuICBwdWJsaWMgYXBwRHJhd2VyOiBhbnk7XHJcbiAgcHVibGljIGlzTWluaVZhcmllbnQ6IGFueTtcclxuICBwdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW47XHJcbiAgcHVibGljIGN1cnJlbnRVcmwgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odW5kZWZpbmVkKTtcclxuICBwdWJsaWMgaXNEcmF3ZXJPcGVuZWQgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtYXRFdmVudEVtaXR0ZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlcixcclxuICApIHtcclxuICB9XHJcbiAgcHVibGljIGNsb3NlTmF2KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTWluaVZhcmllbnQpIHtcclxuICAgICAgdGhpcy5hcHBEcmF3ZXIuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5zaWRlTmF2Q2xvc2VkKHRoaXMuZ2V0RGF0YSh0aGlzLmlzT3BlbmVkKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3Blbk5hdigpIHtcclxuICAgIGlmICghdGhpcy5pc01pbmlWYXJpZW50KSB7XHJcbiAgICAgIHRoaXMuYXBwRHJhd2VyLm9wZW4oKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNpZGVOYXZPcGVuKHRoaXMuZ2V0RGF0YSh0aGlzLmlzT3BlbmVkKSk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyB0b2dnbGVOYXYoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNNaW5pVmFyaWVudCkge1xyXG4gICAgICB0aGlzLmFwcERyYXdlci50b2dnbGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNPcGVuZWQgPSAhdGhpcy5pc09wZW5lZDtcclxuICAgIGlmKHRoaXMuaXNPcGVuZWQpe1xyXG4gICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2lkZU5hdk9wZW4odGhpcy5nZXREYXRhKHRoaXMuaXNPcGVuZWQpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2lkZU5hdkNsb3NlZCh0aGlzLmdldERhdGEodGhpcy5pc09wZW5lZCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm5hdlN0YXRlQ2hhbmdlKHRoaXMuZ2V0RGF0YSh0aGlzLmlzT3BlbmVkKSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKGIpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZHJhd2VyOiB0aGlzLmFwcERyYXdlcixcclxuICAgICAgaXNPcGVuZWQ6IGJcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19