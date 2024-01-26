import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralServiceConfig } from '../../../models/hospital.models';
import { SearchType } from '../../../../search-service/search-service.component';
import { ServiceSearchConfig } from 'src/app/dossier/models/dossier-core.models';
import { SearchServiceResult } from 'src/app/dossier/models/service.models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-level-3-service',
  templateUrl: './add-level-3-service.component.html',
  styleUrls: ['./add-level-3-service.component.css']
})
export class AddLevel3ServiceComponent implements OnInit {

  @Input() config!: GeneralServiceConfig;

  @Output() addService = new EventEmitter<SearchServiceResult>();
  @Output() cancel = new EventEmitter<void>();

  serviceForm!: FormGroup;

  ngOnInit(): void {
      this.createForm();
  }

  createForm() {
    this.serviceForm = new FormGroup({
      service: new FormControl(),
      cnt: new FormControl(1),
      ISGlobal: new FormControl(false),
      claimAmount: new FormControl(null),
      serviceType: new FormControl(this.config.type.serviceType),
      isMarkMatchService: new FormControl(false),
      description: new FormControl(null),
      type: new FormControl(this.config.type)
    })
  }

  get searchConfig() {
    return {
      serviceType: this.config.type.serviceSearchType,
      searchType: SearchType.quick,
      hospitalType: this.config.hospitalType
    } as ServiceSearchConfig;
  }

  onSelectService(service: SearchServiceResult) {
    this.serviceForm.get("service")?.setValue(service);
  }

  onAddService() {
    this.addService.emit(this.serviceForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }

}
