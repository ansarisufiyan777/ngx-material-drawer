import { OnInit } from '@angular/core';
import { NavService } from '../utils/nav.service';
import { MatMenu } from '@angular/material';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';
export declare class MenuListItemComponent implements OnInit {
    navService: NavService;
    matEventEmitterService: MatEventEmitterService;
    expanded: boolean;
    ariaExpanded: boolean;
    childMenu: any;
    menus: any;
    depth: number;
    matMenu: MatMenu;
    constructor(navService: NavService, matEventEmitterService: MatEventEmitterService);
    ngOnInit(): void;
    onItemSelected(item: any): void;
}
