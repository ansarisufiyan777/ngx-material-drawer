import { ElementRef } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
export declare class NgxMaterialDrawerEventEmitter {
    onMatDrawerInit: Subject<{}>;
    onMatDrawerAfterViewInit: Subject<{}>;
    onNavStateChange: Subject<{}>;
    onDataChange: ReplaySubject<{}>;
    onSideNavOpen: Subject<{}>;
    onSideNavClosed: Subject<{}>;
    onMinVarientChange: Subject<{}>;
    onSideNavItemClick: Subject<{}>;
    onSideNavItemExpanded: Subject<{}>;
    onSideNavItemCollapsed: Subject<{}>;
    onMenuItemClick: Subject<{}>;
    onMenuItemExpanded: Subject<{}>;
    onMenuItemCollapsed: Subject<{}>;
    onSearchValueChange: Subject<{}>;
    onSerachFocusIn: Subject<{}>;
    onSerachFocusOut: Subject<{}>;
    onSerachInputOpen: Subject<{}>;
    onSerachInputClosed: Subject<{}>;
    onFabExpanded: Subject<{}>;
    onFabCollapsed: Subject<{}>;
    onMainFabButtonClick: Subject<{}>;
    onFabButtonClick: Subject<{}>;
    constructor();
    /**
     * Material drawer Main component life cycle
     * @param event json
     */
    matDrawerInit(event: any): void;
    /**
     * Material drawer Main component life cycle
     * @param event json
     */
    matDrawerAfterViewInit(event: any): void;
    /**
     * using on side nav toggle
     * @param event json
     */
    navStateChange(event: any): void;
    /**
     * On Search value change
     * @param searchObject containing value and input search object
     */
    searchValueChange(searchObject: {
        value: string;
        inputRef: ElementRef<any>;
    }): any;
    /**
     * On Search focusin
     * @param searchObject containing value and input search object
     */
    serachFocusIn(searchObject: {
        value: string;
        inputRef: ElementRef<any>;
    }): any;
    /**
     * On Search focusout
     * @param searchObject containing value and input search object
     */
    serachFocusOut(searchObject: {
        value: string;
        inputRef: ElementRef<any>;
    }): any;
    /**
     * On Search focusout
     * @param searchObject containing value and input search object
     */
    serachInputOpen(searchObject: {
        value: string;
        inputRef: ElementRef<any>;
    }): any;
    /**
     * On Search focusout
     * @param searchObject containing value and input search object
     */
    serachInputClosed(searchObject: {
        value: string;
        inputRef: ElementRef<any>;
    }): any;
    /**
     * on data chamge
     * @param event new json
     */
    dataChange(event: any): void;
    /**
     * using on side nav open
     * @param event json
     */
    sideNavOpen(event: any): void;
    /**
     * using on side nav closed
     * @param event json
     */
    sideNavClosed(event: any): void;
    /**
     * Not using currently
     * @param event json
     */
    minVarientChange(event: any): void;
    /**
     * using in side nav item
     * @param event json
     */
    sideNavItemClick(event: any): void;
    /**
     * using in side nav item
     * @param event json
     */
    sideNavItemExpanded(event: any): void;
    /**
     * using in side nav item
     * @param event json
     */
    sideNavItemCollapsed(event: any): void;
    /**
     * using in toolbar menu
     * @param event json
     */
    menuItemClick(event: any): void;
    /**
     * using in toolbar menu
     * @param event json
     */
    menuItemExpanded(event: any): void;
    /**
     * using in toolbar menu
     * @param event json
     */
    menuItemCollapsed(event: any): void;
    /**
   * using in toolbar menu
   * @param event json
   */
    fabExpanded(event: any): void;
    /**
     * using in toolbar menu
     * @param event json
     */
    fabCollapsed(event: any): void;
    /**
     * using in toolbar menu
     * @param event json
     */
    mainFabButtonClick(event: any): void;
    /**
     * using in toolbar menu
     * @param event json
     */
    fabButtonClick(event: any): void;
}
