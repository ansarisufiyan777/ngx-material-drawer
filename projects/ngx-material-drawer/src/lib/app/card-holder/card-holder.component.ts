import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CardDirective } from '../directive/card.directive';
import { INgxCard } from '../interface';

@Component({
  selector: 'lib-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit {
  @Input() data;
  @ViewChild(CardDirective) cardHost: CardDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //this.data && this.loadComponent()
  }
  ngAfterViewInit() {
    this.cardHost && this.data && this.loadComponent()
  }
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);

    const viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<INgxCard>componentRef.instance).data = this.data.data;
  }
}
