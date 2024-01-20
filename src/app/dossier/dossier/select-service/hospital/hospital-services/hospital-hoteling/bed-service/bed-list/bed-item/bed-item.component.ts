import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bed-item',
  templateUrl: './bed-item.component.html',
  styleUrls: ['./bed-item.component.css']
})
export class BedItemComponent {

  @Input() bedControl!: AbstractControl;

  get cntControl() {
    return this.bedControl?.get("cnt") as FormControl
  }

  get payAmountControl() {
    return this.bedControl?.get("payAmount") as FormControl
  }

  get nursingServiceControl() {
    return this.bedControl?.get("nursingService") as FormControl
  }

  get nursingCareControl() {
    return this.bedControl?.get("nursingCare") as FormControl
  }

}
