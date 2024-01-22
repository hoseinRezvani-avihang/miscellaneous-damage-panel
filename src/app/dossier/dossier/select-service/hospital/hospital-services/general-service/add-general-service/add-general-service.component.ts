import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchType } from '../../../../search-service/search-service.component';
import { GeneralServiceConfig } from '../../../models/hospital.models';

@Component({
  selector: 'app-add-general-service',
  templateUrl: './add-general-service.component.html',
  styleUrls: ['./add-general-service.component.css']
})
export class AddGeneralServiceComponent {

  @Input() config!: GeneralServiceConfig;
  @Output() cancel = new EventEmitter<void>();

  searchType = SearchType;

  onCancel() {
    this.cancel.emit();
  }

}
