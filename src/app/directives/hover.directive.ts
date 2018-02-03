import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // console.log(element.nativeElement);
    // renderer.setStyle(element.nativeElement, "background-color", "red");
  }

  @HostListener("mouseover") onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "red");
  }

  @HostListener("mouseout") onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "white");
  }

  @HostListener("click") onclick() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "blue");
  }

}
