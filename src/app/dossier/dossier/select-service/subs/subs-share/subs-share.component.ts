import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubShares } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-subs-share',
  templateUrl: './subs-share.component.html',
  styleUrls: ['./subs-share.component.css'],
})
export class SubsShareComponent implements OnInit {
  @Input() set subsShare(shares: Partial<SubShares>) {
    this.shares = shares;
    this.shareForm.patchValue({
      paiedAmount: shares.totalAmount,
    });
  }

  shareForm = new FormGroup({
    paiedAmount: new FormControl<null | number>(0),
    outOfCover: new FormControl(0),
    deduction: new FormControl(0),
  });

  paiedAmountControl = this.shareForm.get('paiedAmount') as FormControl;
  outOfCoverControl = this.shareForm.get('outOfCover') as FormControl;
  deductionControl = this.shareForm.get('deduction') as FormControl;

  shares!: Partial<SubShares>;

  ngOnInit(): void {
    this.onSharesChange();
  }

  onSharesChange() {
    this.paiedAmountControl.valueChanges.subscribe((paiedAmount: number) => {
      let outOfCover = Math.max(
        0,
        paiedAmount - (this.shares.totalAmount as number)
      );
      this.outOfCoverControl.setValue(outOfCover);
    });

    this.outOfCoverControl.valueChanges.subscribe((outOfCoverValue: number) => {
      let outOfCover = Math.max(
        0,
        this.paiedAmountControl.value - (this.shares.totalAmount as number)
      );
      let deduction = Math.max(outOfCover - outOfCoverValue, 0);
      this.deductionControl.setValue(deduction, { emitEvent: false });
    });
  }
}
