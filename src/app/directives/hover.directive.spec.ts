import { HoverDirective } from './hover.directive';
import {  ElementRef, Renderer2 } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    let renderer: Renderer2;
    const directive = new HoverDirective(el,renderer);
    expect(directive).toBeTruthy();
  });
});
