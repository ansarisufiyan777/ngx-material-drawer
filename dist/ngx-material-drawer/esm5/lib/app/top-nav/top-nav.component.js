/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
import { trigger, style, animate, transition } from '@angular/animations';
var NgxTopNavComponent = /** @class */ (function () {
    function NgxTopNavComponent(matEventEmitterService, navService) {
        this.matEventEmitterService = matEventEmitterService;
        this.navService = navService;
        this.searchValue = "";
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
    /**
     * @return {?}
     */
    NgxTopNavComponent.prototype.toggleSearchBar = /**
     * @return {?}
     */
    function () {
        this.isSearchActive = !this.isSearchActive;
        /** @type {?} */
        var searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        if (this.isSearchActive) {
            this.matEventEmitterService.serachInputOpen(searchObject);
        }
        else {
            this.matEventEmitterService.serachInputClosed(searchObject);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxTopNavComponent.prototype.onSearchValueChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        this.matEventEmitterService.searchValueChange(searchObject);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxTopNavComponent.prototype.onSerachFocusIn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        this.matEventEmitterService.serachFocusIn(searchObject);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxTopNavComponent.prototype.onSerachFocusOut = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var searchObject = {
            value: this.searchValue,
            inputRef: this.ngxSearchBox
        };
        this.matEventEmitterService.serachFocusOut(searchObject);
    };
    NgxTopNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-top-nav',
                    template: "<mat-toolbar\r\n    color=\"primary\"\r\n    class=\"mat-elevation-z1 ngx-material-toolbar\"\r\n>\r\n    <ng-container *ngIf=\"!isSearchActive\">\r\n        <!-- DrawerToggle menu -->\r\n        <button\r\n            class=\"btn-toggle\"\r\n            mat-icon-button\r\n            id=\"menu\"\r\n            (click)=\"navService.toggleNav()\"\r\n        >\r\n            <!-- <mat-icon>{{config?.toggleIcon ? config.toggleIcon : 'menu'}}</mat-icon> -->\r\n            <div\r\n                class=\"wrapper-menu\"\r\n                *ngIf=\"!config?.toggleIcon\"\r\n                [ngClass]=\"isDrawerOpened ? 'open' : 'close'\"\r\n            >\r\n                <div class=\"line-menu half start\"></div>\r\n                <div class=\"line-menu\"></div>\r\n                <div class=\"line-menu half end\"></div>\r\n            </div>\r\n            <ng-container *ngIf=\"config?.toggleIcon\">\r\n                <mat-icon>{{!isDrawerOpened ? config.toggleIcon : config?.closedToggleIcon ? config?.closedToggleIcon : 'close'}}</mat-icon>\r\n            </ng-container>\r\n            \r\n        </button>\r\n        <span>\r\n            {{config?.appName ? config.appName : 'Default name'}}\r\n        </span>\r\n        <!-- Right Menu -->\r\n        <span class=\"toolbar-spacer\"></span>\r\n        <div\r\n            class=\"right-nav\"\r\n            [ngStyle]=\"config?.rightMenus?.style? config?.rightMenus.style : ''\"\r\n        >\r\n            <button\r\n                *ngIf=\"config?.search?.isEnable\"\r\n                mat-button\r\n                mat-icon-button\r\n                (click)=\"toggleSearchBar()\"\r\n            >\r\n                <mat-icon>search</mat-icon>\r\n            </button>\r\n            <ng-container *ngIf=\"config?.rightMenus?.data\">\r\n                <span *ngFor=\"let item of config?.rightMenus?.data\">\r\n                    <!-- Handle branch node buttons here -->\r\n                    <span *ngIf=\"item.children && item.children.length > 0\">\r\n                        <button\r\n                            *ngIf=\"item.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-button\r\n                            [matMenuTriggerFor]=\"menu.childMenu\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                            <span>{{item.displayName}}</span>\r\n                        </button>\r\n                        <button\r\n                            *ngIf=\"!item?.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-icon-button\r\n                            [matMenuTriggerFor]=\"menu.childMenu\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                        </button>\r\n                        <lib-menu-list-item\r\n                            #menu\r\n                            [menus]=\"item.children\"\r\n                        ></lib-menu-list-item>\r\n                    </span>\r\n                    <!-- Leaf node buttons here -->\r\n                    <span *ngIf=\"!item.children || item.children.length === 0\">\r\n                        <button\r\n                            *ngIf=\"item.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-button\r\n                            (click)=\"onItemSelected(item)\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                            <span>{{item.displayName}}</span>\r\n                        </button>\r\n                        <button\r\n                            *ngIf=\"!item?.displayName?.trim()\"\r\n                            [ngStyle]=\"item?.style? item.style : ''\"\r\n                            mat-icon-button\r\n                            (click)=\"onItemSelected(item)\"\r\n                            [disabled]=\"item.disabled\"\r\n                        >\r\n                            <mat-icon>{{item.iconName}}</mat-icon>\r\n                        </button>\r\n                    </span>\r\n                </span>\r\n            </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"isSearchActive\">\r\n        <div\r\n            class=\"searchBarMain\"\r\n            [ngStyle]=\"config?.search?.style ? config?.search?.style : ''\"\r\n            [@enterAnimation]\r\n        >\r\n            <i\r\n                (click)=\"toggleSearchBar()\"\r\n                class=\"material-icons searchBarSearchIcon\"\r\n            >\r\n                {{config?.search?.backIcon ? config?.search?.backIcon : 'arrow_back'}}\r\n            </i>\r\n            <input\r\n                type=\"text\"\r\n                #ngxSearchBox\r\n                name=\"header-search\"\r\n                [(ngModel)]=\"searchValue\"\r\n                class=\"searchBarInput\"\r\n                (input)=\"onSearchValueChange($event)\"\r\n                (focus)=\"onSerachFocusIn($event)\"\r\n                (focusout)=\"onSerachFocusOut($event)\"\r\n                [placeholder]=\"config?.search?.placeHolder ? config?.search?.placeHolder : 'Search, discover, explore...'\"\r\n            >\r\n            <i\r\n                *ngIf=\"searchValue.length\"\r\n                (click)=\"searchValue = ''\"\r\n                class=\"material-icons clearSearchBarField\"\r\n            >\r\n                {{config?.search?.clearIcon ? config?.search?.clearIcon : 'clear'}}\r\n            </i>\r\n        </div>\r\n    </ng-container>\r\n</mat-toolbar>\r\n",
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
                    styles: [".ngx-material-toolbar .wrapper-menu{width:40px;height:25px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform 330ms ease-out}.ngx-material-toolbar .wrapper-menu.open{transform:rotate(-45deg)}.ngx-material-toolbar .line-menu{background-color:#fff;border-radius:5px;width:100%;height:4px}.ngx-material-toolbar .line-menu.half{width:50%}.ngx-material-toolbar .line-menu.start{transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transform-origin:right}.ngx-material-toolbar .open .line-menu.start{transform:rotate(-90deg) translateX(3px)}.ngx-material-toolbar .line-menu.end{align-self:flex-end;transition:transform 330ms cubic-bezier(.54,-.81,.57,.57);transform-origin:left}.ngx-material-toolbar .open .line-menu.end{transform:rotate(-90deg) translateX(-3px)}.ngx-material-toolbar .btn-toggle{margin-right:5px}.ngx-material-toolbar .toolbar-spacer{flex:1 1 auto}.ngx-material-toolbar .right-nav{display:flex}.ngx-material-toolbar .searchBarMain{background:#fff;width:90%;margin:11px auto 0;height:42px;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.14);position:fixed;left:0;right:0;top:0}.ngx-material-toolbar .searchBarMain i.searchBarSearchIcon{height:100%;line-height:42px;float:left;width:52px;cursor:pointer;text-align:center;color:rgba(68,68,68,.5)}.ngx-material-toolbar .searchBarMain input.searchBarInput{height:42px;padding:0 32px 0 0;margin:0;border:0;box-sizing:border-box;background:0 0;width:calc(100% - 52px);outline:0;font-size:16px;color:rgba(0,0,0,.76);font-weight:400;font-family:Roboto,sans-serif}.ngx-material-toolbar .searchBarMain i.clearSearchBarField{position:absolute;right:12px;top:11px;color:rgba(0,0,0,.84);font-size:20px;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    NgxTopNavComponent.ctorParameters = function () { return [
        { type: NgxMaterialDrawerEventEmitter },
        { type: NgxNavService }
    ]; };
    NgxTopNavComponent.propDecorators = {
        ngxSearchBox: [{ type: ViewChild, args: ["ngxSearchBox", { static: false },] }],
        config: [{ type: Input }]
    };
    return NgxTopNavComponent;
}());
export { NgxTopNavComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHMUU7SUFzQkUsNEJBQW1CLHNCQUFxRCxFQUFTLFVBQXlCO1FBQXZGLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBK0I7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFlO1FBR25HLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBSDhFLENBQUM7Ozs7SUFLL0cscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVM7WUFDL0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFTO1lBQzlELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUMs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MENBQW9FOztJQUNwRSxvQ0FBcUI7O0lBRXJCLDRDQUFzQjs7SUFDdEIsNENBQStCOztJQUMvQix5Q0FBZ0M7O0lBSHBCLG9EQUE0RDs7SUFBRSx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hOYXZTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlciB9IGZyb20gJy4uL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXRvcC1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b3AtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b3AtbmF2LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcihcclxuICAgICAgJ2VudGVyQW5pbWF0aW9uJywgW1xyXG4gICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDEgfSkpXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMSB9KSxcclxuICAgICAgICAgIGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJywgb3BhY2l0eTogMCB9KSlcclxuICAgICAgICBdKVxyXG4gICAgICBdXHJcbiAgICApXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFRvcE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChcIm5neFNlYXJjaEJveFwiLHtzdGF0aWM6IGZhbHNlfSkgbmd4U2VhcmNoQm94OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtYXRFdmVudEVtaXR0ZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlciwgcHVibGljIG5hdlNlcnZpY2U6IE5neE5hdlNlcnZpY2UpIHsgfVxyXG4gIHB1YmxpYyBpc0RyYXdlck9wZW5lZDtcclxuICBwdWJsaWMgaXNTZWFyY2hBY3RpdmU6IGJvb2xlYW47XHJcbiAgcHVibGljIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vbk5hdlN0YXRlQ2hhbmdlLnN1YnNjcmliZSgoZmxhZzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuZWQgPSBmbGFnLmlzT3BlbmVkO1xyXG4gICAgfSlcclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vblNpZGVOYXZDbG9zZWQuc3Vic2NyaWJlKChmbGFnOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5pc0RyYXdlck9wZW5lZCA9IGZsYWcuaXNPcGVuZWQ7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm9uU2lkZU5hdkNsb3NlZC5zdWJzY3JpYmUoKGZsYWc6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlzRHJhd2VyT3BlbmVkID0gZmxhZy5pc09wZW5lZDtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XHJcbiAgICBpZiAoIWl0ZW0uY2hpbGRyZW4gfHwgIWl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5tZW51SXRlbUNsaWNrKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNlYXJjaEJhcigpIHtcclxuICAgIHRoaXMuaXNTZWFyY2hBY3RpdmUgPSAhdGhpcy5pc1NlYXJjaEFjdGl2ZTtcclxuICAgIGxldCBzZWFyY2hPYmplY3QgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICBpbnB1dFJlZjogdGhpcy5uZ3hTZWFyY2hCb3hcclxuICAgIH1cclxuICAgIGlmKHRoaXMuaXNTZWFyY2hBY3RpdmUpe1xyXG4gICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2VyYWNoSW5wdXRPcGVuKHNlYXJjaE9iamVjdClcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2VyYWNoSW5wdXRDbG9zZWQoc2VhcmNoT2JqZWN0KVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlYXJjaFZhbHVlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBsZXQgc2VhcmNoT2JqZWN0ID0ge1xyXG4gICAgICB2YWx1ZTogdGhpcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgaW5wdXRSZWY6IHRoaXMubmd4U2VhcmNoQm94XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2Uuc2VhcmNoVmFsdWVDaGFuZ2Uoc2VhcmNoT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlcmFjaEZvY3VzSW4oZXZlbnQpIHtcclxuICAgIGxldCBzZWFyY2hPYmplY3QgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICBpbnB1dFJlZjogdGhpcy5uZ3hTZWFyY2hCb3hcclxuICAgIH1cclxuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5zZXJhY2hGb2N1c0luKHNlYXJjaE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZXJhY2hGb2N1c091dChldmVudCkge1xyXG4gICAgbGV0IHNlYXJjaE9iamVjdCA9IHtcclxuICAgICAgdmFsdWU6IHRoaXMuc2VhcmNoVmFsdWUsXHJcbiAgICAgIGlucHV0UmVmOiB0aGlzLm5neFNlYXJjaEJveFxyXG4gICAgfVxyXG4gICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLnNlcmFjaEZvY3VzT3V0KHNlYXJjaE9iamVjdCk7XHJcbiAgfVxyXG59Il19