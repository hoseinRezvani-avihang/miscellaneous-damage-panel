import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMax]'
})
export class MaxDirective {

  @Input('appMax') set max(maximum: number) {
    this.maximum = maximum;
    this.validValue = maximum;
  };
  validValue!: number;
  maximum!: number

  constructor(
    private control: NgControl
  ) { }

  @HostListener("input", ['$event']) onChange() {
    let value = this.control.control?.value;

    if (value) {
      let parsedValue = parseInt(value);
      if (parsedValue) {
        if (parsedValue <= this.maximum) {
          this.validValue = parsedValue;
        } else {
          this.control.control?.setValue(this.validValue ?? this.maximum);
        }
      }
    }
  }

}
