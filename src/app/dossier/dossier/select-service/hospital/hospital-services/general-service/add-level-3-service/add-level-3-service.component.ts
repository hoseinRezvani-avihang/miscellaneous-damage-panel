import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralServiceConfig } from '../../../models/hospital.models';

@Component({
  selector: 'app-add-level-3-service',
  templateUrl: './add-level-3-service.component.html',
  styleUrls: ['./add-level-3-service.component.css']
})
export class AddLevel3ServiceComponent {

  @Input() config!: GeneralServiceConfig;
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

}
