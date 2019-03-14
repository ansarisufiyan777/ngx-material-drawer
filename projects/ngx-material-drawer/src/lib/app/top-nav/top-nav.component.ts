import { Component, OnInit, Input } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
    // trigger(
    //   'enterAnimation', [
    //     transition(':enter', [
    //       style({transform: 'translateX(100%)', opacity: 0}),
    //       animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
    //     ]),
    //     transition(':leave', [
    //       style({transform: 'translateX(0)', opacity: 1}),
    //       animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
    //     ])
    //   ]
    // )
    trigger('enterAnimation', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({transform: 'translateX(100%)',opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ],
})
export class NgxTopNavComponent implements OnInit {
  @Input() config: any;
  constructor(public matEventEmitterService: NgxMaterialDrawerEventEmitter, public navService: NgxNavService) { }
  public isDrawerOpened;
  public showSeacrBar: boolean;
  public searchValue: string = "hello";
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
  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      this.matEventEmitterService.menuItemClick(item);
    }
  }

  public toggleSearchBar(){
    this.showSeacrBar = !this.showSeacrBar;
  }

}