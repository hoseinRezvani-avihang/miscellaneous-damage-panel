import { Component, Input } from '@angular/core';
import { SharedForm } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-hospital-category-shares',
  templateUrl: './hospital-category-shares.component.html',
  styleUrls: ['./hospital-category-shares.component.css']
})
export class HospitalCategorySharesComponent {

  @Input() shares: SharedForm | null = {
    basePart: 0,
    deduction: 0,
    insuredPart: 0,
    otherPart: 0,
    outOfCover: 0,
    paiedAmount: 0,
    payableAmount: 0,
    supplementaryPart: 0,
    veteranPart: 0,
    insuredAmount: 0,
    orgAmount: 0,
    totalAmount: 0,
  };

}
