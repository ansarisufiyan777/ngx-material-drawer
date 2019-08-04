import { Component, ViewChild, ElementRef, AfterViewInit, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
@Component({
  selector: 'ngx-material-drawer',
  templateUrl: './material-drawer.component.html',
  styleUrls: ['./material-drawer.component.scss']
})
export class NgxMaterialDrawerComponent implements AfterViewInit, OnInit {
  @ViewChild('appDrawer',{static: false}) appDrawer: ElementRef;


  @Input('data') navData: any;

  @Output() public onMatDrawerInit: any = new EventEmitter();
  @Output() public onMatDrawerAfterViewInit: any = new EventEmitter();
  @Output() public onNavStateChange: any = new EventEmitter();
  @Output() public onDataChange: any = new EventEmitter();
  @Output() public onSideNavOpen: any = new EventEmitter();
  @Output() public onSideNavClosed: any = new EventEmitter();
  @Output() public onMinVarientChange: any = new EventEmitter();
  @Output() public onSideNavItemClick: any = new EventEmitter();
  @Output() public onSideNavItemExpanded: any = new EventEmitter();
  @Output() public onSideNavItemCollapsed: any = new EventEmitter();
  @Output() public onMenuItemClick: any = new EventEmitter();
  @Output() public onSerachValueChange: any = new EventEmitter();
  @Output() public onSerachFocusIn: any = new EventEmitter();
  @Output() public onSerachFocusOut: any = new EventEmitter();
  @Output() public onSerachInputOpen: any = new EventEmitter();
  @Output() public onSerachInputClosed: any = new EventEmitter();
  @Output() public onFabExpanded: any = new EventEmitter();
  @Output() public onFabCollapsed: any = new EventEmitter();
  @Output() public onMainFabButtonClick: any = new EventEmitter();
  @Output() public onFabButtonClick: any = new EventEmitter();


  //Material drawer version
  public version = VERSION;

  constructor(public navService: NgxNavService,
    public matEventEmitterService: NgxMaterialDrawerEventEmitter) {
    this.subscribeToEventEmitter();
  }

  public ngOnInit() {
    this.matEventEmitterService.dataChange(this.navData);
    this.matEventEmitterService.onDataChange.subscribe(res => {
      this.navData = res;
      this.navService.isMiniVarient = this.navData['miniVarient'];
      this.navService.isOpened = this.navData['opened'];
    })
    this.matEventEmitterService.matDrawerInit(this.navData);
  }

  public ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
    this.matEventEmitterService.matDrawerAfterViewInit(this.navData);
  }
  private subscribeToEventEmitter() {
    this.matEventEmitterService.onMatDrawerInit.subscribe((event) => {
      this.onMatDrawerInit.emit(event);
    })
    this.matEventEmitterService.onMatDrawerAfterViewInit.subscribe((event) => {
      this.onMatDrawerAfterViewInit.emit(event);
    })
    this.matEventEmitterService.onNavStateChange.subscribe((event) => {
      this.onNavStateChange.emit(event);
    })
    this.matEventEmitterService.onDataChange.subscribe((event) => {
      this.onDataChange.emit(event);
    })
    this.matEventEmitterService.onSideNavOpen.subscribe((event) => {
      this.onSideNavOpen.emit(event);
    })
    this.matEventEmitterService.onSideNavClosed.subscribe((event) => {
      this.onSideNavClosed.emit(event);
    })
    this.matEventEmitterService.onMinVarientChange.subscribe((event) => {
      this.onMinVarientChange.emit(event);
    })
    this.matEventEmitterService.onSideNavItemClick.subscribe((event) => {
      this.onSideNavItemClick.emit(event);
    })
    this.matEventEmitterService.onSideNavItemExpanded.subscribe((event) => {
      this.onSideNavItemExpanded.emit(event);
    })
    this.matEventEmitterService.onSideNavItemCollapsed.subscribe((event) => {
      this.onSideNavItemCollapsed.emit(event);
    })
    this.matEventEmitterService.onMenuItemClick.subscribe((event) => {
      this.onMenuItemClick.emit(event);
    })
    this.matEventEmitterService.onSearchValueChange.subscribe((event) => {
      this.onSerachValueChange.emit(event);
    })
    this.matEventEmitterService.onSerachFocusIn.subscribe((event) => {
      this.onSerachFocusIn.emit(event);
    })
    this.matEventEmitterService.onSerachFocusOut.subscribe((event) => {
      this.onSerachFocusOut.emit(event);
    })
    this.matEventEmitterService.onFabExpanded.subscribe((event) => {
      this.onFabExpanded.emit(event);
    })
    this.matEventEmitterService.onFabCollapsed.subscribe((event) => {
      this.onFabCollapsed.emit(event);
    })
    this.matEventEmitterService.onMainFabButtonClick.subscribe((event) => {
      this.onMainFabButtonClick.emit(event);
    })
    this.matEventEmitterService.onFabButtonClick.subscribe((event) => {
      this.onFabButtonClick.emit(event);
    })

    this.matEventEmitterService.onSerachInputOpen.subscribe((event) => {
      this.onSerachInputOpen.emit(event);
    })

    this.matEventEmitterService.onSerachInputClosed.subscribe((event) => {
      this.onSerachInputClosed.emit(event);
    })
  }

}
