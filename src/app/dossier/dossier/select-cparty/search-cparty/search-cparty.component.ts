import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CPartyResult, CpartyInfo } from 'src/app/dossier/models/cparty.models';

@Component({
  selector: 'app-search-cparty',
  templateUrl: './search-cparty.component.html',
  styleUrls: ['./search-cparty.component.css']
})
export class SearchCpartyComponent implements OnInit {

  @Input() cpartyInfo!: CpartyInfo | null;
  @Output() selectCparty = new EventEmitter<CpartyInfo>

  cpartyForm = new FormGroup({
    cparty: new FormControl<CPartyResult>({} as CPartyResult, Validators.required), 
    serviceDate: new FormControl(new Date(), Validators.required)
  });

  cpartyControl = this.cpartyForm.get("cparty") as FormControl;
  cpartySearchControl = new FormControl("", Validators.required);

  ngOnInit(): void {
    if (this.cpartyInfo) {
      this.cpartyForm.patchValue(this.cpartyInfo);
      this.cpartySearchControl.setValue(this.cpartyInfo.cparty.fullName, {emitEvent: false, onlySelf: false})
    }
  }

  onSelectCparty(cparty: CPartyResult) {
    this.cpartyControl.setValue(cparty);
  }
  
  addCparty() {
    this.selectCparty.emit(this.cpartyForm.value as CpartyInfo);
  }

}
