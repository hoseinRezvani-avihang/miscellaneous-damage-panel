import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visit-item',
  templateUrl: './visit-item.component.html',
  styleUrls: ['./visit-item.component.css']
})
export class VisitItemComponent {
  @Input() visitControl!: AbstractControl;

  get cntControl() {
    return this.visitControl?.get("cnt") as FormControl
  }

  get payAmountControl() {
    return this.visitControl?.get("payAmount") as FormControl
  }
}
