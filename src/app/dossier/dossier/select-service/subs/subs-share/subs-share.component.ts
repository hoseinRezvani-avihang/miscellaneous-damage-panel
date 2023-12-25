import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  calculateFactor,
  calculateShareInfoFactors,
} from 'src/app/dossier/models/dossier.util';
import {
  ShareInfoItems,
  SubShares,
} from 'src/app/dossier/models/service.models';
import { PartToWholeDialogComponent } from './part-to-whole-dialog/part-to-whole-dialog.component';

@Component({
  selector: 'app-subs-share',
  templateUrl: './subs-share.component.html',
  styleUrls: ['./subs-share.component.css'],
})
export class SubsShareComponent implements OnInit {
  @Input() set subsShare(shares: Partial<SubShares>) {
    this.shares = shares;
    this.shareInfoFactors = this.shareInfoFactors ? this.shareInfoFactors : this.calcuateFactor();
    setTimeout(() => {
      this.paiedAmountControl.setValue(shares.totalAmount);
    }, 0);
  }

  shareForm = new FormGroup({
    paiedAmount: new FormControl<null | number>(0),
    outOfCover: new FormControl(0),
    deduction: new FormControl(0),
    basePart: new FormControl(0),
    insuredPart: new FormControl(0),
    otherPart: new FormControl(0),
    supplementaryPart: new FormControl(0),
    veteranPart: new FormControl(0),
    payableAmount: new FormControl(0),
  });

  paiedAmountControl = this.control('paiedAmount');
  outOfCoverControl = this.control('outOfCover');
  deductionControl = this.control('deduction');

  shares!: Partial<SubShares>;
  shareInfoFactors: any = null;

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onSharesChange();
  }

  onSharesChange() {
    this.paiedAmountControl.valueChanges.subscribe((paiedAmount: number) => {
      let outOfCover = Math.max(
        0,
        paiedAmount - (this.shares.totalAmount as number)
      );
      this.udpateShareInfos(paiedAmount);
      this.shareForm.patchValue({
        outOfCover,
        payableAmount: this.payableAmount(),
      });
    });

    this.outOfCoverControl.valueChanges.subscribe((outOfCoverValue: number) => {
      let outOfCover = Math.max(
        0,
        this.paiedAmountControl.value - (this.shares.totalAmount as number)
      );
      let deduction = Math.max(outOfCover - outOfCoverValue, 0);
      this.shareForm.patchValue({
        deduction,
      });
    });
  }

  calcuateFactor() {
    let calculatedFactor: ShareInfoItems = {
      basePart: this.shares.shareInfo?.basePart ?? 0,
      insuredPart: this.shares.shareInfo?.insuredPart ?? 0,
      otherPart: this.shares.shareInfo?.otherPart ?? 0,
      supplementaryPart: this.shares.shareInfo?.supplementaryPart ?? 0,
      veteranPart: this.shares.shareInfo?.veteranPart ?? 0,
    };

    return calculateShareInfoFactors(
      calculatedFactor,
      this.shares.totalAmount ?? 0
    );
  }

  calcuateShare(shareFactor: number, total: number) {
    return Math.round(shareFactor * total);
  }

  udpateShareInfos(paiedAmount: number) {
    let total = Math.min(this.shares.totalAmount ?? 0, paiedAmount);
    this.shareForm.patchValue({
      basePart: this.calcuateShare(this.shareInfoFactors['basePart'], total),
      insuredPart: this.calcuateShare(
        this.shareInfoFactors['insuredPart'],
        total
      ),
      otherPart: this.calcuateShare(this.shareInfoFactors['otherPart'], total),
      supplementaryPart: this.calcuateShare(
        this.shareInfoFactors['supplementaryPart'],
        total
      ),
      veteranPart: this.calcuateShare(
        this.shareInfoFactors['veteranPart'],
        total
      ),
    });
  }

  payableAmount() {
    return this.control("basePart").value +
    this.control("supplementaryPart").value +
    this.control("veteranPart").value +
    this.control("otherPart").value +
    this.control("insuredPart").value;
  };

  openPartToWholeDialog() {
    let dialogRef = this.dialog.open(PartToWholeDialogComponent, {
      data: {...this.shareForm.value, totalAmount: this.shares.totalAmount},
      width: "600px",
      height: "600px",
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((partToWholeResult: any) => {
      if (partToWholeResult) {
        this.shareInfoFactors = partToWholeResult.newFactors;
        this.paiedAmountControl.setValue(partToWholeResult.newShares.paiedAmount)
      }
    })
  }

  control(filed: string) {
    return this.shareForm.get(filed) as FormControl;
  }
}
