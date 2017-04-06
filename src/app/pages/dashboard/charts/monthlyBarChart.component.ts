import { Component } from '@angular/core';

declare var require: any;
const Highcharts = require('../../../../../node_modules/highcharts/highstock.src');

Highcharts.setOptions({
    colors: ['#605ca8','#f39c12','#dd4b39']
});


@Component({
    selector : 'monthly-bar-chart',
    template : `<chart [options]="options" 
        style="height: 400px; width: 525px;" 
        class="contains-chart">
    </chart>`
})

export class MonthlyBarChart {
     constructor() {
        this.options = {
            chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Report'
    },
    subtitle: {
        text: 'Sep 01 - Sep 30'
    },
    xAxis: {
        categories: [
            'Week-1',
            'Week-2',
            'Week-3',
            'Week-4',
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
        data: [10, 20, 5, 15],
         colors: ['#058DC7']

    }, {
        name: 'Success',
        data: [30, 40, 25, 5]

    }, {
        name: 'Deadline Breach',
        data: [5, 6, 8, 10]

    }]
}
     }
    options: Object;
}