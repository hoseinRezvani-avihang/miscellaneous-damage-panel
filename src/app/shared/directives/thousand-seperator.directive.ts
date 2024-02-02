import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[seperator]'
})
export class ThousandSeperatorDirective {

  constructor(private el: ElementRef, private control: NgControl, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const parsedValue = value.toString();
    // const needComma = !parsedValue.includes(",") && parsedValue.length > 3;
    
    // if (parsedValue && needComma) {
      const isNegative = parsedValue.startsWith('-');
      const cleanValue = parsedValue.replace(/[^\d]/g, '');
      const formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');


      if (this.control.control) {
        const newValue = isNegative ? `-${formattedValue}` : formattedValue;
        (this.control.control as FormControl).setValue(newValue, {emitEvent: false});
      }
    // }
  }

}
