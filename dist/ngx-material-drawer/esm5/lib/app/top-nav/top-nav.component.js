/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';
var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(matEventEmitterService, navService) {
        this.matEventEmitterService = matEventEmitterService;
        this.navService = navService;
    }
    /**
     * @return {?}
     */
    TopNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TopNavComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.matEventEmitterService.onNavStateChange.subscribe((/**
         * @param {?} flag
         * @return {?}
         */
        function (flag) {
            _this.isDrawerOpened = flag.isOpened;
        }));
        this.matEventEmitterService.onSideNavClosed.subscribe((/**
         * @param {?} flag
         * @return {?}
         */
        function (flag) {
            _this.isDrawerOpened = flag.isOpened;
        }));
        this.matEventEmitterService.onSideNavClosed.subscribe((/**
         * @param {?} flag
         * @return {?}
         */
        function (flag) {
            _this.isDrawerOpened = flag.isOpened;
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TopNavComponent.prototype.onItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.children || !item.children.length) {
            if (item.onClickClose) {
                this.navService.closeNav();
            }
            this.matEventEmitterService.sideNavItemClick(item);
        }
    };
    TopNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-top-nav',
                    template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1\"\r\n>\r\n    <button\r\n        class=\"btn-toggle\"\r\n        mat-icon-button\r\n        id=\"menu\"\r\n        (click)=\"navService.toggleNav()\"\r\n    >\r\n        <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n        <div\r\n            class=\"wrapper-menu\"\r\n            [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n        >\r\n            <div class=\"line-menu half start\"></div>\r\n            <div class=\"line-menu\"></div>\r\n            <div class=\"line-menu half end\"></div>\r\n        </div>\r\n    </button>\r\n    <span>\r\n        {{config?.appName ? config.appName : 'Default name'}}\r\n    </span>\r\n\r\n\r\n    <!-- Right Menu -->\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <div\r\n        class=\"right-nav\"\r\n        [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n    >\r\n        <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n            <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                <!-- Handle branch node buttons here -->\r\n                <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"item.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"!item?.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-icon-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                    </button>\r\n\r\n\r\n\r\n                    <app-menu-list-item\r\n                        #menu\r\n                        [menus]=\"item.children\"\r\n                    ></app-menu-list-item>\r\n                </span>\r\n                <!-- Leaf node buttons here -->\r\n                <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                    <button\r\n                        [ngStyle]=\"item.style? item.style : ''\"\r\n                        mat-button\r\n                        color=\"primary\"\r\n                        (click)=\"onItemSelected(item)\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n                </span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</mat-toolbar>\r\n",
                    styles: [".wrapper-menu{width:40px;height:25px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform 330ms ease-out;transition:transform 330ms ease-out,-webkit-transform 330ms ease-out}.wrapper-menu.open{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.line-menu{background-color:#fff;border-radius:5px;width:100%;height:4px}.line-menu.half{width:50%}.line-menu.start{transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:right;transform-origin:right}.open .line-menu.start{-webkit-transform:rotate(-90deg) translateX(3px);transform:rotate(-90deg) translateX(3px)}.line-menu.end{align-self:flex-end;transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:left;transform-origin:left}.open .line-menu.end{-webkit-transform:rotate(-90deg) translateX(-3px);transform:rotate(-90deg) translateX(-3px)}.btn-toggle{margin-right:5px}.toolbar-spacer{flex:1 1 auto}.right-nav{display:flex}"]
                }] }
    ];
    /** @nocollapse */
    TopNavComponent.ctorParameters = function () { return [
        { type: MatEventEmitterService },
        { type: NavService }
    ]; };
    TopNavComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return TopNavComponent;
}());
export { TopNavComponent };
if (false) {
    /** @type {?} */
    TopNavComponent.prototype.config;
    /** @type {?} */
    TopNavComponent.prototype.isDrawerOpened;
    /** @type {?} */
    TopNavComponent.prototype.matEventEmitterService;
    /** @type {?} */
    TopNavComponent.prototype.navService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUU7SUFPRSx5QkFBbUIsc0JBQThDLEVBQVEsVUFBcUI7UUFBM0UsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUFRLGVBQVUsR0FBVixVQUFVLENBQVc7SUFBSSxDQUFDOzs7O0lBRW5HLGtDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCx5Q0FBZTs7O0lBQWY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFRO1lBQzlELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBUTtZQUM3RCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVE7WUFDN0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFDRCx3Q0FBYzs7OztJQUFkLFVBQWUsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBRTNDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDhoR0FBdUM7O2lCQUV4Qzs7OztnQkFQUSxzQkFBc0I7Z0JBRHRCLFVBQVU7Ozt5QkFVaEIsS0FBSzs7SUEwQlIsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSxlQUFlOzs7SUFDMUIsaUNBQXFCOztJQUVyQix5Q0FBc0I7O0lBRFYsaURBQXFEOztJQUFDLHFDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRFdmVudEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvbWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdG9wLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvcC1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9wTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb25maWc6IGFueTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWF0RXZlbnRFbWl0dGVyU2VydmljZTogTWF0RXZlbnRFbWl0dGVyU2VydmljZSxwdWJsaWMgbmF2U2VydmljZTpOYXZTZXJ2aWNlKSB7IH1cclxuICBwdWJsaWMgaXNEcmF3ZXJPcGVuZWQ7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vbk5hdlN0YXRlQ2hhbmdlLnN1YnNjcmliZSgoZmxhZzphbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uU2lkZU5hdkNsb3NlZC5zdWJzY3JpYmUoKGZsYWc6YW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vblNpZGVOYXZDbG9zZWQuc3Vic2NyaWJlKChmbGFnOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uSXRlbVNlbGVjdGVkKGl0ZW06IGFueSkge1xyXG4gICAgaWYgKCFpdGVtLmNoaWxkcmVuIHx8ICFpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICBcclxuICAgICAgaWYgKGl0ZW0ub25DbGlja0Nsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5uYXZTZXJ2aWNlLmNsb3NlTmF2KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNpZGVOYXZJdGVtQ2xpY2soaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ==