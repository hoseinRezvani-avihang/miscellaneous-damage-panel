import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralServiceConfig } from '../../../models/hospital.models';
import { SearchType } from '../../../../search-service/search-service.component';
import { ServiceSearchConfig } from 'src/app/dossier/models/dossier-core.models';

@Component({
  selector: 'app-add-level-3-service',
  templateUrl: './add-level-3-service.component.html',
  styleUrls: ['./add-level-3-service.component.css']
})
export class AddLevel3ServiceComponent {

  @Input() config!: GeneralServiceConfig;
  @Output() cancel = new EventEmitter<void>();

  get searchConfig() {
    return {
      serviceType: this.config.serviceType,
      searchType: SearchType.quick,
      hospitalType: this.config.hospitalType
    } as ServiceSearchConfig;
  }

  onCancel() {
    this.cancel.emit();
  }

}
