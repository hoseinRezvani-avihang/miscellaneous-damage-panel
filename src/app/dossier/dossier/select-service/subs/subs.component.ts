import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedForm, SubsUI } from 'src/app/dossier/models/service.models';

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
  ) {};

  onUpdateShares(shares: SharedForm) {
    this.updateShares.emit(shares)
  }

}
