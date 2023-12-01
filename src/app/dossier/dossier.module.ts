import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossierComponent } from './dossier/dossier.component';
import { SearchInsuredComponent } from './dossier/select-member/search-insured/search-insured.component';
import { DossierPageComponent } from './dossier-page/dossier-page.component';
import { SharedModule } from '../shared/shared.module';
import { SelectMemberComponent } from './dossier/select-member/select-member.component';
import { SelectPartnerComponent } from './dossier/select-partner/select-partner.component';
import { SelectCpartyComponent } from './dossier/select-cparty/select-cparty.component';
import { SelectServiceComponent } from './dossier/select-service/select-service.component';



@NgModule({
  declarations: [
    DossierComponent,
    SearchInsuredComponent,
    DossierPageComponent,
    SelectMemberComponent,
    SelectPartnerComponent,
    SelectCpartyComponent,
    SelectServiceComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ]
})
export class DossierModule { }
