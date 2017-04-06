import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector : 'feed-list',
    templateUrl : './feedList.component.html'
})

export class FeedList implements AfterViewInit { 
    
    ngAfterViewInit() {
        var alphaNav = require('../../../../assets/js/alphaNav.min');
        var list = $("ul#list-content");
        list.alphaNav({
            arrows: false,
            debug: true,
            growEffect: true,
            overlay: true,
            scrollDuration: '250ms',
            trimList: true
        });
    }
}