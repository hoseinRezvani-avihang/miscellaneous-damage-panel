import { Component } from '@angular/core';
import { HospitalService } from './services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
  providers: [
    HospitalService
  ]
})
export class HospitalComponent {

}
