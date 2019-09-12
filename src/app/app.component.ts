import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JsonEditorComponent } from 'ang-jsoneditor';
import { EditorComponent } from './json-editor/json-editor.component';
import { NgxMaterialDrawerEventEmitter } from 'projects/ngx-material-drawer/src/public_api';
import { BlueCardComponent } from './cards/blue-card/blue-card.component';
import { RedCardComponent } from './cards/red-card/red-card.component';
import { GreenCardComponent } from './cards/green-card/green-card.component';
let content = require('../drawer-config.json');

@Component({
  selector: 'angular-material-drawer',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public jsonData: any;
  public componentInstance = {
    'c7': {
      component: BlueCardComponent, data: {
        text: "C7 component drawer"
      }
    },
    'c8': { component: RedCardComponent },
    'c9': { component: GreenCardComponent },
    'c10': { component: BlueCardComponent },
    'c11': { component: RedCardComponent },
    'c12': { component: GreenCardComponent },
  }
  constructor(public dialog: MatDialog, public matEventEmitterService: NgxMaterialDrawerEventEmitter) {
  }

  ngOnInit() {
    this.jsonData = content;
  }

  public onMatDrawerInit(event) {
    console.log("onMatDrawerInit", event);

  }
  public onMatDrawerAfterViewInit(event) {
    console.log("onMatDrawerAfterViewInit", event);

  }
  public onNavStateChange(event) {
    console.log("onNavStateChange", event);

  }
  public onDataChange(event) {
    console.log("onDataChange", event);

  }
  public onGridDataChange(event) {
    console.log("onGridDataChange", event);

  }
  public onSideNavOpen(event) {
    console.log("onSideNavOpen", event);

  }
  public onSideNavClosed(event) {
    console.log("onSideNavClosed", event);

  }
  public onMinVarientChange(event) {
    console.log("onMinVarientChange", event);

  }
  public onSideNavItemClick(event) {
    console.log("onSideNavItemClick", event);

  }
  public onSideNavItemExpanded(event) {
    console.log("onSideNavItemExpanded", event);

  }
  public onSideNavItemCollapsed(event) {
    console.log("onSideNavItemCollapsed", event);

  }
  public onMenuItemClick(event) {
    console.log("onMenuItemClick", event);
    if (event.route == 'open-drawer-menu-json') {
      const dialogRef = this.dialog.open(EditorComponent, {
        width: '90%',
        data: this.jsonData
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result) {
          this.jsonData = result;
          this.matEventEmitterService.dataChange(this.jsonData);
        }
      });
    }
  }
  public onSerachValueChange(event) {
    console.log("onSerachValueChange", event);
  }

  public onSerachFocusIn(event) {
    console.log("onSerachFocusin", event);
  }
  public onSerachFocusOut(event) {
    console.log("onSerachFocusOut", event);
  }
  public onFabExpanded(event) {
    console.log("onFabExpanded", event);
  }
  public onFabCollapsed(event) {
    console.log("onFabCollapsed", event);
  }
  public onMainFabButtonClick(event) {
    console.log("onMainFabButtonClick", event);
  }
  public onFabButtonClick(event) {
    console.log("onFabButtonClick", event);
  }
  public onSerachInputOpen(event) {
    console.log("onSerachInputOpen", event);
  }
  public onSerachInputClosed(event) {
    console.log("onSerachInputClosed", event);
  }
}
