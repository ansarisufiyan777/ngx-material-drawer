import { Component, OnInit, Input } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class NgxTopNavComponent implements OnInit {
  @Input() config: any;
  constructor(public matEventEmitterService: NgxMaterialDrawerEventEmitter,public navService:NgxNavService) { }
  public isDrawerOpened;
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.matEventEmitterService.onNavStateChange.subscribe((flag:any) => {
      this.isDrawerOpened = flag.isOpened;
    })
    this.matEventEmitterService.onSideNavClosed.subscribe((flag:any) => {
      this.isDrawerOpened = flag.isOpened;
    })
    this.matEventEmitterService.onSideNavClosed.subscribe((flag:any) => {
      this.isDrawerOpened = flag.isOpened;
    })
  }
  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      this.matEventEmitterService.menuItemClick(item);
    }
  }

}