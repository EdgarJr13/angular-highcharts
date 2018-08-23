import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-simplechart',
  templateUrl: './simplechart.component.html',
  styleUrls: ['./simplechart.component.css']
})
export class SimplechartComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [10, 20, 30, 40, 50]
    }]
  });

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  constructor() { }

  ngOnInit() {
  }

}
