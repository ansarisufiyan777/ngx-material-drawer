import { OnInit } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxNavListItemMiniComponent implements OnInit {
    navService: NgxNavService;
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    expanded: boolean;
    ariaExpanded: boolean;
    item: any;
    depth: number;
    constructor(navService: NgxNavService, matEventEmitterService: NgxMaterialDrawerEventEmitter);
    ngOnInit(): void;
    onItemSelected(item: any): void;
}
