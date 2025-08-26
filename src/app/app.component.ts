import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NgxMaterialDrawerEventEmitter } from "projects/ngx-material-drawer/src/public_api";
import * as content from "../drawer-config.json";
import { BlueCardComponent } from "./cards/blue-card/blue-card.component";
import { GreenCardComponent } from "./cards/green-card/green-card.component";
import { RedCardComponent } from "./cards/red-card/red-card.component";
import { EditorComponent } from "./json-editor/json-editor.component";
import { SwitchComponent } from "./switch/switch.component";

@Component({
  selector: "angular-material-drawer",
  templateUrl: "app.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public jsonData: any;
  public componentInstance = {
    c7: {
      component: BlueCardComponent,
      data: {
        text: "C7 component drawer",
      },
    },
    c8: { component: RedCardComponent },
    c9: { component: GreenCardComponent },
    c10: { component: BlueCardComponent },
    c11: { component: RedCardComponent },
    c12: { component: GreenCardComponent },
    switch: { component: SwitchComponent },
  };
  constructor(
    public dialog: MatDialog,
    public matEventEmitterService: NgxMaterialDrawerEventEmitter
  ) {}

  ngOnInit() {
    this.jsonData = content;
  }

  public onMatDrawerInit(event: any) {
    console.log("onMatDrawerInit", event);
  }
  public onMatDrawerAfterViewInit(event: any) {
    console.log("onMatDrawerAfterViewInit", event);
  }
  public onNavStateChange(event: any) {
    console.log("onNavStateChange", event);
  }
  public onDataChange(event: any) {
    console.log("onDataChange", event);
  }
  public onGridDataChange(event: any) {
    console.log("onGridDataChange", event);
  }
  public onSideNavOpen(event: any) {
    console.log("onSideNavOpen", event);
  }
  public onSideNavClosed(event: any) {
    console.log("onSideNavClosed", event);
  }
  public onMinVarientChange(event: any) {
    console.log("onMinVarientChange", event);
  }
  public onSideNavItemClick(event: any) {
    console.log("onSideNavItemClick", event);
  }
  public onSideNavItemExpanded(event: any) {
    console.log("onSideNavItemExpanded", event);
  }
  public onSideNavItemCollapsed(event: any) {
    console.log("onSideNavItemCollapsed", event);
  }
  public onMenuItemClick(event: any) {
    console.log("onMenuItemClick", event);
    if (event.route == "open-drawer-menu-json") {
      const dialogRef = this.dialog.open(EditorComponent, {
        width: "90%",
        data: this.jsonData,
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log("The dialog was closed");
        if (result) {
          this.jsonData = result;
          this.matEventEmitterService.dataChange(this.jsonData);
        }
      });
    }
  }
  public onSerachValueChange(event: any) {
    console.log("onSerachValueChange", event);
  }

  public onSerachFocusIn(event: any) {
    console.log("onSerachFocusin", event);
  }
  public onSerachFocusOut(event: any) {
    console.log("onSerachFocusOut", event);
  }
  public onFabExpanded(event: any) {
    console.log("onFabExpanded", event);
  }
  public onFabCollapsed(event: any) {
    console.log("onFabCollapsed", event);
  }
  public onMainFabButtonClick(event: any) {
    console.log("onMainFabButtonClick", event);
  }
  public onFabButtonClick(event: any) {
    console.log("onFabButtonClick", event);
  }
  public onSerachInputOpen(event: any) {
    console.log("onSerachInputOpen", event);
  }
  public onSerachInputClosed(event: any) {
    console.log("onSerachInputClosed", event);
  }
}
