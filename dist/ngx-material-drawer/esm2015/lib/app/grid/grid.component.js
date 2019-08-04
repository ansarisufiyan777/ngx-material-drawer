/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BreakpointObserverService, POINTS_NAME } from '../utils/breakpoint-observer.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export class NgxGridComponent {
    /**
     * @param {?} _breakpointObserverService
     * @param {?} matEventEmitterService
     */
    constructor(_breakpointObserverService, matEventEmitterService) {
        this._breakpointObserverService = _breakpointObserverService;
        this.matEventEmitterService = matEventEmitterService;
        this.onGridDataChange = new EventEmitter();
        this.matEventEmitterService.onGridDataChange.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event) {
                this.refreshGrid(event['grids'], this.size);
            }
            else if (this.inputData['grid']) {
                this.gridData = this.inputData.grid;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.inputData && typeof this.inputData == 'object') {
            if (this.inputData['grids']) {
                this.registerBreakPoints(this.inputData['grids']);
            }
            else if (this.inputData['grid']) {
                this.gridData = this.inputData.grid;
            }
        }
    }
    /**
     * @param {?} grids
     * @return {?}
     */
    registerBreakPoints(grids) {
        this.size$ = this._breakpointObserverService.size$;
        this.size$.subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.size = size;
            this.refreshGrid(grids, size);
        }));
    }
    /**
     * @param {?} grids
     * @param {?} size
     * @return {?}
     */
    refreshGrid(grids, size) {
        if (grids[size] && grids[size]['grid']) {
            this.gridData = grids[size]['grid'];
        }
        else {
            /** @type {?} */
            let gData;
            /** @type {?} */
            let index = POINTS_NAME.indexOf(size);
            while (!gData && index > 0) {
                index--;
                gData = grids[POINTS_NAME[index]] && grids[POINTS_NAME[index]]['grid'];
            }
            index = POINTS_NAME.indexOf(size);
            while (!gData && index < (POINTS_NAME.length - 1)) {
                index++;
                gData = grids[POINTS_NAME[index]] && grids[POINTS_NAME[index]]['grid'];
            }
            this.gridData = gData || [];
        }
    }
    /**
     * @param {?} card
     * @return {?}
     */
    getExtendedData(card) {
        /** @type {?} */
        let compDetail = this.componentInstance[card.component];
        /** @type {?} */
        let detail = Object.assign({}, card, compDetail);
        return detail;
    }
}
NgxGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-material-grid',
                template: "<div class=\"grid-container\">\n    <mat-grid-list\n        [cols]=\"gridData?.cols || inputData?.cols || 4\"\n        [rowHeight]=\"gridData?.rowHeight || inputData?.rowHeight || '200px'\"\n        [gutterSize]=\"gridData?.gutterSize || inputData?.gutterSize || '0px'\"\n    >\n        <mat-grid-tile\n            *ngFor=\"let card of gridData\"\n            [colspan]=\"card.cols\"\n            [rowspan]=\"card.rows\"\n        >\n            <lib-card-holder [cardData]='getExtendedData(card)'></lib-card-holder>\n        </mat-grid-tile>\n    </mat-grid-list>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxGridComponent.ctorParameters = () => [
    { type: BreakpointObserverService },
    { type: NgxMaterialDrawerEventEmitter }
];
NgxGridComponent.propDecorators = {
    inputData: [{ type: Input, args: ['gridData',] }],
    componentInstance: [{ type: Input, args: ['componentInstance',] }],
    onGridDataChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxGridComponent.prototype.inputData;
    /** @type {?} */
    NgxGridComponent.prototype.componentInstance;
    /** @type {?} */
    NgxGridComponent.prototype.onGridDataChange;
    /** @type {?} */
    NgxGridComponent.prototype.gridData;
    /** @type {?} */
    NgxGridComponent.prototype.size;
    /** @type {?} */
    NgxGridComponent.prototype.size$;
    /**
     * @type {?}
     * @private
     */
    NgxGridComponent.prototype._breakpointObserverService;
    /** @type {?} */
    NgxGridComponent.prototype.matEventEmitterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZHJhd2VyLyIsInNvdXJjZXMiOlsibGliL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBMEQsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPbkYsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFPM0IsWUFBb0IsMEJBQXFELEVBQVMsc0JBQXFEO1FBQW5ILCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBMkI7UUFBUywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQStCO1FBSnRILHFCQUFnQixHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7UUFLMUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQy9ELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUMzQztpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDckM7UUFDSCxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2FBQ2xEO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ3JCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUFNOztnQkFDRCxLQUFLOztnQkFDTCxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDckMsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUN2RTtZQUNELEtBQUssR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakQsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDdkU7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFTOztZQUNuQixVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O1lBQ25ELE1BQU0scUJBQVEsSUFBSSxFQUFLLFVBQVUsQ0FBRTtRQUN2QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHlrQkFBb0M7O2FBRXJDOzs7O1lBUlEseUJBQXlCO1lBRXpCLDZCQUE2Qjs7O3dCQVFuQyxLQUFLLFNBQUMsVUFBVTtnQ0FDaEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsTUFBTTs7OztJQUZQLHFDQUE2Qjs7SUFDN0IsNkNBQThDOztJQUM5Qyw0Q0FBNEQ7O0lBQzVELG9DQUFnQjs7SUFDaEIsZ0NBQVk7O0lBQ1osaUNBQWlDOzs7OztJQUNyQixzREFBNkQ7O0lBQUUsa0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyU2VydmljZSwgUE9JTlRTX05BTUUgfSBmcm9tICcuLi91dGlscy9icmVha3BvaW50LW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxEcmF3ZXJFdmVudEVtaXR0ZXIgfSBmcm9tICcuLi91dGlscy9tYXQtZXZlbnQtZW1pdHRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyaWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdncmlkRGF0YScpIGlucHV0RGF0YTtcbiAgQElucHV0KCdjb21wb25lbnRJbnN0YW5jZScpIGNvbXBvbmVudEluc3RhbmNlO1xuICBAT3V0cHV0KCkgcHVibGljIG9uR3JpZERhdGFDaGFuZ2U6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGdyaWREYXRhO1xuICBwdWJsaWMgc2l6ZTtcbiAgcHVibGljIHNpemUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JyZWFrcG9pbnRPYnNlcnZlclNlcnZpY2U6IEJyZWFrcG9pbnRPYnNlcnZlclNlcnZpY2UsIHB1YmxpYyBtYXRFdmVudEVtaXR0ZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbERyYXdlckV2ZW50RW1pdHRlcikge1xuICAgIHRoaXMubWF0RXZlbnRFbWl0dGVyU2VydmljZS5vbkdyaWREYXRhQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hHcmlkKGV2ZW50WydncmlkcyddLHRoaXMuc2l6ZSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dERhdGFbJ2dyaWQnXSkge1xuICAgICAgICB0aGlzLmdyaWREYXRhID0gdGhpcy5pbnB1dERhdGEuZ3JpZDtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXREYXRhICYmIHR5cGVvZiB0aGlzLmlucHV0RGF0YSA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHRoaXMuaW5wdXREYXRhWydncmlkcyddKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCcmVha1BvaW50cyh0aGlzLmlucHV0RGF0YVsnZ3JpZHMnXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dERhdGFbJ2dyaWQnXSkge1xuICAgICAgICB0aGlzLmdyaWREYXRhID0gdGhpcy5pbnB1dERhdGEuZ3JpZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3RlckJyZWFrUG9pbnRzKGdyaWRzKSB7XG4gICAgdGhpcy5zaXplJCA9IHRoaXMuX2JyZWFrcG9pbnRPYnNlcnZlclNlcnZpY2Uuc2l6ZSQ7XG4gICAgdGhpcy5zaXplJC5zdWJzY3JpYmUoKHNpemUpID0+IHtcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICB0aGlzLnJlZnJlc2hHcmlkKGdyaWRzLCBzaXplKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoR3JpZChncmlkcywgc2l6ZSkge1xuICAgIGlmIChncmlkc1tzaXplXSAmJiBncmlkc1tzaXplXVsnZ3JpZCddKSB7XG4gICAgICB0aGlzLmdyaWREYXRhID0gZ3JpZHNbc2l6ZV1bJ2dyaWQnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGdEYXRhO1xuICAgICAgbGV0IGluZGV4ID0gUE9JTlRTX05BTUUuaW5kZXhPZihzaXplKVxuICAgICAgd2hpbGUgKCFnRGF0YSAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgZ0RhdGEgPSBncmlkc1tQT0lOVFNfTkFNRVtpbmRleF1dICYmIGdyaWRzW1BPSU5UU19OQU1FW2luZGV4XV1bJ2dyaWQnXVxuICAgICAgfVxuICAgICAgaW5kZXggPSBQT0lOVFNfTkFNRS5pbmRleE9mKHNpemUpXG4gICAgICB3aGlsZSAoIWdEYXRhICYmIGluZGV4IDwgKFBPSU5UU19OQU1FLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGdEYXRhID0gZ3JpZHNbUE9JTlRTX05BTUVbaW5kZXhdXSAmJiBncmlkc1tQT0lOVFNfTkFNRVtpbmRleF1dWydncmlkJ11cbiAgICAgIH1cbiAgICAgIHRoaXMuZ3JpZERhdGEgPSBnRGF0YSB8fCBbXTtcbiAgICB9XG4gIH1cblxuICBnZXRFeHRlbmRlZERhdGEoY2FyZDogYW55KSB7XG4gICAgbGV0IGNvbXBEZXRhaWwgPSB0aGlzLmNvbXBvbmVudEluc3RhbmNlW2NhcmQuY29tcG9uZW50XTtcbiAgICBsZXQgZGV0YWlsID0geyAuLi5jYXJkLCAuLi5jb21wRGV0YWlsIH07XG4gICAgcmV0dXJuIGRldGFpbDtcbiAgfVxuXG59XG4iXX0=