import {
  Component,
  HostBinding,
  Input,
  OnInit,
  AfterViewInit,
} from "@angular/core";

import { NgxNavService } from "../utils/nav.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { NgxMaterialDrawerEventEmitter } from "../utils/mat-event-emitter.service";

@Component({
  selector: "lib-nav-list-item-mini",
  templateUrl: "./nav-list-item-mini.component.html",
  styleUrls: ["./nav-list-item-mini.component.scss"],
  animations: [
    trigger("indicatorRotate", [
      state("collapsed", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      ),
    ]),
  ],
})
export class NgxNavListItemMiniComponent implements OnInit {
  expanded: boolean = false;
  @HostBinding("attr.aria-expanded") ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth: number = 0;

  constructor(
    public navService: NgxNavService,
    public matEventEmitterService: NgxMaterialDrawerEventEmitter
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      if (item.onClickClose) {
        this.navService.closeNav();
      }
      this.matEventEmitterService.sideNavItemClick(item);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
      if (this.expanded) {
        this.matEventEmitterService.sideNavItemExpanded(item);
      } else {
        this.matEventEmitterService.sideNavItemCollapsed(item);
      }
    }
  }
}
