import { Component, Input } from '@angular/core';
import { PartnerInfoUI, SelectPartner } from 'src/app/dossier/models/partner.models';

@Component({
  selector: 'app-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.css']
})
export class PartnerInfoComponent {

  @Input() partner!: PartnerInfoUI;

}
