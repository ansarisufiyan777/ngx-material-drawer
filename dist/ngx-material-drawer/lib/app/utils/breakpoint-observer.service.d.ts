import { Observable } from 'rxjs';
export declare const POINTS_NAME: string[];
export declare class BreakpointObserverService {
    private _size$;
    constructor();
    readonly size$: Observable<string>;
    private _getScreenSize;
}
