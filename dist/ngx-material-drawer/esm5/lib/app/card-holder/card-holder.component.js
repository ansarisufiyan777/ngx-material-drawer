/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CardDirective } from '../directive/card.directive';
var CardHolderComponent = /** @class */ (function () {
    function CardHolderComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    CardHolderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cardHost && this.cardData && this.loadComponent();
    };
    /**
     * @return {?}
     */
    CardHolderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CardHolderComponent.prototype.loadComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardData.component);
        /** @type {?} */
        var viewContainerRef = this.cardHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        var componentRef = viewContainerRef.createComponent(componentFactory);
        ((/** @type {?} */ (componentRef.instance))).data = this.cardData.data;
    };
    CardHolderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-holder',
                    template: "<div class=\"ngx-card-holder\">\n  <ng-template card-host></ng-template>\n</div>",
                    styles: [".ngx-card-holder{position:absolute;top:0;left:0;right:0;bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    CardHolderComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    CardHolderComponent.propDecorators = {
        cardData: [{ type: Input }],
        cardHost: [{ type: ViewChild, args: [CardDirective, { static: true },] }]
    };
    return CardHolderComponent;
}());
export { CardHolderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvY2FyZC1ob2xkZXIvY2FyZC1ob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsd0JBQXdCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzVEO0lBUUUsNkJBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUksQ0FBQzs7OztJQUUzRSxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBRXhELENBQUM7Ozs7SUFDRCw2Q0FBZTs7O0lBQWY7SUFDQSxDQUFDOzs7O0lBQ0QsMkNBQWE7OztJQUFiOztZQUNRLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7WUFFakcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0I7UUFDdkQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBRW5CLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7UUFDdkUsQ0FBQyxtQkFBVSxZQUFZLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUQsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0RkFBMkM7O2lCQUU1Qzs7OztnQkFSNkMsd0JBQXdCOzs7MkJBVW5FLEtBQUs7MkJBQ0wsU0FBUyxTQUFDLGFBQWEsRUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0lBa0J6QywwQkFBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLG1CQUFtQjs7O0lBQzlCLHVDQUFrQjs7SUFDbEIsdUNBQWlFOzs7OztJQUNyRCx1REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcmREaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUvY2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSU5neENhcmQgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2FyZC1ob2xkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1ob2xkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWhvbGRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRIb2xkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjYXJkRGF0YTtcbiAgQFZpZXdDaGlsZChDYXJkRGlyZWN0aXZlLHtzdGF0aWM6IHRydWV9KSBjYXJkSG9zdDogQ2FyZERpcmVjdGl2ZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJkSG9zdCAmJiB0aGlzLmNhcmREYXRhICYmIHRoaXMubG9hZENvbXBvbmVudCgpXG5cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIH1cbiAgbG9hZENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jYXJkRGF0YS5jb21wb25lbnQpO1xuXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuY2FyZEhvc3Qudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgICAoPElOZ3hDYXJkPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMuY2FyZERhdGEuZGF0YTtcbiAgfVxufVxuIl19