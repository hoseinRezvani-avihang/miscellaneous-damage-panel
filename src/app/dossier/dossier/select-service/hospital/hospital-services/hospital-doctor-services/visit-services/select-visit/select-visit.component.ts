import { Component } from '@angular/core';
import { Visit } from '../../../../models/Visit.models';

@Component({
  selector: 'app-select-visit',
  templateUrl: './select-visit.component.html',
  styleUrls: ['./select-visit.component.css']
})
export class SelectVisitComponent {

  visits = Visit.visits;

}
