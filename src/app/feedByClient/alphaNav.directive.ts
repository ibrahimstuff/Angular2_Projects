import { Directive, ElementRef, Input,  } from '@angular/core';

@Directive({ selector: '[alphaNav]' })
export class AlphaNav {
    constructor(el: ElementRef) {
       return true;
    }
}
