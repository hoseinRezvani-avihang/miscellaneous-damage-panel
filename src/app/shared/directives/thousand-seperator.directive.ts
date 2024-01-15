import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[seperator]'
})
export class ThousandSeperatorDirective {

  constructor(private el: ElementRef, private control: NgControl, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {

    const isNegative = value.startsWith('-');
    const cleanValue = value.replace(/[^\d]/g, '');
    const formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (this.control.control) {
      const newValue = isNegative ? `-${cleanValue}` : cleanValue;
      this.control.control.setValue(parseFloat(newValue));
      this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
    }
  }

}
