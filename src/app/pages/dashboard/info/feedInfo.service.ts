import {Injectable} from '@angular/core';

@Injectable()
export class FeedInfoService {
    
    private _data = {
        "failed" : 2,
        "in_progress" : 13,
        "completed" : 10,
        "rerun" : 12,
        "deadlines" : 3
    }

    getData() {
        return this._data;
    }
}