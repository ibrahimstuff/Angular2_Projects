import { Component } from '@angular/core';

@Component({
    selector : 'feed-by-client',
    template: `
        <feed-title></feed-title>
        <section class="content">
            <feed-list></feed-list>
        </section>
        <feed-footer></feed-footer>
    `
})

export class Client {

}