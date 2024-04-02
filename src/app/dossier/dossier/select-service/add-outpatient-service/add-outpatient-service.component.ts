import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchServiceComponent, SearchType } from '../search-service/search-service.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubsDetail, OutpatientServiceInput, SearchServiceResult } from 'src/app/dossier/models/service.models';
import { DossierSubsService } from '../services/dossier-subs.service';
import { finalize } from 'rxjs';
import { ServiceSearchConfig } from 'src/app/dossier/models/dossier-core.models';

@Component({
  selector: 'app-add-outpatient-service',
  standalone: true,
  imports: [CommonModule, SearchServiceComponent, SharedModule],
  templateUrl: './add-outpatient-service.component.html',
  styleUrls: ['./add-outpatient-service.component.css']
})
export class AddOutpatientServiceComponent implements OnInit {

  @Input() config!: OutpatientServiceInput;

  @Output() cancel = new EventEmitter<void>();

  service!: SearchServiceResult;

  form!: FormGroup;
  loading = false;

  constructor(
    private dossierSubService: DossierSubsService
  ) { };

  ngOnInit(): void {
    this.form = new FormGroup({
      service: new FormControl<SearchServiceResult | null>(null, Validators.required),
      cnt: new FormControl(1),
      isMarkMatchService: new FormControl(false),
      claimAmount: new FormControl(null),
      ISGlobal: new FormControl(true),
      cpartyId: new FormControl(this.config.cparties[0].id),
      description: new FormControl(null),
      consumption: new FormControl(null),
      numberOfPeriod: new FormControl(1),
      serviceType: new FormControl(this.config.serviceType)
    });
  };

  onSelectService(service: SearchServiceResult) {
    (this.form.get("service") as FormControl).setValue(service);
    this.service = service;
  };

  addService() {
    this.loading = true;
    this.dossierSubService.fetchOmr(this.form.value as SubsDetail)
      .subscribe({
        next: () => {
          this.close();
        },
        complete: () => {
          this.loading = false;
        }
      });
  };

  get searchConfig() {
    return {
      serviceType: this.config.searchType,
      searchType: SearchType.quick,
    } as ServiceSearchConfig;
  }

  close() {
    this.cancel.emit();
  }

}
