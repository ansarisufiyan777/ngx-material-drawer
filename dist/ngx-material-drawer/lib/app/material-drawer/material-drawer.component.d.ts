import { ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxMaterialDrawerComponent implements AfterViewInit, OnInit {
    navService: NgxNavService;
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
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
    constructor(navService: NgxNavService, matEventEmitterService: NgxMaterialDrawerEventEmitter);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private subscribeToEventEmitter;
}
