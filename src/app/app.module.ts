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
import { FeedTitle } from './general/feedTitle.component';
import { FeedFooter } from './general/feedFooter.component'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    FeedDashboard,
    FeedInfo,
    FeedList,
    FeedByClient,
    FeedTitle,
    FeedFooter
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
