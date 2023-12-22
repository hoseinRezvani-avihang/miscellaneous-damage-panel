import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';
import { ShareInfoItems } from 'src/app/dossier/models/service.models';
import { calculateShareInfoFactors } from 'src/app/dossier/models/dossier.util';

@Component({
  selector: 'app-part-to-whole',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './part-to-whole.component.html',
  styleUrls: ['./part-to-whole.component.css'],
})
export class PartToWholeComponent implements OnInit {
  @Input() set shareInfo(shares: any) {
    this.shares = shares;
    this.shareForm.patchValue(shares);
  };

  @Output() calculate = new EventEmitter<any>();

  shares!: any;

  shareForm = new FormGroup({
    insuredPart: new FormControl(0),
    orgAmount: new FormGroup({
      basePart: new FormControl(0),
      otherPart: new FormControl(0),
      supplementaryPart: new FormControl(0),
      veteranPart: new FormControl(0),
    })
  });

  orgControl = this.shareForm.get("orgAmount") as FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.onOrgAmountChange();
  }

  onOrgAmountChange() {
    this.orgControl.valueChanges.subscribe((org: any) => {
      let orgAmount = org.basePart + org.otherPart + org.supplementaryPart + org.veteranPart;
      let insuredAmount = this.changedPrice - orgAmount;
      this.shareForm.patchValue({
        insuredPart: insuredAmount
      })
    })
  }

  submit() {
    let partToWholeResult = {
      newFactors: this.calcuateFactor(),
      newShares: {
        ...this.shareForm.value, 
        paiedAmount: this.changedPrice,
      }
    };
    this.calculate.emit(partToWholeResult);

  }

  calcuateFactor() {
    let calculatedFactor: ShareInfoItems = {
      basePart: this.shareForm.value.orgAmount?.basePart ?? 0,
      insuredPart: this.shareForm.value.insuredPart ?? 0,
      otherPart: this.shareForm.value.orgAmount?.otherPart ?? 0,
      supplementaryPart: this.shareForm.value.orgAmount?.supplementaryPart ?? 0,
      veteranPart: this.shareForm.value.orgAmount?.veteranPart ?? 0,
    };

    return calculateShareInfoFactors(
      calculatedFactor,
      this.changedPrice ?? 0
    );
  }

  get changedPrice() {
    return (
      // this.shares.paiedAmount
      (this.shareForm.value.orgAmount?.basePart ?? 0) +
      (this.shareForm.value.insuredPart ?? 0) +
      (this.shareForm.value.orgAmount?.otherPart ?? 0) +
      (this.shareForm.value.orgAmount?.supplementaryPart ?? 0) +
      (this.shareForm.value.orgAmount?.veteranPart ?? 0)
    );
  };

  get orgAmount() {
    return (
      (this.shareForm.value.orgAmount?.basePart ?? 0) +
      (this.shareForm.value.orgAmount?.otherPart ?? 0) +
      (this.shareForm.value.orgAmount?.supplementaryPart ?? 0) +
      (this.shareForm.value.orgAmount?.veteranPart ?? 0)
    )
  }
}
