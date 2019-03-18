/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var NgxMaterialDrawerModule = /** @class */ (function () {
    function NgxMaterialDrawerModule() {
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
                        NgxNavListItemMiniComponent
                    ],
                    bootstrap: [NgxMaterialDrawerComponent],
                    providers: [NgxNavService],
                    exports: [NgxMaterialDrawerComponent]
                },] }
    ];
    return NgxMaterialDrawerModule;
}());
export { NgxMaterialDrawerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cmlhbC1kcmF3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLWRyYXdlci8iLCJzb3VyY2VzIjpbImxpYi9hcHAvbWF0cmlhbC1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixJQUFJLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0M7SUFBQTtJQW9CdUMsQ0FBQzs7Z0JBcEJ2QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO3dCQUMxQixrQkFBa0I7d0JBQ2xCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDMUIsT0FBTyxFQUFDLENBQUMsMEJBQTBCLENBQUM7aUJBQ3JDOztJQUNzQyw4QkFBQztDQUFBLEFBcEJ4QyxJQW9Cd0M7U0FBM0IsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IE5neE5hdkxpc3RJdGVtQ29tcG9uZW50IGFzIE5neE5hdkxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYtbGlzdC1pdGVtL25hdi1saXN0LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4TmF2U2VydmljZSB9IGZyb20gJy4vdXRpbHMvbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hUb3BOYXZDb21wb25lbnQgfSBmcm9tICcuL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hNZW51TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL21lbnUtbGlzdC1pdGVtL21lbnUtbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tYXRlcmlhbC1kcmF3ZXIvbWF0ZXJpYWwtZHJhd2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE5hdkxpc3RJdGVtTWluaUNvbXBvbmVudCB9IGZyb20gJy4vbmF2LWxpc3QtaXRlbS1taW5pL25hdi1saXN0LWl0ZW0tbWluaS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hOYXZMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIE5neE1lbnVMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIE5neE1hdGVyaWFsRHJhd2VyQ29tcG9uZW50LFxyXG4gICAgTmd4VG9wTmF2Q29tcG9uZW50LFxyXG4gICAgTmd4TmF2TGlzdEl0ZW1NaW5pQ29tcG9uZW50XHJcbiAgXSxcclxuICBib290c3RyYXA6IFtOZ3hNYXRlcmlhbERyYXdlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTmd4TmF2U2VydmljZV0sXHJcbiAgZXhwb3J0czpbTmd4TWF0ZXJpYWxEcmF3ZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbERyYXdlck1vZHVsZSB7IH0iXX0=