import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HospitalTabs } from '../../models/hospital.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-hospital-tab',
  templateUrl: './hospital-tab.component.html',
  styleUrls: ['./hospital-tab.component.css']
})
export class HospitalTabComponent implements OnInit {

  @Input() tabInfo!: HospitalTabs;
  @Input() isSelected!: boolean;

  @Output() selectTab = new EventEmitter<void>();

  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  ngOnInit(): void {
      this.onUpdateShareInfo();
  }

  onUpdateShareInfo() {
    this.dossierService.hospitalShareInfo.subscribe((shareInfo: any) => {
      let shares: any = {};
      let hospitalShare = shareInfo?.[this.tabInfo.symbol];

      if (hospitalShare) {
        ['totalAmount', 'outOfCover', 'paiedAmount', 'deduction', 'payableAmount'].forEach((shareField: string) => {
          shares[shareField] = Object.values(hospitalShare).reduce((prev: number, curr: any) => {
            return prev + curr[shareField]
          }, 0);
        });

        this.tabInfo.shares = shares;
      }
    })
  }
}
