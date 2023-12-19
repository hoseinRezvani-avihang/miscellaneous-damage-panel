import { Component, Input } from '@angular/core';
import { SubItemUI, SubsUI } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent {

  @Input() subs!: SubsUI;

}
