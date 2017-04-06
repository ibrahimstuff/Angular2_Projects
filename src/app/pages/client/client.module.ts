import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './client.routing';
import { GeneralModule } from '../general/general.module'
import { Client } from './client.component';
import { FeedList } from './feedList/feedList.component';

@NgModule({
    imports : [
        CommonModule,
        routing,
        GeneralModule
    ],
    declarations : [
        Client,
        FeedList
    ]
})

export class ClientModule {}
