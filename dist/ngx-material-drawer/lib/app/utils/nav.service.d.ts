import { BehaviorSubject } from 'rxjs';
import { MatEventEmitterService } from './mat-event-emitter.service';
export declare class NavService {
    matEventEmitterService: MatEventEmitterService;
    appDrawer: any;
    isMiniVarient: any;
    isOpened: boolean;
    currentUrl: BehaviorSubject<string>;
    isDrawerOpened: boolean;
    constructor(matEventEmitterService: MatEventEmitterService);
    closeNav(): void;
    openNav(): void;
    toggleNav(): void;
    getData(b: any): object;
}
