import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'lib-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
})
export class NgxTopNavComponent implements OnInit {
  @ViewChild("ngxSearchBox",{static: false}) ngxSearchBox: ElementRef;
  @Input() config: any;
  constructor(public matEventEmitterService: NgxMaterialDrawerEventEmitter, public navService: NgxNavService) { }
  public isDrawerOpened;
  public isSearchActive: boolean;
  public searchValue: string = "";

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.matEventEmitterService.onNavStateChange.subscribe((flag: any) => {
      this.isDrawerOpened = flag.isOpened;
    })
    this.matEventEmitterService.onSideNavClosed.subscribe((flag: any) => {
      this.isDrawerOpened = flag.isOpened;
    })
    this.matEventEmitterService.onSideNavClosed.subscribe((flag: any) => {
      this.isDrawerOpened = flag.isOpened;
    })
  }

  public onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      this.matEventEmitterService.menuItemClick(item);
    }
  }

  public toggleSearchBar() {
    this.isSearchActive = !this.isSearchActive;
    let searchObject = {
      value: this.searchValue,
      inputRef: this.ngxSearchBox
    }
    if(this.isSearchActive){
      this.matEventEmitterService.serachInputOpen(searchObject)
    }else{
      this.matEventEmitterService.serachInputClosed(searchObject)

    }
  }

  public onSearchValueChange(event) {
    let searchObject = {
      value: this.searchValue,
      inputRef: this.ngxSearchBox
    }
    this.matEventEmitterService.searchValueChange(searchObject);
  }

  public onSerachFocusIn(event) {
    let searchObject = {
      value: this.searchValue,
      inputRef: this.ngxSearchBox
    }
    this.matEventEmitterService.serachFocusIn(searchObject);
  }

  public onSerachFocusOut(event) {
    let searchObject = {
      value: this.searchValue,
      inputRef: this.ngxSearchBox
    }
    this.matEventEmitterService.serachFocusOut(searchObject);
  }
}