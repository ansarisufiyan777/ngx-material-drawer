import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
    exports: [
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatMenuModule,
      MatRippleModule,
      MatSidenavModule,
      MatToolbarModule,
      MatTooltipModule
    ],
    declarations: []
  })
  export class MaterialModule { }