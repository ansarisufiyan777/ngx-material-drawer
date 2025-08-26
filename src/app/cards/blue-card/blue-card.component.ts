import { Component, OnInit, Input } from "@angular/core";
import { INgxCard } from "projects/ngx-material-drawer/src/lib/app/interface";
import { ChartDataset, ChartOptions } from "chart.js";

@Component({
  selector: "app-blue-card",
  templateUrl: "./blue-card.component.html",
  styleUrls: ["./blue-card.component.scss"],
})
export class BlueCardComponent implements OnInit, INgxCard {
  @Input() data: any;

  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
  ];

  public lineChartLabels: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors = [
    {
      borderColor: "transparent",
      backgroundColor: "lightblue",
    },
  ];

  public lineChartLegend = false;
  public lineChartType = "line";
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
