import { Component, OnInit, Input } from '@angular/core';
import { INgxCard } from 'projects/ngx-material-drawer/src/lib/app/interface';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent implements OnInit,INgxCard {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
