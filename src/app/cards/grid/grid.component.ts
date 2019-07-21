import { Component, OnInit } from '@angular/core';
import { BlueCardComponent } from '../blue-card/blue-card.component';
import { RedCardComponent } from '../red-card/red-card.component';
import { GreenCardComponent } from '../green-card/green-card.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1, component: BlueCardComponent, data: { text: "I am the Blue Component" } },
    { title: 'Card 2', cols: 1, rows: 1, component: RedCardComponent, data: { text: "I am the Red Component" } },
    { title: 'Card 3', cols: 1, rows: 2, component: GreenCardComponent, data: { text: "I am the Green Component" } },
    { title: 'Card 4', cols: 1, rows: 1, component: BlueCardComponent, data: { text: "I am the Blue Component" } }
  ];
  constructor() { }

  ngOnInit() {
  }

}
