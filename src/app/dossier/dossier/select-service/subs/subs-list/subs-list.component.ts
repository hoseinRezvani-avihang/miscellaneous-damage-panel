import { Component, Input } from '@angular/core';
import { SubItemUI, SubsUI } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-subs-list',
  templateUrl: './subs-list.component.html',
  styleUrls: ['./subs-list.component.css']
})
export class SubsListComponent {

  @Input() subs!: SubItemUI[];

}
