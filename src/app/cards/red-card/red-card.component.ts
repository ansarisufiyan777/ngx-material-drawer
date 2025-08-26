import { Component, OnInit, Input } from "@angular/core";
import { INgxCard } from "projects/ngx-material-drawer/src/lib/app/interface";
import { ChartOptions, ChartType, ChartDataset } from "chart.js";

@Component({
  selector: "app-red-card",
  templateUrl: "./red-card.component.html",
  styleUrls: ["./red-card.component.scss"],
})
export class RedCardComponent implements OnInit, INgxCard {
  @Input() data: any;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: string[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
  ];

  constructor() {}

  ngOnInit() {
    // console.log(this.data)
  }
}
