import { Component } from '@angular/core';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-dossier-actions',
  templateUrl: './dossier-actions.component.html',
  styleUrls: ['./dossier-actions.component.css']
})
export class DossierActionsComponent {

  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  saveDossier() {
    this.dossierService.saveDossier();
  }

}
