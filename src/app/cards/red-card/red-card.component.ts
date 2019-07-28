import { Component, OnInit, Input } from '@angular/core';
import { INgxCard } from 'projects/ngx-material-drawer/src/lib/app/interface';

@Component({
  selector: 'app-red-card',
  templateUrl: './red-card.component.html',
  styleUrls: ['./red-card.component.scss']
})
export class RedCardComponent implements OnInit,INgxCard {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    // console.log(this.data)
  }

}
