import { Component, Input } from '@angular/core';
import { CpartyInfoUI } from 'src/app/dossier/models/cparty.models';

@Component({
  selector: 'app-cparty-info',
  templateUrl: './cparty-info.component.html',
  styleUrls: ['./cparty-info.component.css']
})
export class CpartyInfoComponent {

  @Input() cparty!: CpartyInfoUI;

}
