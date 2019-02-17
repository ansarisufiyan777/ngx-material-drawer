/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';
export class TopNavComponent {
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
TopNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-top-nav',
                template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1\"\r\n>\r\n    <button\r\n        class=\"btn-toggle\"\r\n        mat-icon-button\r\n        id=\"menu\"\r\n        (click)=\"navService.toggleNav()\"\r\n    >\r\n        <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n        <div\r\n            class=\"wrapper-menu\"\r\n            [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n        >\r\n            <div class=\"line-menu half start\"></div>\r\n            <div class=\"line-menu\"></div>\r\n            <div class=\"line-menu half end\"></div>\r\n        </div>\r\n    </button>\r\n    <span>\r\n        {{config?.appName ? config.appName : 'Default name'}}\r\n    </span>\r\n\r\n\r\n    <!-- Right Menu -->\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <div\r\n        class=\"right-nav\"\r\n        [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n    >\r\n        <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n            <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                <!-- Handle branch node buttons here -->\r\n                <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"item.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"!item?.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-icon-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                    </button>\r\n\r\n\r\n\r\n                    <app-menu-list-item\r\n                        #menu\r\n                        [menus]=\"item.children\"\r\n                    ></app-menu-list-item>\r\n                </span>\r\n                <!-- Leaf node buttons here -->\r\n                <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                    <button\r\n                        [ngStyle]=\"item.style? item.style : ''\"\r\n                        mat-button\r\n                        color=\"primary\"\r\n                        (click)=\"onItemSelected(item)\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n                </span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</mat-toolbar>\r\n",
                styles: [".wrapper-menu{width:40px;height:25px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform 330ms ease-out;transition:transform 330ms ease-out,-webkit-transform 330ms ease-out}.wrapper-menu.open{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.line-menu{background-color:#fff;border-radius:5px;width:100%;height:4px}.line-menu.half{width:50%}.line-menu.start{transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:right;transform-origin:right}.open .line-menu.start{-webkit-transform:rotate(-90deg) translateX(3px);transform:rotate(-90deg) translateX(3px)}.line-menu.end{align-self:flex-end;transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:left;transform-origin:left}.open .line-menu.end{-webkit-transform:rotate(-90deg) translateX(-3px);transform:rotate(-90deg) translateX(-3px)}.btn-toggle{margin-right:5px}.toolbar-spacer{flex:1 1 auto}.right-nav{display:flex}"]
            }] }
];
/** @nocollapse */
TopNavComponent.ctorParameters = () => [
    { type: MatEventEmitterService },
    { type: NavService }
];
TopNavComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFRNUUsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRTFCLFlBQW1CLHNCQUE4QyxFQUFRLFVBQXFCO1FBQTNFLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO0lBQUksQ0FBQzs7OztJQUVuRyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBUSxFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFRLEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVEsRUFBRSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBQ0QsY0FBYyxDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUUzQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw4aEdBQXVDOzthQUV4Qzs7OztZQVBRLHNCQUFzQjtZQUR0QixVQUFVOzs7cUJBVWhCLEtBQUs7Ozs7SUFBTixpQ0FBcUI7O0lBRXJCLHlDQUFzQjs7SUFEVixpREFBcUQ7O0lBQUMscUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdlNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9uYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEV2ZW50RW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9tYXQtZXZlbnQtZW1pdHRlci5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10b3AtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLW5hdi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3BOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtYXRFdmVudEVtaXR0ZXJTZXJ2aWNlOiBNYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLHB1YmxpYyBuYXZTZXJ2aWNlOk5hdlNlcnZpY2UpIHsgfVxyXG4gIHB1YmxpYyBpc0RyYXdlck9wZW5lZDtcclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uTmF2U3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKChmbGFnOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uub25TaWRlTmF2Q2xvc2VkLnN1YnNjcmliZSgoZmxhZzphbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uU2lkZU5hdkNsb3NlZC5zdWJzY3JpYmUoKGZsYWc6YW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICB9XHJcbiAgb25JdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XHJcbiAgICBpZiAoIWl0ZW0uY2hpbGRyZW4gfHwgIWl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoaXRlbS5vbkNsaWNrQ2xvc2UpIHtcclxuICAgICAgICB0aGlzLm5hdlNlcnZpY2UuY2xvc2VOYXYoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2lkZU5hdkl0ZW1DbGljayhpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19