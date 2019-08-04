import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

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