import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier-page',
  templateUrl: './dossier-page.component.html',
  styleUrls: ['./dossier-page.component.css']
})
export class DossierPageComponent {

  dossierCardStatus = true;

  toggle() {
    this.dossierCardStatus = !this.dossierCardStatus;
  }

}
