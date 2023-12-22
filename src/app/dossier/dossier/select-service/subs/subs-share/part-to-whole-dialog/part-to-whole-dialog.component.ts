import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartToWholeComponent } from '../part-to-whole/part-to-whole.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SubShares } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-part-to-whole-dialog',
  standalone: true,
  imports: [CommonModule, SharedModule, PartToWholeComponent],
  templateUrl: './part-to-whole-dialog.component.html',
  styleUrls: ['./part-to-whole-dialog.component.css'],
})
export class PartToWholeDialogComponent {
  shareInfo!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public shares: any, 
    private dialogRef: MatDialogRef<PartToWholeDialogComponent>
    ) {
    this.shareInfo = {
      insuredPart: shares.insuredPart,
      totalAmount: shares.totalAmount,
      paiedAmount: shares.paiedAmount,
      orgAmount: {
        basePart: shares.basePart,
        otherPart: shares.otherPart,
        supplementaryPart: shares.supplementaryPart,
        veteranPart: shares.veteranPart,
      },
    };
  }

  calculatePartToWhole(partToWholeResult: any) {
    this.dialogRef.close(partToWholeResult);
  }
}
