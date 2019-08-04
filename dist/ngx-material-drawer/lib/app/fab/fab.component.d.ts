import { OnInit } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxFabComponent implements OnInit {
    navService: NgxNavService;
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    expanded: boolean;
    fabData: any;
    constructor(navService: NgxNavService, matEventEmitterService: NgxMaterialDrawerEventEmitter);
    ngOnInit(): void;
    onFabClick(item: any): void;
    onMainFabClick(item: any): void;
}
