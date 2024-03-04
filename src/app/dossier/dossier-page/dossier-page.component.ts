import { Component } from '@angular/core';
import { DossierConfig } from '../models/dossier-core.models';

@Component({
  selector: 'app-dossier-page',
  templateUrl: './dossier-page.component.html',
  styleUrls: ['./dossier-page.component.css']
})
export class DossierPageComponent {

  dossierCardStatus = true;
  dossierConfig: DossierConfig = {
    regNoId: "a4333cfc228acf3c",
    isContracted: false,
    mode: "Save",
  }

  toggle() {
    this.dossierCardStatus = !this.dossierCardStatus;
  }

}
