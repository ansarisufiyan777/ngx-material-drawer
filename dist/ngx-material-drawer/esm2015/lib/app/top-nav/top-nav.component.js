/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export class NgxTopNavComponent {
    /**
     * @param {?} matEventEmitterService
     * @param {?} navService
     */
    constructor(matEventEmitterService, navService) {
        this.matEventEmitterService = matEventEmitterService;
        this.navService = navService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.matEventEmitterService.onNavStateChange.subscribe((/**
         * @param {?} flag
         * @return {?}
         */
        (flag) => {
            this.isDrawerOpened = flag.isOpened;
        }));
        this.matEventEmitterService.onSideNavClosed.subscribe((/**
         * @param {?} flag
         * @return {?}
         */
        (flag) => {
            this.isDrawerOpened = flag.isOpened;
        }));
        this.matEventEmitterService.onSideNavClosed.subscribe((/**
         * @param {?} flag
         * @return {?}
         */
        (flag) => {
            this.isDrawerOpened = flag.isOpened;
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemSelected(item) {
        if (!item.children || !item.children.length) {
            if (item.onClickClose) {
                this.navService.closeNav();
            }
            this.matEventEmitterService.sideNavItemClick(item);
        }
    }
}
NgxTopNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-top-nav',
                template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1\"\r\n>\r\n    <button\r\n        class=\"btn-toggle\"\r\n        mat-icon-button\r\n        id=\"menu\"\r\n        (click)=\"navService.toggleNav()\"\r\n    >\r\n        <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n        <div\r\n            class=\"wrapper-menu\"\r\n            [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n        >\r\n            <div class=\"line-menu half start\"></div>\r\n            <div class=\"line-menu\"></div>\r\n            <div class=\"line-menu half end\"></div>\r\n        </div>\r\n    </button>\r\n    <span>\r\n        {{config?.appName ? config.appName : 'Default name'}}\r\n    </span>\r\n\r\n\r\n    <!-- Right Menu -->\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <div\r\n        class=\"right-nav\"\r\n        [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n    >\r\n        <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n            <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                <!-- Handle branch node buttons here -->\r\n                <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"item.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"!item?.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-icon-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                    </button>\r\n\r\n\r\n\r\n                    <app-menu-list-item\r\n                        #menu\r\n                        [menus]=\"item.children\"\r\n                    ></app-menu-list-item>\r\n                </span>\r\n                <!-- Leaf node buttons here -->\r\n                <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                    <button\r\n                        [ngStyle]=\"item.style? item.style : ''\"\r\n                        mat-button\r\n                        color=\"primary\"\r\n                        (click)=\"onItemSelected(item)\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n                </span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</mat-toolbar>\r\n",
                styles: [".wrapper-menu{width:40px;height:25px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform 330ms ease-out;transition:transform 330ms ease-out,-webkit-transform 330ms ease-out}.wrapper-menu.open{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.line-menu{background-color:#fff;border-radius:5px;width:100%;height:4px}.line-menu.half{width:50%}.line-menu.start{transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:right;transform-origin:right}.open .line-menu.start{-webkit-transform:rotate(-90deg) translateX(3px);transform:rotate(-90deg) translateX(3px)}.line-menu.end{align-self:flex-end;transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:left;transform-origin:left}.open .line-menu.end{-webkit-transform:rotate(-90deg) translateX(-3px);transform:rotate(-90deg) translateX(-3px)}.btn-toggle{margin-right:5px}.toolbar-spacer{flex:1 1 auto}.right-nav{display:flex}"]
            }] }
];
/** @nocollapse */
NgxTopNavComponent.ctorParameters = () => [
    { type: NgxMaterialDrawerEventEmitter },
    { type: NgxNavService }
];
NgxTopNavComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFRbkYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFN0IsWUFBbUIsc0JBQXFELEVBQVEsVUFBd0I7UUFBckYsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtRQUFRLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBSSxDQUFDOzs7O0lBRTdHLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFRLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVEsRUFBRSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBUSxFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBRTNDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDhoR0FBdUM7O2FBRXhDOzs7O1lBUFEsNkJBQTZCO1lBRDdCLGFBQWE7OztxQkFVbkIsS0FBSzs7OztJQUFOLG9DQUFxQjs7SUFFckIsNENBQXNCOztJQURWLG9EQUE0RDs7SUFBQyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4TmF2U2VydmljZSB9IGZyb20gJy4uL3V0aWxzL25hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxEcmF3ZXJFdmVudEVtaXR0ZXIgfSBmcm9tICcuLi91dGlscy9tYXQtZXZlbnQtZW1pdHRlci5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10b3AtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLW5hdi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUb3BOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtYXRFdmVudEVtaXR0ZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlcixwdWJsaWMgbmF2U2VydmljZTpOZ3hOYXZTZXJ2aWNlKSB7IH1cclxuICBwdWJsaWMgaXNEcmF3ZXJPcGVuZWQ7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vbk5hdlN0YXRlQ2hhbmdlLnN1YnNjcmliZSgoZmxhZzphbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uU2lkZU5hdkNsb3NlZC5zdWJzY3JpYmUoKGZsYWc6YW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vblNpZGVOYXZDbG9zZWQuc3Vic2NyaWJlKChmbGFnOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uSXRlbVNlbGVjdGVkKGl0ZW06IGFueSkge1xyXG4gICAgaWYgKCFpdGVtLmNoaWxkcmVuIHx8ICFpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICBcclxuICAgICAgaWYgKGl0ZW0ub25DbGlja0Nsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5uYXZTZXJ2aWNlLmNsb3NlTmF2KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNpZGVOYXZJdGVtQ2xpY2soaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ==