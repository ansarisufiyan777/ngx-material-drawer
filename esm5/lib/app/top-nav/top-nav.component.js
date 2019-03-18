/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
var NgxTopNavComponent = /** @class */ (function () {
    function NgxTopNavComponent(matEventEmitterService, navService) {
        this.matEventEmitterService = matEventEmitterService;
        this.navService = navService;
    }
    /**
     * @return {?}
     */
    NgxTopNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgxTopNavComponent.prototype.ngAfterViewInit = /**
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
    NgxTopNavComponent.prototype.onItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.children || !item.children.length) {
            this.matEventEmitterService.menuItemClick(item);
        }
    };
    NgxTopNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-top-nav',
                    template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1\"\r\n>\r\n    <button\r\n        class=\"btn-toggle\"\r\n        mat-icon-button\r\n        id=\"menu\"\r\n        (click)=\"navService.toggleNav()\"\r\n    >\r\n        <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n        <div\r\n            class=\"wrapper-menu\"\r\n            [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n        >\r\n            <div class=\"line-menu half start\"></div>\r\n            <div class=\"line-menu\"></div>\r\n            <div class=\"line-menu half end\"></div>\r\n        </div>\r\n    </button>\r\n    <span>\r\n        {{config?.appName ? config.appName : 'Default name'}}\r\n    </span>\r\n\r\n\r\n    <!-- Right Menu -->\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <div\r\n        class=\"right-nav\"\r\n        [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n    >\r\n        <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n            <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                <!-- Handle branch node buttons here -->\r\n                <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"item.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"!item?.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-icon-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                    </button>\r\n\r\n\r\n\r\n                    <app-menu-list-item\r\n                        #menu\r\n                        [menus]=\"item.children\"\r\n                    ></app-menu-list-item>\r\n                </span>\r\n                <!-- Leaf node buttons here -->\r\n                <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                    <button\r\n                    *ngIf=\"item.displayName?.trim()\"\r\n                    [ngStyle]=\"item?.style? item.style : ''\"\r\n                    mat-button\r\n                    (click)=\"onItemSelected(item)\"\r\n                    [disabled]=\"item.disabled\"\r\n                >\r\n                    <mat-icon>{{item.iconName}}</mat-icon>\r\n                    <span>{{item.displayName}}</span>\r\n                </button>\r\n\r\n\r\n                <button\r\n                    *ngIf=\"!item?.displayName?.trim()\"\r\n                    [ngStyle]=\"item?.style? item.style : ''\"\r\n                    mat-icon-button\r\n                    (click)=\"onItemSelected(item)\"\r\n                    [disabled]=\"item.disabled\"\r\n                >\r\n                    <mat-icon>{{item.iconName}}</mat-icon>\r\n                </button>\r\n                </span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</mat-toolbar>\r\n",
                    styles: [".wrapper-menu{width:40px;height:25px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform 330ms ease-out;transition:transform 330ms ease-out,-webkit-transform 330ms ease-out}.wrapper-menu.open{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.line-menu{background-color:#fff;border-radius:5px;width:100%;height:4px}.line-menu.half{width:50%}.line-menu.start{transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:right;transform-origin:right}.open .line-menu.start{-webkit-transform:rotate(-90deg) translateX(3px);transform:rotate(-90deg) translateX(3px)}.line-menu.end{align-self:flex-end;transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:left;transform-origin:left}.open .line-menu.end{-webkit-transform:rotate(-90deg) translateX(-3px);transform:rotate(-90deg) translateX(-3px)}.btn-toggle{margin-right:5px}.toolbar-spacer{flex:1 1 auto}.right-nav{display:flex}"]
                }] }
    ];
    /** @nocollapse */
    NgxTopNavComponent.ctorParameters = function () { return [
        { type: NgxMaterialDrawerEventEmitter },
        { type: NgxNavService }
    ]; };
    NgxTopNavComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return NgxTopNavComponent;
}());
export { NgxTopNavComponent };
if (false) {
    /** @type {?} */
    NgxTopNavComponent.prototype.config;
    /** @type {?} */
    NgxTopNavComponent.prototype.isDrawerOpened;
    /** @type {?} */
    NgxTopNavComponent.prototype.matEventEmitterService;
    /** @type {?} */
    NgxTopNavComponent.prototype.navService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbkY7SUFPRSw0QkFBbUIsc0JBQXFELEVBQVEsVUFBd0I7UUFBckYsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtRQUFRLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBSSxDQUFDOzs7O0lBRTdHLHFDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCw0Q0FBZTs7O0lBQWY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFRO1lBQzlELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBUTtZQUM3RCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVE7WUFDN0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFDRCwyQ0FBYzs7OztJQUFkLFVBQWUsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qix3K0dBQXVDOztpQkFFeEM7Ozs7Z0JBUFEsNkJBQTZCO2dCQUQ3QixhQUFhOzs7eUJBVW5CLEtBQUs7O0lBc0JSLHlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2Qlksa0JBQWtCOzs7SUFDN0Isb0NBQXFCOztJQUVyQiw0Q0FBc0I7O0lBRFYsb0RBQTREOztJQUFDLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hOYXZTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlciB9IGZyb20gJy4uL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRvcC1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b3AtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b3AtbmF2LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFRvcE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG1hdEV2ZW50RW1pdHRlclNlcnZpY2U6IE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyLHB1YmxpYyBuYXZTZXJ2aWNlOk5neE5hdlNlcnZpY2UpIHsgfVxyXG4gIHB1YmxpYyBpc0RyYXdlck9wZW5lZDtcclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uTmF2U3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKChmbGFnOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uub25TaWRlTmF2Q2xvc2VkLnN1YnNjcmliZSgoZmxhZzphbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uU2lkZU5hdkNsb3NlZC5zdWJzY3JpYmUoKGZsYWc6YW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICB9XHJcbiAgb25JdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XHJcbiAgICBpZiAoIWl0ZW0uY2hpbGRyZW4gfHwgIWl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5tZW51SXRlbUNsaWNrKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=