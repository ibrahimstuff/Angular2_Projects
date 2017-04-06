import { Routes, RouterModule }  from '@angular/router';

import { Client } from './client.component'

const routes: Routes = [
    {
        path : '',
        component : Client
    }
]

export const routing = RouterModule.forChild(routes);