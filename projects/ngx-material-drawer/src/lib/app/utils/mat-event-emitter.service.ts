import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxMaterialDrawerEventEmitter {

  public onMatDrawerInit = new Subject();
  public onMatDrawerAfterViewInit = new Subject();
  public onNavStateChange = new Subject();
  public onDataChange = new ReplaySubject(1);
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

  constructor() { }
  /**
   * Material drawer Main component life cycle
   * @param event json
   */
  public matDrawerInit(event) {
    this.onMatDrawerInit.next(event);

  }
  /**
   * Material drawer Main component life cycle
   * @param event json
   */
  public matDrawerAfterViewInit(event) {
    this.onMatDrawerAfterViewInit.next(event);

  }
  /**
   * using on side nav toggle
   * @param event json
   */
  public navStateChange(event) {
    this.onNavStateChange.next(event);

  }

  /**
   * On Search value change
   * @param searchObject containing value and input search object
   */
  public searchValueChange(searchObject: { value: string; inputRef: ElementRef<any>; }): any {
    this.onSearchValueChange.next(searchObject);
  }

  /**
   * On Search focusin
   * @param searchObject containing value and input search object
   */
  public serachFocusIn(searchObject: { value: string; inputRef: ElementRef<any>; }): any {
    this.onSerachFocusIn.next(searchObject);
  }

  /**
   * On Search focusout
   * @param searchObject containing value and input search object
   */
  public serachFocusOut(searchObject: { value: string; inputRef: ElementRef<any>; }): any {
    this.onSerachFocusOut.next(searchObject);
  }

  /**
   * on data chamge
   * @param event new json
   */
  public dataChange(event) {
    this.onDataChange.next(event);

  }

  /**
   * using on side nav open
   * @param event json
   */
  public sideNavOpen(event) {
    this.onSideNavOpen.next(event);

  }

  /**
   * using on side nav closed
   * @param event json
   */
  public sideNavClosed(event) {
    this.onSideNavClosed.next(event);

  }

  /**
   * Not using currently
   * @param event json
   */
  public minVarientChange(event) {
    this.onMinVarientChange.next(event);

  }
  /**
   * using in side nav item
   * @param event json
   */
  public sideNavItemClick(event) {
    this.onSideNavItemClick.next(event);

  }
  /**
   * using in side nav item
   * @param event json
   */
  public sideNavItemExpanded(event) {
    this.onSideNavItemExpanded.next(event);

  }
  /**
   * using in side nav item
   * @param event json
   */
  public sideNavItemCollapsed(event) {
    this.onSideNavItemCollapsed.next(event);

  }
  /**
   * using in toolbar menu
   * @param event json
   */
  public menuItemClick(event) {
    this.onMenuItemClick.next(event);

  }
  /**
   * using in toolbar menu
   * @param event json
   */
  public menuItemExpanded(event) {
    this.onMenuItemExpanded.next(event);

  }
  /**
   * using in toolbar menu
   * @param event json
   */
  public menuItemCollapsed(event) {
    this.onMenuItemCollapsed.next(event);

  }
}
