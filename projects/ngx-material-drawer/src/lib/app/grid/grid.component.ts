import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
@Component({
  selector: 'ngx-material-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class NgxGridComponent implements OnInit {
  @Input() data;
  
  constructor() { }

  ngOnInit() {
  }
}
