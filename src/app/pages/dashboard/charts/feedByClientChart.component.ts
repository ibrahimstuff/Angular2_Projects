import { Component } from '@angular/core'

declare var require: any;
const Highcharts = require('../../../../../node_modules/highcharts/highstock.src');

Highcharts.setOptions({
    colors: ['#aee256', '#68e256', '#56e289', '#56e2cf', '#56aee2', '#5668e2', '#8a56e2', '#cf56e2', '#e256ae', '#e25668']
});

@Component({
    selector : 'feed-by-client-chart',
    template : `<chart [options]="options" 
        style="height: 400px; width: 525px;" 
        class="contains-chart">
    </chart>
    `
})


export class FeedByClientChart {
    constructor() {
        this.options = {
           chart: {
					type: 'pie'
			},
			title: {
					text: 'Feeds by client'
			},
			plotOptions: {
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
                this.feedScheduleForClient();
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
    feedScheduleForClient() {

    }
}