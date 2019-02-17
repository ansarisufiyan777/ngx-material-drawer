import { ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';
export declare class MaterialDrawerComponent implements AfterViewInit, OnInit {
    navService: NavService;
    matEventEmitterService: MatEventEmitterService;
    appDrawer: ElementRef;
    navData: any;
    onMatDrawerInit: any;
    onMatDrawerAfterViewInit: any;
    onNavStateChange: any;
    onDataChange: any;
    onSideNavOpen: any;
    onSideNavClosed: any;
    onMinVarientChange: any;
    onSideNavItemClick: any;
    onSideNavItemExpanded: any;
    onSideNavItemCollapsed: any;
    onMenuItemClick: any;
    version: import("@angular/core/src/version").Version;
    constructor(navService: NavService, matEventEmitterService: MatEventEmitterService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private subscribeToEventEmitter;
}
