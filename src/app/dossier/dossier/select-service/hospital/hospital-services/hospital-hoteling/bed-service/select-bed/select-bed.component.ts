import { Component } from '@angular/core';
import { Bed } from '../../../../models/Bed.models';

@Component({
  selector: 'app-select-bed',
  templateUrl: './select-bed.component.html',
  styleUrls: ['./select-bed.component.css']
})
export class SelectBedComponent {

  beds = Bed.beds;

}
