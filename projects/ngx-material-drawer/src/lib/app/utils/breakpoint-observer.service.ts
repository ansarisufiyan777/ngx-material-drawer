import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
export const POINTS_NAME =[
    'xl',
    'lg',
    'md',
    'sm',
    'xs' 
]
const QUERY: Map<string, string> = new Map([
  [POINTS_NAME[0], '(min-width: 1200px)'],
  [POINTS_NAME[1], '(min-width: 992px)'],
  [POINTS_NAME[2], '(min-width: 768px)'],
  [POINTS_NAME[3], '(min-width: 576px)'],
  [POINTS_NAME[4], '(min-width: 0px)'],
]);

@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {
  private _size$: Observable<string>;
  
  constructor() {
    this._size$ = fromEvent(window, 'resize')
      .pipe(
        startWith(this._getScreenSize()),
        map((event: Event) => {
          return this._getScreenSize();
        }),
        distinctUntilChanged(),
        shareReplay(1)
      )
  }

  public get size$(): Observable<string> {
    return this._size$;
  }

  private _getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(QUERY.entries())
      .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
    return newSize;
  }
}
