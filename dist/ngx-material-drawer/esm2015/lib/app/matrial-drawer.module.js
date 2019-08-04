/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxNavListItemComponent as NgxNavListItemComponent } from './nav-list-item/nav-list-item.component';
import { NgxNavService } from './utils/nav.service';
import { NgxTopNavComponent } from './top-nav/top-nav.component';
import { NgxMenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NgxMaterialDrawerComponent } from './material-drawer/material-drawer.component';
import { NgxNavListItemMiniComponent } from './nav-list-item-mini/nav-list-item-mini.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { NgxFabComponent } from './fab/fab.component';
import { NgxGridComponent } from './grid/grid.component';
import { CardHolderComponent } from './card-holder/card-holder.component';
import { CardDirective } from './directive/card.directive';
export class NgxMaterialDrawerModule {
}
NgxMaterialDrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                    CommonModule,
                    MaterialModule,
                    BrowserAnimationsModule,
                    FlexLayoutModule,
                    FormsModule
                ],
                declarations: [
                    NgxNavListItemComponent,
                    NgxMenuListItemComponent,
                    NgxMaterialDrawerComponent,
                    NgxTopNavComponent,
                    NgxNavListItemMiniComponent,
                    NgxFabComponent,
                    NgxGridComponent,
                    CardHolderComponent,
                    CardDirective
                ],
                bootstrap: [NgxMaterialDrawerComponent],
                providers: [NgxNavService],
                exports: [NgxMaterialDrawerComponent, NgxGridComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cmlhbC1kcmF3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvbWF0cmlhbC1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixJQUFJLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTJCM0QsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBeEJuQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixjQUFjO29CQUNkLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO29CQUNoQixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsMEJBQTBCO29CQUMxQixrQkFBa0I7b0JBQ2xCLDJCQUEyQjtvQkFDM0IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkMsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMxQixPQUFPLEVBQUMsQ0FBQywwQkFBMEIsRUFBQyxnQkFBZ0IsQ0FBQzthQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBOZ3hOYXZMaXN0SXRlbUNvbXBvbmVudCBhcyBOZ3hOYXZMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2LWxpc3QtaXRlbS9uYXYtbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE5hdlNlcnZpY2UgfSBmcm9tICcuL3V0aWxzL25hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd4VG9wTmF2Q29tcG9uZW50IH0gZnJvbSAnLi90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4TWVudUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWxpc3QtaXRlbS9tZW51LWxpc3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vbWF0ZXJpYWwtZHJhd2VyL21hdGVyaWFsLWRyYXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hOYXZMaXN0SXRlbU1pbmlDb21wb25lbnQgfSBmcm9tICcuL25hdi1saXN0LWl0ZW0tbWluaS9uYXYtbGlzdC1pdGVtLW1pbmkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hGYWJDb21wb25lbnQgfSBmcm9tICcuL2ZhYi9mYWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC9ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRIb2xkZXJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtaG9sZGVyL2NhcmQtaG9sZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jYXJkLmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hOYXZMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIE5neE1lbnVMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIE5neE1hdGVyaWFsRHJhd2VyQ29tcG9uZW50LFxyXG4gICAgTmd4VG9wTmF2Q29tcG9uZW50LFxyXG4gICAgTmd4TmF2TGlzdEl0ZW1NaW5pQ29tcG9uZW50LFxyXG4gICAgTmd4RmFiQ29tcG9uZW50LFxyXG4gICAgTmd4R3JpZENvbXBvbmVudCxcclxuICAgIENhcmRIb2xkZXJDb21wb25lbnQsXHJcbiAgICBDYXJkRGlyZWN0aXZlXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtOZ3hNYXRlcmlhbERyYXdlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTmd4TmF2U2VydmljZV0sXHJcbiAgZXhwb3J0czpbTmd4TWF0ZXJpYWxEcmF3ZXJDb21wb25lbnQsTmd4R3JpZENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsRHJhd2VyTW9kdWxlIHsgfSJdfQ==