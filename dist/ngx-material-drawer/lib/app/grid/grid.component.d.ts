import { OnInit } from '@angular/core';
import { BreakpointObserverService } from '../utils/breakpoint-observer.service';
import { Observable } from 'rxjs';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxGridComponent implements OnInit {
    private _breakpointObserverService;
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    inputData: any;
    componentInstance: any;
    onGridDataChange: any;
    gridData: any;
    size: any;
    size$: Observable<string>;
    constructor(_breakpointObserverService: BreakpointObserverService, matEventEmitterService: NgxMaterialDrawerEventEmitter);
    ngOnInit(): void;
    registerBreakPoints(grids: any): void;
    refreshGrid(grids: any, size: any): void;
    getExtendedData(card: any): any;
}
