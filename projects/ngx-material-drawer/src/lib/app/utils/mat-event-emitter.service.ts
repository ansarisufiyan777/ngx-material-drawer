import { Injectable, EventEmitter, ElementRef } from "@angular/core";
import { Subject, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NgxMaterialDrawerEventEmitter {
  public onMatDrawerInit = new Subject();
  public onMatDrawerAfterViewInit = new Subject();
  public onNavStateChange = new Subject();
  public onDataChange = new ReplaySubject(1);
  public onGridDataChange = new ReplaySubject(1);
  public onSideNavOpen = new Subject();
  public onSideNavClosed = new Subject();
  public onMinVarientChange = new Subject();
  public onSideNavItemClick = new Subject();
  public onSideNavItemExpanded = new Subject();
  public onSideNavItemCollapsed = new Subject();
  public onMenuItemClick = new Subject();
  public onMenuItemExpanded = new Subject();
  public onMenuItemCollapsed = new Subject();
  public onSearchValueChange = new Subject();
  public onSerachFocusIn = new Subject();
  public onSerachFocusOut = new Subject();
  public onSerachInputOpen = new Subject();
  public onSerachInputClosed = new Subject();
  public onFabExpanded = new Subject();
  public onFabCollapsed = new Subject();
  public onMainFabButtonClick = new Subject();
  public onFabButtonClick = new Subject();

  constructor() {}

  /**
   * Material drawer Main component life cycle
   * @param event json
   */
  public matDrawerInit(event: any) {
    this.onMatDrawerInit.next(event);
  }

  /**
   * Material drawer Main component life cycle
   * @param event json
   */
  public matDrawerAfterViewInit(event: any) {
    this.onMatDrawerAfterViewInit.next(event);
  }

  /**
   * using on side nav toggle
   * @param event json
   */
  public navStateChange(event: any) {
    this.onNavStateChange.next(event);
  }

  /**
   * On Search value change
   * @param searchObject containing value and input search object
   */
  public searchValueChange(searchObject: {
    value: string;
    inputRef: ElementRef<any>;
  }): any {
    this.onSearchValueChange.next(searchObject);
  }

  /**
   * On Search focusin
   * @param searchObject containing value and input search object
   */
  public serachFocusIn(searchObject: {
    value: string;
    inputRef: ElementRef<any>;
  }): any {
    this.onSerachFocusIn.next(searchObject);
  }

  /**
   * On Search focusout
   * @param searchObject containing value and input search object
   */
  public serachFocusOut(searchObject: {
    value: string;
    inputRef: ElementRef<any>;
  }): any {
    this.onSerachFocusOut.next(searchObject);
  }

  /**
   * On Search focusout
   * @param searchObject containing value and input search object
   */
  public serachInputOpen(searchObject: {
    value: string;
    inputRef: ElementRef<any>;
  }): any {
    this.onSerachInputOpen.next(searchObject);
  }

  /**
   * On Search focusout
   * @param searchObject containing value and input search object
   */
  public serachInputClosed(searchObject: {
    value: string;
    inputRef: ElementRef<any>;
  }): any {
    this.onSerachInputClosed.next(searchObject);
  }

  /**
   * on data chamge
   * @param event new json
   */
  public dataChange(event: any) {
    this.onDataChange.next(event);
  }

  /**
   * on data chamge
   * @param event new json
   */
  public gridDataChange(event: any) {
    this.onGridDataChange.next(event);
  }

  /**
   * using on side nav open
   * @param event json
   */
  public sideNavOpen(event: any) {
    this.onSideNavOpen.next(event);
  }

  /**
   * using on side nav closed
   * @param event json
   */
  public sideNavClosed(event: any) {
    this.onSideNavClosed.next(event);
  }

  /**
   * Not using currently
   * @param event json
   */
  public minVarientChange(event: any) {
    this.onMinVarientChange.next(event);
  }

  /**
   * using in side nav item
   * @param event json
   */
  public sideNavItemClick(event: any) {
    this.onSideNavItemClick.next(event);
  }

  /**
   * using in side nav item
   * @param event json
   */
  public sideNavItemExpanded(event: any) {
    this.onSideNavItemExpanded.next(event);
  }

  /**
   * using in side nav item
   * @param event json
   */
  public sideNavItemCollapsed(event: any) {
    this.onSideNavItemCollapsed.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public menuItemClick(event: any) {
    this.onMenuItemClick.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public menuItemExpanded(event: any) {
    this.onMenuItemExpanded.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public menuItemCollapsed(event: any) {
    this.onMenuItemCollapsed.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public fabExpanded(event: any) {
    this.onFabExpanded.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public fabCollapsed(event: any) {
    this.onFabCollapsed.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public mainFabButtonClick(event: any) {
    this.onMainFabButtonClick.next(event);
  }

  /**
   * using in toolbar menu
   * @param event json
   */
  public fabButtonClick(event: any) {
    this.onFabButtonClick.next(event);
  }
}
