import { Component, Input } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-category',
  templateUrl: './hospital-category.component.html',
  styleUrls: ['./hospital-category.component.css']
})
export class HospitalCategoryComponent {

  @Input() config!: HospitalCategoryConfig;

}
