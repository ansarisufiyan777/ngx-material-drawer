/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavListItemComponent as NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { NavService } from './utils/nav.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MaterialDrawerComponent } from './material-drawer/material-drawer.component';
import { NavListItemMiniComponent } from './nav-list-item-mini/nav-list-item-mini.component';
import { MaterialModule } from './material.module';
export class MaterialDrawerModule {
}
MaterialDrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                    CommonModule,
                    MaterialModule,
                    BrowserAnimationsModule,
                    FlexLayoutModule
                ],
                declarations: [
                    NavListItemComponent,
                    MenuListItemComponent,
                    MaterialDrawerComponent,
                    TopNavComponent,
                    NavListItemMiniComponent
                ],
                bootstrap: [MaterialDrawerComponent],
                providers: [NavService],
                exports: [MaterialDrawerComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cmlhbC1kcmF3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvbWF0cmlhbC1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixJQUFJLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFzQm5ELE1BQU0sT0FBTyxvQkFBb0I7OztZQW5CaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLGVBQWU7b0JBQ2Ysd0JBQXdCO2lCQUN6QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN2QixPQUFPLEVBQUMsQ0FBQyx1QkFBdUIsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBOYXZMaXN0SXRlbUNvbXBvbmVudCBhcyBOYXZMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2LWxpc3QtaXRlbS9uYXYtbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdlNlcnZpY2UgfSBmcm9tICcuL3V0aWxzL25hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9wTmF2Q29tcG9uZW50IH0gZnJvbSAnLi90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWxpc3QtaXRlbS9tZW51LWxpc3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vbWF0ZXJpYWwtZHJhd2VyL21hdGVyaWFsLWRyYXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZMaXN0SXRlbU1pbmlDb21wb25lbnQgfSBmcm9tICcuL25hdi1saXN0LWl0ZW0tbWluaS9uYXYtbGlzdC1pdGVtLW1pbmkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmF2TGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICBNZW51TGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICBNYXRlcmlhbERyYXdlckNvbXBvbmVudCxcclxuICAgIFRvcE5hdkNvbXBvbmVudCxcclxuICAgIE5hdkxpc3RJdGVtTWluaUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbTWF0ZXJpYWxEcmF3ZXJDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW05hdlNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6W01hdGVyaWFsRHJhd2VyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxEcmF3ZXJNb2R1bGUgeyB9Il19