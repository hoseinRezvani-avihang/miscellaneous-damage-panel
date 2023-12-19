import { Component, Input } from '@angular/core';
import { SubItemUI, SubsUI } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css']
})
export class SubItemComponent {

  @Input() subItem!: SubItemUI;

}
