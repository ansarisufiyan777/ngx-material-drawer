import { OnInit, ComponentFactoryResolver } from '@angular/core';
import { CardDirective } from '../directive/card.directive';
export declare class CardHolderComponent implements OnInit {
    private componentFactoryResolver;
    cardData: any;
    cardHost: CardDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    loadComponent(): void;
}
