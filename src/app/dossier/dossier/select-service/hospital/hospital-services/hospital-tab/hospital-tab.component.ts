import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HospitalTabs } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-tab',
  templateUrl: './hospital-tab.component.html',
  styleUrls: ['./hospital-tab.component.css']
})
export class HospitalTabComponent {

  @Input() tabInfo!: HospitalTabs;
  @Input() isSelected!: boolean;

  @Output() selectTab = new EventEmitter<void>();
}
