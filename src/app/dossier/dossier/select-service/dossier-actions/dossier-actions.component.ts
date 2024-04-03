import { Component } from '@angular/core';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';
import { Result } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-dossier-actions',
  templateUrl: './dossier-actions.component.html',
  styleUrls: ['./dossier-actions.component.css']
})
export class DossierActionsComponent {

  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  savePrescription() {
    this.dossierService.savePrescription().subscribe({
      next: (result: Result<void>) => {
        console.log(result);
      }
    });
  }

}
