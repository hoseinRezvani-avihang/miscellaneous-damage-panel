import { Component, Input, ViewChild } from '@angular/core';
import { GeneralServiceConfig, HospitalCategoryConfig } from '../../models/hospital.models';
import { SearchServiceResult } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';
import { DossierSubsService } from '../../../services/dossier-subs.service';
import { ExpandCardComponent } from 'src/app/shared/components/expand-card/expand-card.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-general-service',
  templateUrl: './general-service.component.html',
  styleUrls: ['./general-service.component.css']
})
export class GeneralServiceComponent {

  @Input() config!: HospitalCategoryConfig;

  @ViewChild("generalCard") generalCard!: ExpandCardComponent;
  @ViewChild("level3Card") level3Card!: ExpandCardComponent;

  loading = false;

  constructor(
    private subService: DossierSubsService
  ) {};

  generalServiceConfig() {
    return {
      type: this.config.type,
      hospitalType: this.config.type?.hospitalType,
    } as GeneralServiceConfig;
  }

  onAddService(service: any) {
    this.loading = true;
    this.subService.fetchOmr(service).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe(() => {
      this.generalCard.toggle(false);
      this.level3Card.toggle(false);
    });
  }

}
