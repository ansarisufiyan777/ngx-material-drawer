/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CardDirective } from '../directive/card.directive';
export class CardHolderComponent {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cardHost && this.cardData && this.loadComponent();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    loadComponent() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardData.component);
        /** @type {?} */
        const viewContainerRef = this.cardHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        const componentRef = viewContainerRef.createComponent(componentFactory);
        ((/** @type {?} */ (componentRef.instance))).data = this.cardData.data;
    }
}
CardHolderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card-holder',
                template: "<div class=\"ngx-card-holder\">\n  <ng-template card-host></ng-template>\n</div>",
                styles: [".ngx-card-holder{position:absolute;top:0;left:0;right:0;bottom:0}"]
            }] }
];
/** @nocollapse */
CardHolderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
CardHolderComponent.propDecorators = {
    cardData: [{ type: Input }],
    cardHost: [{ type: ViewChild, args: [CardDirective, { static: true },] }]
};
if (false) {
    /** @type {?} */
    CardHolderComponent.prototype.cardData;
    /** @type {?} */
    CardHolderComponent.prototype.cardHost;
    /**
     * @type {?}
     * @private
     */
    CardHolderComponent.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvY2FyZC1ob2xkZXIvY2FyZC1ob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsd0JBQXdCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTVELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFHOUIsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFBSSxDQUFDOzs7O0lBRTNFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBRXhELENBQUM7Ozs7SUFDRCxlQUFlO0lBQ2YsQ0FBQzs7OztJQUNELGFBQWE7O2NBQ0wsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOztjQUVqRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQjtRQUN2RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FFbkIsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RSxDQUFDLG1CQUFVLFlBQVksQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM5RCxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDRGQUEyQzs7YUFFNUM7Ozs7WUFSNkMsd0JBQXdCOzs7dUJBVW5FLEtBQUs7dUJBQ0wsU0FBUyxTQUFDLGFBQWEsRUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFEdkMsdUNBQWtCOztJQUNsQix1Q0FBaUU7Ozs7O0lBQ3JELHVEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS9jYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJTmd4Q2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLWhvbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWhvbGRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtaG9sZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEhvbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNhcmREYXRhO1xuICBAVmlld0NoaWxkKENhcmREaXJlY3RpdmUse3N0YXRpYzogdHJ1ZX0pIGNhcmRIb3N0OiBDYXJkRGlyZWN0aXZlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcmRIb3N0ICYmIHRoaXMuY2FyZERhdGEgJiYgdGhpcy5sb2FkQ29tcG9uZW50KClcblxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxuICBsb2FkQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNhcmREYXRhLmNvbXBvbmVudCk7XG5cbiAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5jYXJkSG9zdC52aWV3Q29udGFpbmVyUmVmO1xuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgICg8SU5neENhcmQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5kYXRhID0gdGhpcy5jYXJkRGF0YS5kYXRhO1xuICB9XG59XG4iXX0=