import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { exist } from '../utils/object-util';

@Directive({
  selector: '[limit]'
})
export class MaxDirective {

  @Input('maximum') set max(maximum: number | undefined) {
    if (maximum !== undefined) {
      this.maximum = maximum;
      this.maxValidValue = maximum;
    }
  };
  maxValidValue!: number | undefined;
  minValidValue!: number | undefined;
  maximum!: number | undefined;
  minimum!: number | undefined;

  @Input("minimum") set min(minimum: number | undefined) {
    if (minimum !== undefined) {
      this.minimum = minimum;
      this.minValidValue = minimum;
    }
  }

  constructor(
    private control: NgControl
  ) { }

  @HostListener("input", ['$event']) onChange() {
    let value = this.control.control?.value;

    if (this.maximum == this.minimum) {
      this.control.control?.setValue(this.minimum);
      return;
    }

    if (exist(value)) {
      let parsedValue = parseInt(value);
      if (parsedValue == parsedValue) {
        if (exist(this.maximum)) {
          if (parsedValue <= (this.maximum as number)) {
            this.maxValidValue = parsedValue;
          } else {
            this.control.control?.setValue(this.maxValidValue ?? this.maximum);
          }
        }

        if (exist(this.minimum)) {
          if (parsedValue >= (this.minimum as number)) {
            this.minValidValue = parsedValue;
          } else {
            this.control.control?.setValue(this.minValidValue ?? this.minimum);
          }
        }
      }
    }
  }

}
