import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ColorChange]',
})
export class ColorChangeDirective {
  colors = ['red', 'blue', 'green', 'yellow'];

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.colors[0]);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(this.colors[2]);
  }

  changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
