import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedForm, SubsUI } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubsComponent {

  @Input() subs!: SubsUI;

  @Output() updateShares = new EventEmitter<SharedForm>()

  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  onUpdateShares(shares: SharedForm) {
    this.updateShares.emit(shares)
  }

}
