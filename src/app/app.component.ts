import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input, Output, OnInit } from '@angular/core';
let content = require('../drawer-config.json');

@Component({
  selector: 'angular-material-drawer',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public jsonData: any;

  constructor() {
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
}
