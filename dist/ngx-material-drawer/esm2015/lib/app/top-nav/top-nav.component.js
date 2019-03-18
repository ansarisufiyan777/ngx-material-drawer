/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
import { trigger, style, animate, transition } from '@angular/animations';
export class NgxTopNavComponent {
    /**
     * @param {?} matEventEmitterService
     * @param {?} navService
     */
    constructor(matEventEmitterService, navService) {
        this.matEventEmitterService = matEventEmitterService;
        this.navService = navService;
        this.searchValue = "hello";
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
    /**
     * @return {?}
     */
    toggleSearchBar() {
        this.isSearchActive = !this.isSearchActive;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSearchValueChange(event) {
        /** @type {?} */
        let searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        this.matEventEmitterService.searchValueChange(searchObject);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSerachFocusIn(event) {
        /** @type {?} */
        let searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        this.matEventEmitterService.serachFocusIn(searchObject);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSerachFocusOut(event) {
        /** @type {?} */
        let searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        this.matEventEmitterService.serachFocusOut(searchObject);
    }
}
NgxTopNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-top-nav',
                template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1 ngx-material-toolbar\"\r\n>\r\n    <ng-container *ngIf=\"!isSearchActive\">\r\n\r\n\r\n\r\n\r\n        <!-- DrawerToggle menu -->\r\n        <button\r\n            class=\"btn-toggle\"\r\n            mat-icon-button\r\n            id=\"menu\"\r\n            (click)=\"navService.toggleNav()\"\r\n        >\r\n            <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n            <div\r\n                class=\"wrapper-menu\"\r\n                [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n            >\r\n                <div class=\"line-menu half start\"></div>\r\n                <div class=\"line-menu\"></div>\r\n                <div class=\"line-menu half end\"></div>\r\n            </div>\r\n        </button>\r\n        <span>\r\n            {{config?.appName ? config.appName : 'Default name'}}\r\n        </span>\r\n        <!-- Right Menu -->\r\n        <span class=\"toolbar-spacer\"></span>\r\n        <div\r\n            class=\"right-nav\"\r\n            [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n        >\r\n            <button\r\n                *ngIf=\"config?.search?.isEnable\"\r\n                mat-button\r\n                mat-icon-button\r\n                (click)=\"toggleSearchBar()\"\r\n            >\r\n                <mat-icon>search</mat-icon>\r\n            </button>\r\n            <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n                <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                    <!-- Handle branch node buttons here -->\r\n                    <span *ngIf=\"item.children && item.children.length > 0\">\r\n                        <button\r\n                            *ngIf=\"item.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-button\r\n                            [matMenuTriggerFor]=\"menu.childMenu\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                            <span>{{item.displayName}}</span>\r\n                        </button>\r\n                        <button\r\n                            *ngIf=\"!item?.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-icon-button\r\n                            [matMenuTriggerFor]=\"menu.childMenu\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                        </button>\r\n                        <app-menu-list-item\r\n                            #menu\r\n                            [menus]=\"item.children\"\r\n                        ></app-menu-list-item>\r\n                    </span>\r\n                    <!-- Leaf node buttons here -->\r\n                    <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                        <button\r\n                            *ngIf=\"item.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-button\r\n                            (click)=\"onItemSelected(item)\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                            <span>{{item.displayName}}</span>\r\n                        </button>\r\n                        <button\r\n                            *ngIf=\"!item?.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-icon-button\r\n                            (click)=\"onItemSelected(item)\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                        </button>\r\n                    </span>\r\n                </span>\r\n            </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"isSearchActive\">\r\n        <div\r\n            class=\"searchBarMain\"\r\n            [ngStyle]=\"config?.search?.style ? config?.search?.style : ''\"\r\n            [@enterAnimation]\r\n        >\r\n            <i\r\n                (click)=\"toggleSearchBar()\"\r\n                class=\"material-icons searchBarSearchIcon\"\r\n            >\r\n                {{config?.search?.backIcon ? config?.search?.backIcon : 'arrow_back'}}\r\n            </i>\r\n            <input\r\n                type=\"text\"\r\n                #ngxSearchBox\r\n                name=\"header-search\"\r\n                [(ngModel)]=\"searchValue\"\r\n                class=\"searchBarInput\"\r\n                (input)=\"onSearchValueChange($event)\"\r\n                (focus)=\"onSerachFocusIn($event)\"\r\n                (focusout)=\"onSerachFocusOut($event)\"\r\n                [placeholder]=\"config?.search?.placeHolder ? config?.search?.placeHolder : 'Search, discover, explore...'\"\r\n            >\r\n            <i\r\n                *ngIf=\"searchValue.length\"\r\n                (click)=\"searchValue = ''\"\r\n                class=\"material-icons clearSearchBarField\"\r\n            >\r\n                {{config?.search?.clearIcon ? config?.search?.clearIcon : 'clear'}}\r\n            </i>\r\n        </div>\r\n    </ng-container>\r\n</mat-toolbar>\r\n",
                animations: [
                    trigger('enterAnimation', [
                        transition(':enter', [
                            style({ transform: 'translateX(100%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'translateX(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                        ])
                    ])
                ],
                styles: [".ngx-material-toolbar .wrapper-menu{width:40px;height:25px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform 330ms ease-out;transition:transform 330ms ease-out,-webkit-transform 330ms ease-out}.ngx-material-toolbar .wrapper-menu.open{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.ngx-material-toolbar .line-menu{background-color:#fff;border-radius:5px;width:100%;height:4px}.ngx-material-toolbar .line-menu.half{width:50%}.ngx-material-toolbar .line-menu.start{transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:right;transform-origin:right}.ngx-material-toolbar .open .line-menu.start{-webkit-transform:rotate(-90deg) translateX(3px);transform:rotate(-90deg) translateX(3px)}.ngx-material-toolbar .line-menu.end{align-self:flex-end;transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transition:transform 330ms cubic-bezier(.54,-.81,.57,.57),-webkit-transform 330ms cubic-bezier(.54,-.81,.57,.57);-webkit-transform-origin:left;transform-origin:left}.ngx-material-toolbar .open .line-menu.end{-webkit-transform:rotate(-90deg) translateX(-3px);transform:rotate(-90deg) translateX(-3px)}.ngx-material-toolbar .btn-toggle{margin-right:5px}.ngx-material-toolbar .toolbar-spacer{flex:1 1 auto}.ngx-material-toolbar .right-nav{display:flex}.ngx-material-toolbar .searchBarMain{background:#fff;width:90%;margin:11px auto 0;height:42px;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.14);position:fixed;left:0;right:0;top:0}.ngx-material-toolbar .searchBarMain i.searchBarSearchIcon{height:100%;line-height:42px;float:left;width:52px;cursor:pointer;text-align:center;color:rgba(68,68,68,.5)}.ngx-material-toolbar .searchBarMain input.searchBarInput{height:42px;padding:0 32px 0 0;margin:0;border:0;box-sizing:border-box;background:0 0;width:calc(100% - 52px);outline:0;font-size:16px;color:rgba(0,0,0,.76);font-weight:400;font-family:Roboto,sans-serif}.ngx-material-toolbar .searchBarMain i.clearSearchBarField{position:absolute;right:12px;top:11px;color:rgba(0,0,0,.84);font-size:20px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
NgxTopNavComponent.ctorParameters = () => [
    { type: NgxMaterialDrawerEventEmitter },
    { type: NgxNavService }
];
NgxTopNavComponent.propDecorators = {
    ngxSearchBox: [{ type: ViewChild, args: ["ngxSearchBox",] }],
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxTopNavComponent.prototype.ngxSearchBox;
    /** @type {?} */
    NgxTopNavComponent.prototype.config;
    /** @type {?} */
    NgxTopNavComponent.prototype.isDrawerOpened;
    /** @type {?} */
    NgxTopNavComponent.prototype.isSearchActive;
    /** @type {?} */
    NgxTopNavComponent.prototype.searchValue;
    /** @type {?} */
    NgxTopNavComponent.prototype.matEventEmitterService;
    /** @type {?} */
    NgxTopNavComponent.prototype.navService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFzQjFFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBRzdCLFlBQW1CLHNCQUFxRCxFQUFTLFVBQXlCO1FBQXZGLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBK0I7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFlO1FBR25HLGdCQUFXLEdBQVcsT0FBTyxDQUFDO0lBSHlFLENBQUM7Ozs7SUFLL0csUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxJQUFTO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRU0sbUJBQW1CLENBQUMsS0FBSzs7WUFDMUIsWUFBWSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDNUI7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsS0FBSzs7WUFDdEIsWUFBWSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDNUI7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsS0FBSzs7WUFDdkIsWUFBWSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDNUI7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGtsTEFBdUM7Z0JBRXZDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQ0wsZ0JBQWdCLEVBQUU7d0JBQ2hCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3BELE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDcEUsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDakQsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ3ZFLENBQUM7cUJBQ0gsQ0FDRjtpQkFDRjs7YUFDRjs7OztZQXRCUSw2QkFBNkI7WUFEN0IsYUFBYTs7OzJCQXlCbkIsU0FBUyxTQUFDLGNBQWM7cUJBQ3hCLEtBQUs7Ozs7SUFETiwwQ0FBb0Q7O0lBQ3BELG9DQUFxQjs7SUFFckIsNENBQXNCOztJQUN0Qiw0Q0FBK0I7O0lBQy9CLHlDQUFxQzs7SUFIekIsb0RBQTREOztJQUFFLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neE5hdlNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9uYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi4vdXRpbHMvbWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdG9wLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvcC1uYXYuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKFxyXG4gICAgICAnZW50ZXJBbmltYXRpb24nLCBbXHJcbiAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJywgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICAgIGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMSB9KSlcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvcGFjaXR5OiAxIH0pLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICAgIF0pXHJcbiAgICAgIF1cclxuICAgIClcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VG9wTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFwibmd4U2VhcmNoQm94XCIpIG5neFNlYXJjaEJveDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBjb25maWc6IGFueTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWF0RXZlbnRFbWl0dGVyU2VydmljZTogTmd4TWF0ZXJpYWxEcmF3ZXJFdmVudEVtaXR0ZXIsIHB1YmxpYyBuYXZTZXJ2aWNlOiBOZ3hOYXZTZXJ2aWNlKSB7IH1cclxuICBwdWJsaWMgaXNEcmF3ZXJPcGVuZWQ7XHJcbiAgcHVibGljIGlzU2VhcmNoQWN0aXZlOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzZWFyY2hWYWx1ZTogc3RyaW5nID0gXCJoZWxsb1wiO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vbk5hdlN0YXRlQ2hhbmdlLnN1YnNjcmliZSgoZmxhZzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vblNpZGVOYXZDbG9zZWQuc3Vic2NyaWJlKChmbGFnOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uU2lkZU5hdkNsb3NlZC5zdWJzY3JpYmUoKGZsYWc6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XHJcbiAgICBpZiAoIWl0ZW0uY2hpbGRyZW4gfHwgIWl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5tZW51SXRlbUNsaWNrKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNlYXJjaEJhcigpIHtcclxuICAgIHRoaXMuaXNTZWFyY2hBY3RpdmUgPSAhdGhpcy5pc1NlYXJjaEFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlYXJjaFZhbHVlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBsZXQgc2VhcmNoT2JqZWN0ID0ge1xyXG4gICAgICB2YWx1ZTogdGhpcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgaW5wdXRSZWY6IHRoaXMubmd4U2VhcmNoQm94XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2VhcmNoVmFsdWVDaGFuZ2Uoc2VhcmNoT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlcmFjaEZvY3VzSW4oZXZlbnQpIHtcclxuICAgIGxldCBzZWFyY2hPYmplY3QgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICBpbnB1dFJlZjogdGhpcy5uZ3hTZWFyY2hCb3hcclxuICAgIH1cclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5zZXJhY2hGb2N1c0luKHNlYXJjaE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZXJhY2hGb2N1c091dChldmVudCkge1xyXG4gICAgbGV0IHNlYXJjaE9iamVjdCA9IHtcclxuICAgICAgdmFsdWU6IHRoaXMuc2VhcmNoVmFsdWUsXHJcbiAgICAgIGlucHV0UmVmOiB0aGlzLm5neFNlYXJjaEJveFxyXG4gICAgfVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNlcmFjaEZvY3VzT3V0KHNlYXJjaE9iamVjdCk7XHJcbiAgfVxyXG59Il19