import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { GraficasModule } from '../../graficas.module';
import { ChartData, ChartType } from 'chart.js';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})

export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [ /*'Download Sales', 'In-Store Sales', 'Mail-Order Sales', "others" */];



  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [ 250, 130, 70, 81 ] , backgroundColor:["#0D36FA", "#0B67DE", "#00ADF5", "#00FDF5"], hoverBackgroundColor: "#0BD6DE"}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor( private gs:GraficasService) { 

  }
 
  ngOnInit(): void {
    this.gs.getUsuariosRedesSocialesData().subscribe(
      ({labels, values})=>{
        delay(1000);
        this.doughnutChartData.labels=labels;
        this.doughnutChartData.datasets= [
          {data: values, backgroundColor:["#0D36FA", "#0B67DE", "#00ADF5", "#00FDF5","#0FDF50"], hoverBackgroundColor: "#0BD6DE"
        }];
      });
  }
}
