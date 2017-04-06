
$(function () {
$('#container1').highcharts({
  colors: ['#605ca8','#f39c12','#dd4b39'],
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
});

$('#container2').highcharts({
    colors: ['#605ca8','#f39c12','#dd4b39'],
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
});


$('#feed-popup-chart-container').highcharts({
    colors: ['#605ca8','#f39c12','#dd4b39'],
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
});







	//  Create the chart - Feeds By Clients
	$('#feedByClientcontainer').highcharts({
    colors: ['#aee256', '#68e256', '#56e289', '#56e2cf', '#56aee2', '#5668e2', '#8a56e2', '#cf56e2', '#e256ae', '#e25668'],
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
                feedScheduleForClient();
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
	});
  feedScheduleForClient();
  $('.refresh').click(function(e) {
        feedScheduleForClient();
    });
});
function feedScheduleForClient() {
  $('#feedschedulesforClient').highcharts({

    colors: ['#5DA5DA', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F', '#F15854', '#b4d062', '#4D4D4D', '#5DA5DA'],

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
                var theModal = $("#feedScheduleForClientmodel").modal({
                    show: true
                    });
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
  });
}


jQuery(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) { // on tab selection event
    jQuery( ".contains-chart" ).each(function() { // target each element with the .contains-chart class
        var chart = jQuery(this).highcharts(); // target the chart itself
        chart.reflow() // reflow that chart
    });
})
