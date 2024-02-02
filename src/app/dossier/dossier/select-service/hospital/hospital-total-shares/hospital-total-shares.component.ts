import { Component, OnInit } from '@angular/core';
import { calculateHospitalTotals } from 'src/app/dossier/models/hospital.util';
import { SharedForm } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-hospital-total-shares',
  templateUrl: './hospital-total-shares.component.html',
  styleUrls: ['./hospital-total-shares.component.css']
})
export class HospitalTotalSharesComponent implements OnInit {

  shares!: SharedForm;
  
  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  ngOnInit(): void {
    this.onSharesUpdate();
  }

  onSharesUpdate() {
    this.dossierService.hospitalShareInfo.subscribe((shares: SharedForm) => {
      this.shares = calculateHospitalTotals(shares) as SharedForm
    })
  }
}
