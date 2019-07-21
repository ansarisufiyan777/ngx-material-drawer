import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[card-host]'
})
export class CardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}