import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PartnerInfo,
  PartnerInfoResult,
  PartnerSearchResult,
  PartnerType,
  SearchPartnerConfig,
  SelectPartner,
} from 'src/app/dossier/models/partner.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';
import { ParnterService } from '../services/parnter.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.css'],
})
export class SearchPartnerComponent implements OnInit {
  @Input() partner!: SelectPartner | null;
  @Input() config!: SearchPartnerConfig;
  @Output() selectPartner = new EventEmitter<SelectPartner>();

  parnterTypes = PartnerType.getTypes;
  dateControl = new FormControl(new Date());

  partnerForm = new FormGroup({
    partner: new FormControl<PartnerInfoResult>(
      {} as PartnerInfoResult,
      Validators.required
    ),
    serviceDate: new FormControl(new Date()),
    partnerType: new FormControl(PartnerType.CLINIC.symbol as string),
  });

  partnerTypeControl = this.partnerForm.get('partnerType') as FormControl;
  partnerControl = this.partnerForm.get('partner') as FormControl;
  partnerSearchControl = new FormControl('', Validators.required);

  constructor(
    private dossierCoreService: DossierCoreDataService,
    private partnerService: ParnterService
  ) {}

  ngOnInit(): void {
    if (this.partner) {
      this.partnerForm.patchValue(this.partner);
    }

    this.partnerTypeControl.valueChanges.subscribe(() => {
      this.partnerSearchControl.reset();
      this.partnerControl.setValue('', { emitEvent: false, onlySelf: false });
    });
  }

  onSelectPartner(partnerResult: PartnerSearchResult) {
    this.partnerService.fetchMemberInfo(partnerResult.id).subscribe({
      next: (partnerInfo: PartnerInfoResult) => {
        this.partnerForm.patchValue({
          partner: partnerInfo,
        });
      },

      error: (err) => {
        this.partnerSearchControl.setValue('', {
          emitEvent: false,
          onlySelf: false,
        });
      },
    });
  }

  selectPartnerDone() {
    if (this.partnerForm.valid && this.partnerSearchControl.valid) {
      this.selectPartner.emit(this.partnerForm.value as SelectPartner);
    }
  }
}
