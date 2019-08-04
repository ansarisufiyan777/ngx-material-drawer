import { OnInit, ElementRef } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
export declare class NgxTopNavComponent implements OnInit {
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    navService: NgxNavService;
    ngxSearchBox: ElementRef;
    config: any;
    constructor(matEventEmitterService: NgxMaterialDrawerEventEmitter, navService: NgxNavService);
    isDrawerOpened: any;
    isSearchActive: boolean;
    searchValue: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onItemSelected(item: any): void;
    toggleSearchBar(): void;
    onSearchValueChange(event: any): void;
    onSerachFocusIn(event: any): void;
    onSerachFocusOut(event: any): void;
}
