import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { NgxNavService } from '../utils/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatMenu } from '@angular/material/menu';
import { NgxMaterialDrawerEventEmitter } from '../utils/mat-event-emitter.service';
import { NgxUtilsService } from '../utils/utils.service';

@Component({
  selector: 'lib-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  exportAs: 'menuInMenuListItemComponent'
})
export class NgxMenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @ViewChild('childMenu', { static: true }) public childMenu: any;
  @Input() menus: any;
  @Input() depth: number;
  @Input() matMenu: MatMenu;
  constructor(public navService: NgxNavService,
    public matEventEmitterService: NgxMaterialDrawerEventEmitter,
    public ngxUtilsService: NgxUtilsService) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.menus.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.menus.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {

      this.matEventEmitterService.menuItemClick(item);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
      if (this.expanded) {
        this.matEventEmitterService.menuItemExpanded(item);
      } else {
        this.matEventEmitterService.menuItemCollapsed(item);
      }
    }
  }
}
