import { Component } from "@angular/core";

@Component({
    selector:"feed-dashboard",
    template : `
        <feed-title></feed-title>
        <section class="content">
            <feed-info></feed-info>
            <div class="clearfix visible-sm-block"></div>
            <weekly-monthly-report></weekly-monthly-report>
            <div class="clearfix visible-sm-block"></div>
            <trend-report></trend-report>
        </section>
        <feed-footer></feed-footer>
    `
})

export class Dashboard {}