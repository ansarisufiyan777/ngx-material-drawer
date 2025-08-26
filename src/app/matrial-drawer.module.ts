import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxMaterialDrawerModule } from "projects/ngx-material-drawer/src/public_api";
import { EditorComponent } from "./json-editor/json-editor.component";
import { BlueCardComponent } from "./cards/blue-card/blue-card.component";
import { RedCardComponent } from "./cards/red-card/red-card.component";
import { GreenCardComponent } from "./cards/green-card/green-card.component";
import { GridContainerComponent } from "./cards/grid-container/grid-container.component";
import { MaterialModule } from "./material.module";
import { SwitchComponent } from "./switch/switch.component";
import { NgChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxMaterialDrawerModule,
    MaterialModule,
    NgChartsModule,
  ],
  declarations: [
    AppComponent,
    EditorComponent,
    BlueCardComponent,
    RedCardComponent,
    GreenCardComponent,
    GridContainerComponent,
    SwitchComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
