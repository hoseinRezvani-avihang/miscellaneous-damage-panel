import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PartnerSearchResult, PartnerType, SelectPartner } from 'src/app/dossier/models/partner.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.css']
})
export class SearchPartnerComponent implements OnInit {

  @Input() partner!: SelectPartner | null;
  @Output() selectPartner = new EventEmitter<SelectPartner>();

  parnterTypes = PartnerType.getTypes;
  dateControl = new FormControl(new Date());
  
  partnerForm = new FormGroup({
    partner: new FormControl<Partial<PartnerSearchResult>>({}, Validators.required),
    serviceDate: new FormControl(new Date()),
    partnerType: new FormControl(PartnerType.CLINIC.symbol as string),
  })
  
  partnerTypeControl = this.partnerForm.get("partnerType") as FormControl;
  partnerSearchControl = new FormControl("", Validators.required);

  constructor(
    private dossierCoreService: DossierCoreDataService
    ) {
    
  }

  ngOnInit(): void {
    if (this.partner) {
      this.partnerForm.patchValue(this.partner);
    }
  }

  onSelectPartner(partnerResult: PartnerSearchResult) {
    this.partnerForm.patchValue({
      "partner": partnerResult
    })
  }

  selectPartnerDone() {
    // this.dossierCoreService.next();
    this.selectPartner.emit(this.partnerForm.value as SelectPartner);
    console.log(this.partnerForm.value);
  }

}
