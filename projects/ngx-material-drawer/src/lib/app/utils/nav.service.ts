import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatEventEmitterService } from './mat-event-emitter.service';
@Injectable({
  providedIn: 'root'
})
export class NavService {
  public appDrawer: any;
  public isMiniVarient: any;
  public isOpened: boolean;
  public currentUrl = new BehaviorSubject<string>(undefined);
  public isDrawerOpened = false;
  constructor(
    public matEventEmitterService: MatEventEmitterService,
  ) {
  }
  public closeNav() {
    if (!this.isMiniVarient) {
      this.appDrawer.close();
    }
    this.isOpened = false;
    this.matEventEmitterService.sideNavClosed(this.getData(this.isOpened));
  }

  public openNav() {
    if (!this.isMiniVarient) {
      this.appDrawer.open();
    }
    this.isOpened = true;
    this.matEventEmitterService.sideNavOpen(this.getData(this.isOpened));
  }
  
  public toggleNav() {
    if (!this.isMiniVarient) {
      this.appDrawer.toggle();
    }
    this.isOpened = !this.isOpened;
    if(this.isOpened){
      this.matEventEmitterService.sideNavOpen(this.getData(this.isOpened));
    }else{
      this.matEventEmitterService.sideNavClosed(this.getData(this.isOpened));
    }
    this.matEventEmitterService.navStateChange(this.getData(this.isOpened));
  }

  getData(b): object {
    return {
      drawer: this.appDrawer,
      isOpened: b
    }
  }
}
