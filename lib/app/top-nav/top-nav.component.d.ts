import { OnInit } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxTopNavComponent implements OnInit {
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    navService: NgxNavService;
    config: any;
    constructor(matEventEmitterService: NgxMaterialDrawerEventEmitter, navService: NgxNavService);
    isDrawerOpened: any;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onItemSelected(item: any): void;
}
