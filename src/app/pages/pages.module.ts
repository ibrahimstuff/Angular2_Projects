import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';

import { Pages } from './pages.component';
import { NavBar } from './navBar/navBar.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [Pages, NavBar]
})
export class PagesModule {

}
