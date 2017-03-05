import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedByClient } from './feedByClient/feedByClient.component'
import { FeedDashboard } from './feedDashboard/feedDashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash',  component: FeedDashboard },
  { path: 'clients', component: FeedByClient }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}