import { OnInit } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { MatMenu } from '@angular/material/menu';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxMenuListItemComponent implements OnInit {
    navService: NgxNavService;
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    expanded: boolean;
    ariaExpanded: boolean;
    childMenu: any;
    menus: any;
    depth: number;
    matMenu: MatMenu;
    constructor(navService: NgxNavService, matEventEmitterService: NgxMaterialDrawerEventEmitter);
    ngOnInit(): void;
    onItemSelected(item: any): void;
}
