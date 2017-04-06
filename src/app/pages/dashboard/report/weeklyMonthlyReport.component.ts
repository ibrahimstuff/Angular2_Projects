import { Component, AfterViewInit } from '@angular/core';

import { ReportService } from './report.service'

declare var $:JQueryStatic;

@Component({
    selector : 'weekly-monthly-report',
    templateUrl: './weeklyMonthlyReport.component.html'
})

export class WeeklyMonthlyReport implements AfterViewInit {
    tab = 1;
    link = '#link';
    // className = "odd";
    public weeklyReport:Array<Object>;
    public monthlyReport:Array<Object>;

    constructor(private _report:ReportService) {

    }
    ngOnInit() {
        this._loadReport();
    }
    setTab( newTab ){
        this.tab = newTab;
    }
    isSet(tabNum) {
        return this.tab == tabNum;
    }
    ngAfterViewInit() {
        $("a#link").click(function(){
            return false;
        })
    }
    // changeClassName() {
    //     if(this.className === "odd") {
    //         return this.className = "even";
    //     }
    //     else {
    //         return this.className = "odd";
    //     }
    // }
    private _loadReport() {
        this.weeklyReport = this._report.getWeeklyData();
        this.monthlyReport = this._report.getMonthlyData();
    }
}