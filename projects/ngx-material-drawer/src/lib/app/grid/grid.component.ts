import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
  EventEmitter,
  Output,
} from "@angular/core";
import {
  BreakpointObserverService,
  POINTS_NAME,
} from "../utils/breakpoint-observer.service";
import { Observable } from "rxjs";
import { NgxMaterialDrawerEventEmitter } from "../utils/mat-event-emitter.service";
import { NgxUtilsService } from "../utils/utils.service";

@Component({
  selector: "ngx-material-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class NgxGridComponent implements OnInit {
  @Input("gridData") inputData: any;
  @Input("componentInstance") componentInstance: any;
  @Output() public onGridDataChange: any = new EventEmitter();
  public gridData: any;
  public size: any;
  public size$!: Observable<string>;

  constructor(
    private _breakpointObserverService: BreakpointObserverService,
    public matEventEmitterService: NgxMaterialDrawerEventEmitter,
    public ngxUtilsService: NgxUtilsService
  ) {
    this.matEventEmitterService.onGridDataChange.subscribe((event: any) => {
      if (event) {
        this.refreshGrid(event["grids"], this.size);
      } else if (this.inputData["grid"]) {
        this.gridData = this.inputData.grid;
      }
    });
  }

  ngOnInit() {
    if (this.inputData && typeof this.inputData == "object") {
      if (this.inputData["grids"]) {
        this.registerBreakPoints(this.inputData["grids"]);
      } else if (this.inputData["grid"]) {
        this.gridData = this.inputData.grid;
      }
    }
    this.ngxUtilsService.componentInstance = this.componentInstance;
  }

  registerBreakPoints(grids: any) {
    this.size$ = this._breakpointObserverService.size$;
    this.size$.subscribe((size) => {
      this.size = size;
      this.refreshGrid(grids, size);
    });
  }

  refreshGrid(grids: any, size: any) {
    if (grids[size] && grids[size]["grid"]) {
      this.gridData = grids[size]["grid"];
    } else {
      let gData;
      let index = POINTS_NAME.indexOf(size);
      while (!gData && index > 0) {
        index--;
        gData = grids[POINTS_NAME[index]] && grids[POINTS_NAME[index]]["grid"];
      }
      index = POINTS_NAME.indexOf(size);
      while (!gData && index < POINTS_NAME.length - 1) {
        index++;
        gData = grids[POINTS_NAME[index]] && grids[POINTS_NAME[index]]["grid"];
      }
      this.gridData = gData || [];
    }
  }
}
