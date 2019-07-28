import { Component, OnInit, Input } from '@angular/core';
import { INgxCard } from 'projects/ngx-material-drawer/src/lib/app/interface';

@Component({
  selector: 'app-blue-card',
  templateUrl: './blue-card.component.html',
  styleUrls: ['./blue-card.component.scss']
})
export class BlueCardComponent implements OnInit, INgxCard {
  @Input() data;
  constructor() { }

  ngOnInit() {

  }

}
