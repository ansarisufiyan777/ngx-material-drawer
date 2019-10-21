import { Component, OnInit, Input } from '@angular/core';
import { INgxCard } from 'projects/ngx-material-drawer/src/lib/app/interface';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-blue-card',
  templateUrl: './blue-card.component.html',
  styleUrls: ['./blue-card.component.scss']
})
export class BlueCardComponent implements OnInit, INgxCard {
  @Input() data;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'transparent',
      backgroundColor: 'lightblue',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit() {

  }

}
