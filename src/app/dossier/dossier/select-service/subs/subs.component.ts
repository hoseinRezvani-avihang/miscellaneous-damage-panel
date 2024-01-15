import { Component, Input } from '@angular/core';
import { SharedForm, SubsUI } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent {

  @Input() subs!: SubsUI;

  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  updateShares(shares: SharedForm) {
    this.dossierService.setShareInfo(shares)
  }

}
