/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { startWith, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
/** @type {?} */
export const POINTS_NAME = [
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
/** @type {?} */
const QUERY = new Map([
    [POINTS_NAME[0], '(min-width: 1200px)'],
    [POINTS_NAME[1], '(min-width: 992px)'],
    [POINTS_NAME[2], '(min-width: 768px)'],
    [POINTS_NAME[3], '(min-width: 576px)'],
    [POINTS_NAME[4], '(min-width: 0px)'],
]);
export class BreakpointObserverService {
    constructor() {
        this._size$ = fromEvent(window, 'resize')
            .pipe(startWith(this._getScreenSize()), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this._getScreenSize();
        })), distinctUntilChanged(), shareReplay(1));
    }
    /**
     * @return {?}
     */
    get size$() {
        return this._size$;
    }
    /**
     * @private
     * @return {?}
     */
    _getScreenSize() {
        const [[newSize = 'never']] = Array.from(QUERY.entries())
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([size, mediaQuery]) => window.matchMedia(mediaQuery).matches));
        return newSize;
    }
}
BreakpointObserverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BreakpointObserverService.ctorParameters = () => [];
/** @nocollapse */ BreakpointObserverService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreakpointObserverService_Factory() { return new BreakpointObserverService(); }, token: BreakpointObserverService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreakpointObserverService.prototype._size$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvdXRpbHMvYnJlYWtwb2ludC1vYnNlcnZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUNuRixNQUFNLE9BQU8sV0FBVyxHQUFFO0lBQ3RCLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0NBQ1A7O01BQ0ssS0FBSyxHQUF3QixJQUFJLEdBQUcsQ0FBQztJQUN6QyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxxQkFBcUIsQ0FBQztJQUN2QyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQztJQUN0QyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQztJQUN0QyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQztJQUN0QyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztDQUNyQyxDQUFDO0FBS0YsTUFBTSxPQUFPLHlCQUF5QjtJQUdwQztRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFDaEMsR0FBRzs7OztRQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsRUFDdEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sY0FBYztjQUNkLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN0RCxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUM7UUFDeEUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmV4cG9ydCBjb25zdCBQT0lOVFNfTkFNRSA9W1xyXG4gICAgJ3hsJyxcclxuICAgICdsZycsXHJcbiAgICAnbWQnLFxyXG4gICAgJ3NtJyxcclxuICAgICd4cycgXHJcbl1cclxuY29uc3QgUVVFUlk6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKFtcclxuICBbUE9JTlRTX05BTUVbMF0sICcobWluLXdpZHRoOiAxMjAwcHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzFdLCAnKG1pbi13aWR0aDogOTkycHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzJdLCAnKG1pbi13aWR0aDogNzY4cHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzNdLCAnKG1pbi13aWR0aDogNTc2cHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzRdLCAnKG1pbi13aWR0aDogMHB4KSddLFxyXG5dKTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRPYnNlcnZlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3NpemUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9zaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodGhpcy5fZ2V0U2NyZWVuU2l6ZSgpKSxcclxuICAgICAgICBtYXAoKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNjcmVlblNpemUoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2l6ZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplJDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFNjcmVlblNpemUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IFtbbmV3U2l6ZSA9ICduZXZlciddXSA9IEFycmF5LmZyb20oUVVFUlkuZW50cmllcygpKVxyXG4gICAgICAuZmlsdGVyKChbc2l6ZSwgbWVkaWFRdWVyeV0pID0+IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnkpLm1hdGNoZXMpO1xyXG4gICAgcmV0dXJuIG5ld1NpemU7XHJcbiAgfVxyXG59XHJcbiJdfQ==