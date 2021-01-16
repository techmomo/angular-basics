import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  linesData:ChartDataSets[]= [
    { data: [55,8,11,97,18], label: 'MALE'},
    { data: [100,88,65,22,32], label: 'FEMALE'}
  ]
  linesLabels:Label[] = ['AUS','US','IN']
  linesColors:Color[] = [
    {
      backgroundColor: 'grey'
    },
    {
      backgroundColor: 'red'
    }
  ]
  linesLegend = true
  lineChartType = 'line'
  lineChartPlugins = []

  // PIE CHART
  pieData:number[]= [
    33,7,60
  ]
  pieLabels:Label[] = ['Oxygen','Nitrogen','Co2']
  pieColors:Color[] = [{
    backgroundColor : ['blue','green','red']
  }]
  pieLegend = true
  pieChartType = 'pie'
  pieChartPlugins = []
  constructor() { }

  ngOnInit(): void {
  }

}
