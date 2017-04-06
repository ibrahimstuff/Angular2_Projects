import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  template : `
    <div class="wrapper">
    <nav-bar></nav-bar>
    <div class="content-wrapper">
      <router-outlet></router-outlet>
    </div>
    </div>   
  `
})
export class Pages {
  
}
