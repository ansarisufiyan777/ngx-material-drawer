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
            this.matEventEmitterService.menuItemClick(item);
        }
    }
}
NgxTopNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-top-nav',
                template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1\"\r\n>\r\n    <button\r\n        class=\"btn-toggle\"\r\n        mat-icon-button\r\n        id=\"menu\"\r\n        (click)=\"navService.toggleNav()\"\r\n    >\r\n        <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n        <div\r\n            class=\"wrapper-menu\"\r\n            [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n        >\r\n            <div class=\"line-menu half start\"></div>\r\n            <div class=\"line-menu\"></div>\r\n            <div class=\"line-menu half end\"></div>\r\n        </div>\r\n    </button>\r\n    <span>\r\n        {{config?.appName ? config.appName : 'Default name'}}\r\n    </span>\r\n\r\n\r\n    <!-- Right Menu -->\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <div\r\n        class=\"right-nav\"\r\n        [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n    >\r\n        <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n            <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                <!-- Handle branch node buttons here -->\r\n                <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"item.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                        <span>{{item.displayName}}</span>\r\n                    </button>\r\n\r\n\r\n                    <button\r\n                        *ngIf=\"!item?.displayName?.trim()\"\r\n                        [ngStyle]=\"item?.style? item.style : ''\"\r\n                        mat-icon-button\r\n                        [matMenuTriggerFor]=\"menu.childMenu\"\r\n                        [disabled]=\"item.disabled\"\r\n                    >\r\n                        <mat-icon>{{item.iconName}}</mat-icon>\r\n                    </button>\r\n\r\n\r\n\r\n                    <app-menu-list-item\r\n                        #menu\r\n                        [menus]=\"item.children\"\r\n                    ></app-menu-list-item>\r\n                </span>\r\n                <!-- Leaf node buttons here -->\r\n                <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                    <button\r\n                    *ngIf=\"item.displayName?.trim()\"\r\n                    [ngStyle]=\"item?.style? item.style : ''\"\r\n                    mat-button\r\n                    (click)=\"onItemSelected(item)\"\r\n                    [disabled]=\"item.disabled\"\r\n                >\r\n                    <mat-icon>{{item.iconName}}</mat-icon>\r\n                    <span>{{item.displayName}}</span>\r\n                </button>\r\n\r\n\r\n                <button\r\n                    *ngIf=\"!item?.displayName?.trim()\"\r\n                    [ngStyle]=\"item?.style? item.style : ''\"\r\n                    mat-icon-button\r\n                    (click)=\"onItemSelected(item)\"\r\n                    [disabled]=\"item.disabled\"\r\n                >\r\n                    <mat-icon>{{item.iconName}}</mat-icon>\r\n                </button>\r\n                </span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</mat-toolbar>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFRbkYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFN0IsWUFBbUIsc0JBQXFELEVBQVEsVUFBd0I7UUFBckYsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtRQUFRLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBSSxDQUFDOzs7O0lBRTdHLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFRLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVEsRUFBRSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBUSxFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix3K0dBQXVDOzthQUV4Qzs7OztZQVBRLDZCQUE2QjtZQUQ3QixhQUFhOzs7cUJBVW5CLEtBQUs7Ozs7SUFBTixvQ0FBcUI7O0lBRXJCLDRDQUFzQjs7SUFEVixvREFBNEQ7O0lBQUMsd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neE5hdlNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9uYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi4vdXRpbHMvbWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdG9wLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvcC1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VG9wTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb25maWc6IGFueTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWF0RXZlbnRFbWl0dGVyU2VydmljZTogTmd4TWF0ZXJpYWxEcmF3ZXJFdmVudEVtaXR0ZXIscHVibGljIG5hdlNlcnZpY2U6Tmd4TmF2U2VydmljZSkgeyB9XHJcbiAgcHVibGljIGlzRHJhd2VyT3BlbmVkO1xyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uub25OYXZTdGF0ZUNoYW5nZS5zdWJzY3JpYmUoKGZsYWc6YW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vblNpZGVOYXZDbG9zZWQuc3Vic2NyaWJlKChmbGFnOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uub25TaWRlTmF2Q2xvc2VkLnN1YnNjcmliZSgoZmxhZzphbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gIH1cclxuICBvbkl0ZW1TZWxlY3RlZChpdGVtOiBhbnkpIHtcclxuICAgIGlmICghaXRlbS5jaGlsZHJlbiB8fCAhaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm1lbnVJdGVtQ2xpY2soaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ==