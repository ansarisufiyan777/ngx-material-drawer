/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export class NgxFabComponent {
    /**
     * @param {?} navService
     * @param {?} matEventEmitterService
     */
    constructor(navService, matEventEmitterService) {
        this.navService = navService;
        this.matEventEmitterService = matEventEmitterService;
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onFabClick(item) {
        this.matEventEmitterService.fabButtonClick(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onMainFabClick(item) {
        this.expanded = !this.expanded;
        if (this.fabData &&
            this.fabData.children &&
            this.fabData.children.length &&
            this.fabData.children.filter((/**
             * @param {?} f
             * @return {?}
             */
            f => f.isEnable)).length) {
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
    }
}
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
NgxFabComponent.ctorParameters = () => [
    { type: NgxNavService },
    { type: NgxMaterialDrawerEventEmitter }
];
NgxFabComponent.propDecorators = {
    fabData: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1kcmF3ZXIvIiwic291cmNlcyI6WyJsaWIvYXBwL2ZhYi9mYWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWtCbkYsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBR3hCLFlBQW1CLFVBQXlCLEVBQ2pDLHNCQUFxRDtRQUQ3QyxlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ2pDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBK0I7UUFIekQsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUtqQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVM7UUFDaEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFTO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU87WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQzs7O1lBOUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsb2dDQUFtQztnQkFFbkMsVUFBVSxFQUFFO29CQUNSLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2pCLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzRCQUN4QyxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7eUJBQ25FLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDakIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO3lCQUNyRSxDQUFDO3FCQUNMLENBQUM7aUJBQ0w7O2FBQ0o7Ozs7WUFwQlEsYUFBYTtZQUdiLDZCQUE2Qjs7O3NCQW9CakMsS0FBSzs7OztJQUROLG1DQUFpQzs7SUFDakMsa0NBQXNCOztJQUNWLHFDQUFnQzs7SUFDeEMsaURBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neE5hdlNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9uYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi4vdXRpbHMvbWF0LWV2ZW50LWVtaXR0ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGliLWZhYicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmFiLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ZhYi5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ3NsaWRlSW5PdXQnLCBbXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSkpXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZmFiRGF0YTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hdlNlcnZpY2U6IE5neE5hdlNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIG1hdEV2ZW50RW1pdHRlclNlcnZpY2U6IE5neE1hdGVyaWFsRHJhd2VyRXZlbnRFbWl0dGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkZhYkNsaWNrKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5mYWJCdXR0b25DbGljayhpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1haW5GYWJDbGljayhpdGVtOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFiRGF0YSAmJlxyXG4gICAgICAgICAgICB0aGlzLmZhYkRhdGEuY2hpbGRyZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5mYWJEYXRhLmNoaWxkcmVuLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICB0aGlzLmZhYkRhdGEuY2hpbGRyZW4uZmlsdGVyKGYgPT4gZi5pc0VuYWJsZSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2UuZmFiRXhwYW5kZWQoaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdEV2ZW50RW1pdHRlclNlcnZpY2UuZmFiQ29sbGFwc2VkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRFdmVudEVtaXR0ZXJTZXJ2aWNlLm1haW5GYWJCdXR0b25DbGljayhpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19