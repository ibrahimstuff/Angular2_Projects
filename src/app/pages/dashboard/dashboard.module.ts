import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';

import { routing } from './dashboard.routing';
import { GeneralModule } from '../general/general.module';
import { Dashboard } from './dashboard.component';
import { FeedInfo } from './info/feedInfo.component';
import { FeedInfoService } from './info/feedInfo.service'
import { WeeklyMonthlyReport } from './report/weeklyMonthlyReport.component';
import { ReportService } from './report/report.service';
import { TrendReport } from './trend/trendReport.component';
import { FeedByClientChart, FeedScedForClient, MonthlyBarChart, WeeklyBarChart } from './charts'

@NgModule({
    imports : [
        CommonModule,
        ChartModule,
        routing,
        GeneralModule
    ],
    declarations : [
        Dashboard,
        FeedInfo,
        WeeklyMonthlyReport,
        TrendReport,
        FeedByClientChart,
        FeedScedForClient,
        MonthlyBarChart,
        WeeklyBarChart
    ],
    providers : [
        FeedInfoService,
        ReportService
    ]
})

export class DashboardModule {}
