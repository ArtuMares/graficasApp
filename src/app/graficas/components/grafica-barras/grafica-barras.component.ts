import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styles: [
  ]
})
export class GraficaBarrasComponent implements OnInit {

  @Input() horizontal:boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // // We use these empty structures as placeholders for dynamic theming.
    // scales: {
    //   x: {},
    //   y: {
    //     min: 10
    //   }
    // },
    //  plugins: {
    //    legend: {
    //      display: true,
    //    }
    //  }
  };
  public barChartType: ChartType = "bar";

  @Input() barChartData: ChartData<'bar'> = {
    
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012', "2013" ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40, 82 ], label: 'Series A', backgroundColor:"#0D36FA", hoverBackgroundColor:"#0BD6DE" },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor: "#0B67DE" , hoverBackgroundColor:"#0BD6DE" },
      { data: [ 92, 100, 85, 42, 86, 54, 9 , 19], label: 'Series C' ,  backgroundColor: "#00ADF5" , hoverBackgroundColor:"#0BD6DE" },
    ]
  };
  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType= "line";
    }
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
}
