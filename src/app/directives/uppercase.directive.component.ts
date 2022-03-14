import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[uppercase]'
})

export class Uppercase {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.textTransform = 'uppercase';
    }
}