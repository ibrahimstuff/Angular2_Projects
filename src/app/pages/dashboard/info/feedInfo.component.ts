import { Component } from '@angular/core';

import { FeedInfoService } from './feedInfo.service'

@Component({
    selector : 'feed-info',
    templateUrl: './feedInfo.component.html'
})

export class FeedInfo {

    public Feed ;

    constructor(private _feedInfo:FeedInfoService) {

    }
    
    ngOnInit() {
        this._loadFeed();
    }

    private _loadFeed() {
        this.Feed = this._feedInfo.getData();
    }

}