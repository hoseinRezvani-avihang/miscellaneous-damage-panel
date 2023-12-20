import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubItemUI, SubsUI } from 'src/app/dossier/models/service.models';
import { ServiceEventService } from 'src/app/dossier/services/service-event.service';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css']
})
export class SubItemComponent {

  @Input() subItem!: SubItemUI;

  constructor(
    private serviceEvent: ServiceEventService
  ) {};

  onDeleteSub() {
    this.serviceEvent.deleteSub.next(this.subItem.recheckCode);
  }

}
