import { BehaviorSubject } from 'rxjs';
import { NgxMaterialDrawerEventEmitter } from './mat-event-emitter.service';
export declare class NgxNavService {
    matEventEmitterService: NgxMaterialDrawerEventEmitter;
    appDrawer: any;
    isMiniVarient: any;
    isOpened: boolean;
    currentUrl: BehaviorSubject<string>;
    isDrawerOpened: boolean;
    constructor(matEventEmitterService: NgxMaterialDrawerEventEmitter);
    closeNav(): void;
    openNav(): void;
    toggleNav(): void;
    getData(b: any): object;
}
