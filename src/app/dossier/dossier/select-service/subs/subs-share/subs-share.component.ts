import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  calculateShareInfoFactors, price,
} from 'src/app/dossier/models/dossier.util';
import {
  ShareInfoItems,
  SharedForm,
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
    this.shareInfoFactors = this.calcuateFactor();
    setTimeout(() => {
      this.paiedAmountControl.patchValue(shares.totalAmount);
      this.shareForm.patchValue({
        totalAmount: shares.totalAmount,
        orgAmount: shares.orgAmount,
        insuredAmount: shares.insuredAmount
      })
    }, 0);
  };

  @Output() updateShares = new EventEmitter();

  shareForm = new FormGroup({
    paiedAmount: new FormControl<null | number>(0),
    outOfCover: new FormControl<null | number>(0),
    deduction: new FormControl<null | number>(0),
    basePart: new FormControl<null | number>(0),
    insuredPart: new FormControl<null | number>(0),
    otherPart: new FormControl<null | number>(0),
    supplementaryPart: new FormControl<null | number>(0),
    veteranPart: new FormControl<null | number>(0),
    payableAmount: new FormControl<null | number>(0),
    totalAmount: new FormControl<null | number>(0),
    orgAmount: new FormControl<null | number>(0),
    insuredAmount: new FormControl<null | number>(0),
  });

  paiedAmountControl = this.control('paiedAmount');
  outOfCoverControl = this.control('outOfCover');
  deductionControl = this.control('deduction');

  shares!: Partial<SubShares>;
  shareInfoFactors: any = null;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.onSharesChange();
  }

  onSharesChange() {
    this.paiedAmountControl.valueChanges.subscribe((paiedAmount: number) => {
      let outOfCover = Math.max(
        0,
        price(paiedAmount, false) as number - (this.shares.totalAmount as number)
      );
      this.udpateShareInfos(price(paiedAmount, false) as number);
      this.shareForm.patchValue({
        outOfCover,
        payableAmount: this.payableAmount(),
      }, { emitEvent: false });
    });

    this.outOfCoverControl.valueChanges.subscribe((outOfCoverValue: number) => {
      let outOfCover = Math.max(
        0,
        price(this.paiedAmountControl.value, false) as number - (this.shares.totalAmount as number)
      );
      let deduction = Math.max(outOfCover - (price(outOfCoverValue, false) as number), 0);
      this.shareForm.patchValue({
        deduction,
      }, { emitEvent: false });
    });

    this.shareForm.valueChanges.subscribe((value) => {
      this.updateShares.emit(value);
    })
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
    }, { emitEvent: false });
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
      data: { ...this.shareForm.value, totalAmount: this.shares.totalAmount },
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

  get MaxOutOfCover() {
    return Math.max(
      0,
      this.paiedAmountControl.value - (this.shares.totalAmount as number)
    );
  }
}
