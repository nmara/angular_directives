import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive ({
  selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
  constructor (private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
