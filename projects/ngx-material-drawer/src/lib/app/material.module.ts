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
  MatGridListModule,
  MatCardModule,
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
      MatTooltipModule,
      MatGridListModule,
      MatCardModule
    ],
    declarations: []
  })
  export class MaterialModule { }