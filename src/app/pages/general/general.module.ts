import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedFooter } from './footer/feedFooter.component';
import { FeedTitle } from './title/feedTitle.component';

@NgModule({
    imports : [
        CommonModule
    ],
    declarations : [
        FeedFooter,
        FeedTitle,
    ],
    exports : [
      FeedFooter,
      FeedTitle  
    ]
})

export class GeneralModule {}
