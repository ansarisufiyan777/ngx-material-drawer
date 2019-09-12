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

@NgModule({
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
  exports:[NgxMaterialDrawerComponent,NgxGridComponent]
})
export class NgxMaterialDrawerModule { }