import { Component } from '@angular/core';

declare var require: any;
const Highcharts = require('../../../../../node_modules/highcharts/highstock.src');

Highcharts.setOptions({
    colors: ['#6045C8','#E34522','#dd4b39']
});


@Component({
    selector : 'weekly-bar-chart',
    template : `<chart [options]="options" 
        style="height: 400px; width: 525px;" 
        class="contains-chart">
    </chart>`
})

export class WeeklyBarChart {
     constructor() {
        this.options = {
            chart: {
        type: 'column'
    },
    title: {
        text: 'Weekly Report (Last Week)'
    },
    subtitle: {
        text: 'Sep 19 - Sep 23'
    },
    xAxis: {
        categories: [
            'Sep-19',
            'Sep-20',
            'Sep-21',
            'Sep-22',
            'Sep-23',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
       headerFormat: '<span style="font-size:11px">{series.name}</span>',
       pointFormat: '<span style="color:{point.color}">{point.name}</span>:<b>{point.y}</b><br/>'
   },

    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0
        },
        series: {
              pointWidth: 28,
              cursor: 'pointer',
              point:{
                events:{
                  click:function(){
                    alert(this.y)
                  }
                }
              }
          }
    },

    credits: {
    enabled: false
},

    series: [{
        name: 'Failure',
        data: [10, 20, 5, 15, 20],
         colors: ['#058DC7']

    }, {
        name: 'Success',
        data: [30, 40, 25, 5, 3]

    }, {
        name: 'Deadline Breach',
        data: [5, 6, 8, 10, 20]

    }]
        };
    }
    options: Object;
}