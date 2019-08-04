import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CardDirective } from '../directive/card.directive';
import { INgxCard } from '../interface';

@Component({
  selector: 'lib-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit {
  @Input() cardData;
  @ViewChild(CardDirective,{static: true}) cardHost: CardDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.cardHost && this.cardData && this.loadComponent()

  }
  ngAfterViewInit() {
  }
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardData.component);

    const viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<INgxCard>componentRef.instance).data = this.cardData.data;
  }
}
