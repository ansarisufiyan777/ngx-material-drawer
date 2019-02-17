import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirstComponent } from './first/first.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { MaterialModule } from './material.module';
import { MaterialDrawerModule } from 'projects/ngx-material-drawer/src/public_api';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgJsonEditorModule,
    MaterialDrawerModule
  ],
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }