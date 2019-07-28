import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, EventEmitter, Output } from '@angular/core';
import { BreakpointObserverService, POINTS_NAME } from '../utils/breakpoint-observer.service';
import { Observable } from 'rxjs';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';

@Component({
  selector: 'ngx-material-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class NgxGridComponent implements OnInit {
  @Input('gridData') inputData;
  @Input('componentInstance') componentInstance;
  @Output() public onGridDataChange: any = new EventEmitter();
  public gridData;
  public size;
  public size$: Observable<string>;
  constructor(private _breakpointObserverService: BreakpointObserverService, public matEventEmitterService: NgxMaterialDrawerEventEmitter) {
    this.matEventEmitterService.onGridDataChange.subscribe((event) => {
      if (this.inputData['grids']) {
        this.refreshGrid(this.inputData['grids'],this.size)
      } else if (this.inputData['grid']) {
        this.gridData = this.inputData.grid;
      }
    })
  }

  ngOnInit() {
    if (this.inputData && typeof this.inputData == 'object') {
      if (this.inputData['grids']) {
        this.registerBreakPoints(this.inputData['grids'])
      } else if (this.inputData['grid']) {
        this.gridData = this.inputData.grid;
      }
    }
  }

  registerBreakPoints(grids) {
    this.size$ = this._breakpointObserverService.size$;
    this.size$.subscribe((size) => {
      this.size = size;
      this.refreshGrid(grids, size)
    })
  }

  refreshGrid(grids, size) {
    if (grids[size] && grids[size]['grid']) {
      this.gridData = grids[size]['grid'];
    } else {
      let gData;
      let index = POINTS_NAME.indexOf(size)
      while (!gData && index > 0) {
        index--;
        gData = grids[POINTS_NAME[index]] && grids[POINTS_NAME[index]]['grid']
      }
      index = POINTS_NAME.indexOf(size)
      while (!gData && index < (POINTS_NAME.length - 1)) {
        index++;
        gData = grids[POINTS_NAME[index]] && grids[POINTS_NAME[index]]['grid']
      }
      this.gridData = gData || [];
    }
  }

  getExtendedData(card: any) {
    let compDetail = this.componentInstance[card.component];
    let detail = { ...card, ...compDetail };
    return detail;
  }

}
