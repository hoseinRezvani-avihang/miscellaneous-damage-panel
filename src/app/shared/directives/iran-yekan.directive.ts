import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[iranYekan]'
})
export class IranYekanDirective {

  constructor() { }

  @HostBinding("style.fontFamily") fontFamily = "iran-yekan"

}
