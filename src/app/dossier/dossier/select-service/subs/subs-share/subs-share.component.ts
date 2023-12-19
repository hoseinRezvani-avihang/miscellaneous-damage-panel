import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubShares } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-subs-share',
  templateUrl: './subs-share.component.html',
  styleUrls: ['./subs-share.component.css'],
})
export class SubsShareComponent {
  @Input() set subsShare(shares: Partial<SubShares>) {
    this.shares = shares;
    this.totalShareControl.setValue(shares.totalAmount as number);
    this.orgShareControl.setValue(shares.orgAmount as number);
    this.insuredShareControl.setValue(shares.insuredAmount as number);
  }

  totalShareControl = new FormControl(0);
  orgShareControl = new FormControl(0);
  insuredShareControl = new FormControl(0);

  shares!: Partial<SubShares>;
}
