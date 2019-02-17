/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatEventEmitterService } from './mat-event-emitter.service';
import * as i0 from "@angular/core";
import * as i1 from "./mat-event-emitter.service";
export class NavService {
    /**
     * @param {?} matEventEmitterService
     */
    constructor(matEventEmitterService) {
        this.matEventEmitterService = matEventEmitterService;
        this.currentUrl = new BehaviorSubject(undefined);
        this.isDrawerOpened = false;
    }
    /**
     * @return {?}
     */
    closeNav() {
        if (!this.isMiniVarient) {
            this.appDrawer.close();
        }
        this.isOpened = false;
        this.matEventEmitterService.sideNavClosed(this.getData(this.isOpened));
    }
    /**
     * @return {?}
     */
    openNav() {
        if (!this.isMiniVarient) {
            this.appDrawer.open();
        }
        this.isOpened = true;
        this.matEventEmitterService.sideNavOpen(this.getData(this.isOpened));
    }
    /**
     * @return {?}
     */
    toggleNav() {
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
    }
    /**
     * @param {?} b
     * @return {?}
     */
    getData(b) {
        return {
            drawer: this.appDrawer,
            isOpened: b
        };
    }
}
NavService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NavService.ctorParameters = () => [
    { type: MatEventEmitterService }
];
/** @nocollapse */ NavService.ngInjectableDef = i0.defineInjectable({ factory: function NavService_Factory() { return new NavService(i0.inject(i1.MatEventEmitterService)); }, token: NavService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NavService.prototype.appDrawer;
    /** @type {?} */
    NavService.prototype.isMiniVarient;
    /** @type {?} */
    NavService.prototype.isOpened;
    /** @type {?} */
    NavService.prototype.currentUrl;
    /** @type {?} */
    NavService.prototype.isDrawerOpened;
    /** @type {?} */
    NavService.prototype.matEventEmitterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC91dGlscy9uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBSXJFLE1BQU0sT0FBTyxVQUFVOzs7O0lBTXJCLFlBQ1Msc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFIaEQsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSTlCLENBQUM7Ozs7SUFDTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQUk7WUFDSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsQ0FBQztRQUNQLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdEIsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFBO0lBQ0gsQ0FBQzs7O1lBL0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUhRLHNCQUFzQjs7Ozs7SUFLN0IsK0JBQXNCOztJQUN0QixtQ0FBMEI7O0lBQzFCLDhCQUF5Qjs7SUFDekIsZ0NBQTJEOztJQUMzRCxvQ0FBOEI7O0lBRTVCLDRDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0RXZlbnRFbWl0dGVyU2VydmljZSB9IGZyb20gJy4vbWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdlNlcnZpY2Uge1xyXG4gIHB1YmxpYyBhcHBEcmF3ZXI6IGFueTtcclxuICBwdWJsaWMgaXNNaW5pVmFyaWVudDogYW55O1xyXG4gIHB1YmxpYyBpc09wZW5lZDogYm9vbGVhbjtcclxuICBwdWJsaWMgY3VycmVudFVybCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xyXG4gIHB1YmxpYyBpc0RyYXdlck9wZW5lZCA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG1hdEV2ZW50RW1pdHRlclNlcnZpY2U6IE1hdEV2ZW50RW1pdHRlclNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgfVxyXG4gIHB1YmxpYyBjbG9zZU5hdigpIHtcclxuICAgIGlmICghdGhpcy5pc01pbmlWYXJpZW50KSB7XHJcbiAgICAgIHRoaXMuYXBwRHJhd2VyLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2lkZU5hdkNsb3NlZCh0aGlzLmdldERhdGEodGhpcy5pc09wZW5lZCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5OYXYoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNNaW5pVmFyaWVudCkge1xyXG4gICAgICB0aGlzLmFwcERyYXdlci5vcGVuKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5zaWRlTmF2T3Blbih0aGlzLmdldERhdGEodGhpcy5pc09wZW5lZCkpO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgdG9nZ2xlTmF2KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTWluaVZhcmllbnQpIHtcclxuICAgICAgdGhpcy5hcHBEcmF3ZXIudG9nZ2xlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gIXRoaXMuaXNPcGVuZWQ7XHJcbiAgICBpZih0aGlzLmlzT3BlbmVkKXtcclxuICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNpZGVOYXZPcGVuKHRoaXMuZ2V0RGF0YSh0aGlzLmlzT3BlbmVkKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNpZGVOYXZDbG9zZWQodGhpcy5nZXREYXRhKHRoaXMuaXNPcGVuZWQpKTtcclxuICAgIH1cclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5uYXZTdGF0ZUNoYW5nZSh0aGlzLmdldERhdGEodGhpcy5pc09wZW5lZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShiKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRyYXdlcjogdGhpcy5hcHBEcmF3ZXIsXHJcbiAgICAgIGlzT3BlbmVkOiBiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==