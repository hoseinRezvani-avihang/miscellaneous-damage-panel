import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteSubConfig, SubItemUI, SubsUI } from 'src/app/dossier/models/service.models';
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
    let deleteSubConfig: DeleteSubConfig = {
      recheckCode: this.subItem.recheckCode,
      type: this.subItem.type
    }
    this.serviceEvent.deleteSub.next(deleteSubConfig);
  }

}
