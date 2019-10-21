import { Component, OnInit, Input } from '@angular/core';
import { INgxCard } from 'projects/ngx-material-drawer/src/lib/app/interface';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent implements OnInit,INgxCard {
  @Input() data: any;
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = "bubble";
  public bubbleChartLegend = false;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 11, y: 5, r: 15 },
        { x: 25, y: 5, r: 15 },
        { x: 5, y: 25, r: 15 },
        { x: 6, y: 25, r: 15 },
        { x: 7, y: 25, r: 15 },
        { x: 8, y: 25, r: 15 },
        { x: 9, y: 25, r: 15 },
        { x: 10, y: 24, r: 15 },
        { x: 11, y: 23, r: 15 },
        { x: 12, y: 22, r: 15 },
        { x: 11, y: 21, r: 15 },
        { x: 12, y: 1, r: 16 },
        { x: 13, y: 2, r: 17 },
        { x: 14, y: 3, r: 18 },
        { x: 15, y: 4, r: 12 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 }
      ],
      label: "Series A"
    }
  ];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.bubbleChartData[0].data.push(<any>{
        x: 1 + i,
        y: 21 - i,
        r: 25 - i
      });
      this.bubbleChartData[0].data.push(<any>{
        x: 30 - i,
        y: 0 + i,
        r: 1 + i
      });
    }
  }

  ngOnInit() {
    // console.log(this.data)
  }

}
