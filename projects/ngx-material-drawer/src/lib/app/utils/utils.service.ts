import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxUtilsService {
  private instance: any;
  constructor() { }
  public get componentInstance(): any {
    return this.instance;
  }
  public set componentInstance(instance) {
    this.instance = { ...this.instance, ...instance };
  }

  public getExtendedData(card: any) {
    let compDetail = this.componentInstance[card.component];
    let detail = { ...card, ...compDetail };
    return detail;
  }
}
