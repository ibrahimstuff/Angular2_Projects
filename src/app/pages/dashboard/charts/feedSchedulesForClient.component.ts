import { Component } from '@angular/core'

declare var require: any;
const Highcharts = require('../../../../../node_modules/highcharts/highstock.src');

Highcharts.setOptions({
    colors: ['#5DA5DA', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F', '#F15854', '#b4d062', '#4D4D4D', '#5DA5DA']
});

@Component({
    selector : 'feed-sced-client',
    template : `<chart [options]="options" 
        style="height: 400px; width: 525px;" 
        class="contains-chart">
    </chart>
    `
})

export class FeedScedForClient {
    constructor() {
        this.options = {
           chart: {
          type: 'pie'
      },
      title: {
          text: 'Feed Schedule for client'
      },
      plotOptions: {
        pie: {
              borderColor: '#ffffff',
              innerSize: '50%'
          },
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y}'
              }
          }
      },
      credits: {
      enabled: false
  },
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
      },
      series: [{
          name: 'Client',
          colorByPoint: true,
            cursor: 'pointer',
          point:{
            events:{
              click:function(){
                // var theModal = $("#feedScheduleForClientmodel").modal({
                //     show: true
                //     });
              }
            }
          },
          data: [{
              name: 'AEGONLPN',
              y:5,
              drilldown: null
          }, {
              name: 'Intelliflo',
              y: 10,
              drilldown: null
          }, {
              name: 'Novia',
              y: 5,
              drilldown: null
          }, {
              name: 'Zurich',
              y: 2,
              drilldown: null
          }, {
              name: 'NoviaGlobal',
              y: 1,
              drilldown: null
          }, {
              name: 'Standard Life',
              y:6 ,
              drilldown: null
          }]
      }]
        }
    }
    options: Object;
    
}