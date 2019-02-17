import { OnInit } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';
export declare class NavListItemComponent implements OnInit {
    navService: NavService;
    matEventEmitterService: MatEventEmitterService;
    expanded: boolean;
    ariaExpanded: boolean;
    item: any;
    depth: number;
    constructor(navService: NavService, matEventEmitterService: MatEventEmitterService);
    ngOnInit(): void;
    onItemSelected(item: any): void;
}
