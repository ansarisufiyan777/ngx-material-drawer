/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
var NgxFabComponent = /** @class */ (function () {
    function NgxFabComponent(navService, matEventEmitterService) {
        this.navService = navService;
        this.matEventEmitterService = matEventEmitterService;
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    NgxFabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxFabComponent.prototype.onFabClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.matEventEmitterService.fabButtonClick(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxFabComponent.prototype.onMainFabClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.expanded = !this.expanded;
        if (this.fabData &&
            this.fabData.children &&
            this.fabData.children.length &&
            this.fabData.children.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.isEnable; })).length) {
            if (this.expanded) {
                this.matEventEmitterService.fabExpanded(item);
            }
            else {
                this.matEventEmitterService.fabCollapsed(item);
            }
        }
        else {
            this.matEventEmitterService.mainFabButtonClick(item);
        }
    };
    NgxFabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-fab',
                    template: "<div\r\n    class=\"ngx-material-fab\"\r\n    *ngIf=\"fabData?.isEnable\"\r\n>\r\n    <div\r\n        class=\"ngx-material-mini-fab\"\r\n        *ngIf=\"expanded\"\r\n        [@slideInOut]\r\n    >\r\n        <ng-container *ngFor=\"let item of fabData?.children\">\r\n            <button\r\n                *ngIf=\"item?.isEnable\"\r\n                [ngStyle]=\"item?.style? item?.style : ''\"\r\n                mat-mini-fab\r\n                [matTooltip]=\"item?.tooltip\"\r\n                class=\"mini-fab\"\r\n                (click)=\"onFabClick(item)\"\r\n            >\r\n                <mat-icon>{{item?.icon}}</mat-icon>\r\n            </button>\r\n        </ng-container>\r\n    </div>\r\n    <button\r\n        mat-fab\r\n        [matTooltip]=\"fabData?.tooltip\"\r\n        *ngIf=\"fabData?.isEnable\"\r\n        [ngStyle]=\"fabData?.style? fabData?.style : ''\"\r\n        (click)=\"onMainFabClick(fabData)\"\r\n    >\r\n        <mat-icon>{{fabData?.icon}}</mat-icon>\r\n    </button>\r\n</div>\r\n",
                    animations: [
                        trigger('slideInOut', [
                            transition(':enter', [
                                style({ transform: 'translateY(100%)' }),
                                animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
                            ]),
                            transition(':leave', [
                                animate('200ms ease-in', style({ transform: 'translateY(100%)' }))
                            ])
                        ])
                    ],
                    styles: [".ngx-material-fab{position:fixed;z-index:5;right:25px;bottom:25px}.ngx-material-fab .ngx-material-mini-fab{position:absolute;left:0;bottom:55px;padding:10px}.ngx-material-fab .ngx-material-mini-fab .mini-fab{margin-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    NgxFabComponent.ctorParameters = function () { return [
        { type: NgxNavService },
        { type: NgxMaterialDrawerEventEmitter }
    ]; };
    NgxFabComponent.propDecorators = {
        fabData: [{ type: Input }]
    };
    return NgxFabComponent;
}());
export { NgxFabComponent };
if (false) {
    /** @type {?} */
    NgxFabComponent.prototype.expanded;
    /** @type {?} */
    NgxFabComponent.prototype.fabData;
    /** @type {?} */
    NgxFabComponent.prototype.navService;
    /** @type {?} */
    NgxFabComponent.prototype.matEventEmitterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1kcmF3ZXIvIiwic291cmNlcyI6WyJsaWIvYXBwL2ZhYi9mYWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRjtJQW1CSSx5QkFBbUIsVUFBeUIsRUFDakMsc0JBQXFEO1FBRDdDLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDakMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtRQUh6RCxhQUFRLEdBQVksS0FBSyxDQUFDO0lBS2pDLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxJQUFTO1FBQ2hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsSUFBUztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBVixDQUFVLEVBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakQ7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsRDtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDOztnQkE5Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixvZ0NBQW1DO29CQUVuQyxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDakIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Z0NBQ3hDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzs2QkFDbkUsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNqQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7NkJBQ3JFLENBQUM7eUJBQ0wsQ0FBQztxQkFDTDs7aUJBQ0o7Ozs7Z0JBcEJRLGFBQWE7Z0JBR2IsNkJBQTZCOzs7MEJBb0JqQyxLQUFLOztJQTZCVixzQkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0JZLGVBQWU7OztJQUN4QixtQ0FBaUM7O0lBQ2pDLGtDQUFzQjs7SUFDVixxQ0FBZ0M7O0lBQ3hDLGlEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hOYXZTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTWF0TWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlciB9IGZyb20gJy4uL3V0aWxzL21hdC1ldmVudC1lbWl0dGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpYi1mYWInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZhYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mYWIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdzbGlkZUluT3V0JywgW1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH0pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0pKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSlcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEZhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGZhYkRhdGE6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZTZXJ2aWNlOiBOZ3hOYXZTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBtYXRFdmVudEVtaXR0ZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25GYWJDbGljayhpdGVtOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2UuZmFiQnV0dG9uQ2xpY2soaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYWluRmFiQ2xpY2soaXRlbTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gICAgICAgIGlmICh0aGlzLmZhYkRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5mYWJEYXRhLmNoaWxkcmVuICYmXHJcbiAgICAgICAgICAgIHRoaXMuZmFiRGF0YS5jaGlsZHJlbi5sZW5ndGggJiZcclxuICAgICAgICAgICAgdGhpcy5mYWJEYXRhLmNoaWxkcmVuLmZpbHRlcihmID0+IGYuaXNFbmFibGUpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLmZhYkV4cGFuZGVkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLmZhYkNvbGxhcHNlZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5tYWluRmFiQnV0dG9uQ2xpY2soaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==