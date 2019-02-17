import { Component, OnInit, Input } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() config: any;
  constructor(public matEventEmitterService: MatEventEmitterService,public navService:NavService) { }
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
      
      if (item.onClickClose) {
        this.navService.closeNav();
      }
      this.matEventEmitterService.sideNavItemClick(item);
    }
  }

}