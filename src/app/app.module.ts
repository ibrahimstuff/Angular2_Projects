import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import {NavBar} from './navBar/navBar.component';
import { FeedDashboard } from './feedDashboard/feedDashboard.component';
import { FeedInfo } from './feedDashboard/feedInfo.component';
import { FeedList } from './feedByClient/feedList.component';
import { FeedByClient } from './feedByClient/feedByClient.component';
import { AlphaNav } from './feedByClient/alphaNav.directive'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    FeedDashboard,
    FeedInfo,
    FeedList,
    FeedByClient,
    AlphaNav
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  exports : [ 
    NavBar,
    FeedDashboard,
    FeedInfo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
