import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchType } from '../../../../search-service/search-service.component';
import { GeneralServiceConfig } from '../../../models/hospital.models';
import { ServiceSearchConfig } from 'src/app/dossier/models/dossier-core.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { SearchServiceResult } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-add-general-service',
  templateUrl: './add-general-service.component.html',
  styleUrls: ['./add-general-service.component.css']
})
export class AddGeneralServiceComponent {

  @Input() config!: GeneralServiceConfig;

  @Output() cancel = new EventEmitter<void>();
  @Output() selectService = new EventEmitter<SearchServiceResult>();

  searchType = SearchType;

  onCancel() {
    this.cancel.emit();
  }

  onSelectService(service: SearchServiceResult) {
    this.selectService.emit(service);
  }

  get searchConfig() {
    return {
      serviceType: this.config.serviceType,
      searchType: SearchType.select,
      hospitalType: this.config.hospitalType
    } as ServiceSearchConfig;
  }

}
