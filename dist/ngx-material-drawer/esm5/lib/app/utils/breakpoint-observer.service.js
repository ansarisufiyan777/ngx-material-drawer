/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { startWith, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
/** @type {?} */
export var POINTS_NAME = [
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
/** @type {?} */
var QUERY = new Map([
    [POINTS_NAME[0], '(min-width: 1200px)'],
    [POINTS_NAME[1], '(min-width: 992px)'],
    [POINTS_NAME[2], '(min-width: 768px)'],
    [POINTS_NAME[3], '(min-width: 576px)'],
    [POINTS_NAME[4], '(min-width: 0px)'],
]);
var BreakpointObserverService = /** @class */ (function () {
    function BreakpointObserverService() {
        var _this = this;
        this._size$ = fromEvent(window, 'resize')
            .pipe(startWith(this._getScreenSize()), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this._getScreenSize();
        })), distinctUntilChanged(), shareReplay(1));
    }
    Object.defineProperty(BreakpointObserverService.prototype, "size$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    BreakpointObserverService.prototype._getScreenSize = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = tslib_1.__read(Array.from(QUERY.entries())
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), size = _b[0], mediaQuery = _b[1];
            return window.matchMedia(mediaQuery).matches;
        })), 1), _b = tslib_1.__read(_a[0], 1), _c = _b[0], newSize = _c === void 0 ? 'never' : _c;
        return newSize;
    };
    BreakpointObserverService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BreakpointObserverService.ctorParameters = function () { return []; };
    /** @nocollapse */ BreakpointObserverService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreakpointObserverService_Factory() { return new BreakpointObserverService(); }, token: BreakpointObserverService, providedIn: "root" });
    return BreakpointObserverService;
}());
export { BreakpointObserverService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreakpointObserverService.prototype._size$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvdXRpbHMvYnJlYWtwb2ludC1vYnNlcnZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFDbkYsTUFBTSxLQUFPLFdBQVcsR0FBRTtJQUN0QixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtDQUNQOztJQUNLLEtBQUssR0FBd0IsSUFBSSxHQUFHLENBQUM7SUFDekMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLENBQUM7SUFDdkMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUM7SUFDdEMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUM7SUFDdEMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUM7SUFDdEMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUM7Q0FDckMsQ0FBQztBQUVGO0lBTUU7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFDaEMsR0FBRzs7OztRQUFDLFVBQUMsS0FBWTtZQUNmLE9BQU8sS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FDZixDQUFBO0lBQ0wsQ0FBQztJQUVELHNCQUFXLDRDQUFLOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7OztJQUVPLGtEQUFjOzs7O0lBQXRCO1FBQ1EsSUFBQTs7Ozs7Ozs7ZUFDa0UsRUFEakUsNkJBQW1CLEVBQWxCLFVBQWlCLEVBQWpCLHNDQUNnRTtRQUN4RSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7b0NBcEJEO0NBNkNDLEFBM0JELElBMkJDO1NBeEJZLHlCQUF5Qjs7Ozs7O0lBQ3BDLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmV4cG9ydCBjb25zdCBQT0lOVFNfTkFNRSA9W1xyXG4gICAgJ3hsJyxcclxuICAgICdsZycsXHJcbiAgICAnbWQnLFxyXG4gICAgJ3NtJyxcclxuICAgICd4cycgXHJcbl1cclxuY29uc3QgUVVFUlk6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKFtcclxuICBbUE9JTlRTX05BTUVbMF0sICcobWluLXdpZHRoOiAxMjAwcHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzFdLCAnKG1pbi13aWR0aDogOTkycHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzJdLCAnKG1pbi13aWR0aDogNzY4cHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzNdLCAnKG1pbi13aWR0aDogNTc2cHgpJ10sXHJcbiAgW1BPSU5UU19OQU1FWzRdLCAnKG1pbi13aWR0aDogMHB4KSddLFxyXG5dKTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRPYnNlcnZlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3NpemUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9zaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodGhpcy5fZ2V0U2NyZWVuU2l6ZSgpKSxcclxuICAgICAgICBtYXAoKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNjcmVlblNpemUoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2l6ZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplJDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFNjcmVlblNpemUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IFtbbmV3U2l6ZSA9ICduZXZlciddXSA9IEFycmF5LmZyb20oUVVFUlkuZW50cmllcygpKVxyXG4gICAgICAuZmlsdGVyKChbc2l6ZSwgbWVkaWFRdWVyeV0pID0+IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnkpLm1hdGNoZXMpO1xyXG4gICAgcmV0dXJuIG5ld1NpemU7XHJcbiAgfVxyXG59XHJcbiJdfQ==