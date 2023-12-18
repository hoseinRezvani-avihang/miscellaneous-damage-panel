import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DossierCoreDataService } from '../services/dossier-core-data.service';
import { DossierSubsService } from './select-service/services/dossier-subs.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css'], 
  providers: [
    DossierCoreDataService, 
    DossierSubsService
  ], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DossierComponent {

  memberInfo = this.dossierCoreService.citizenInfo.asObservable();

  constructor(
    private dossierCoreService: DossierCoreDataService
  ) {}

  isActive(stepName: string) {
    return this.dossierCoreService.isActive(stepName);
  }

}
