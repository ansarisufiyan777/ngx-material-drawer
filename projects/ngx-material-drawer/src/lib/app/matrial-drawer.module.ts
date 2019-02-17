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


@NgModule({
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
  exports:[MaterialDrawerComponent]
})
export class MaterialDrawerModule { }