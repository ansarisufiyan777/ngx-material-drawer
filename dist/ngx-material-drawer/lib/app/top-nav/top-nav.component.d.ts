import { OnInit } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';
export declare class TopNavComponent implements OnInit {
    matEventEmitterService: MatEventEmitterService;
    navService: NavService;
    config: any;
    constructor(matEventEmitterService: MatEventEmitterService, navService: NavService);
    isDrawerOpened: any;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onItemSelected(item: any): void;
}
