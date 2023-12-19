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
import { SearchPartnerComponent } from './dossier/select-partner/search-partner/search-partner.component';
import { PartnerInfoComponent } from './dossier/select-partner/partner-info/partner-info.component';
import { QuickSearchPartnerComponent } from './dossier/select-partner/search-partner/quick-search-partner/quick-search-partner.component';
import { MemberInfoComponent } from './dossier/select-member/member-info/member-info.component';
import { CpartyInfoComponent } from './dossier/select-cparty/cparty-info/cparty-info.component';
import { SearchCpartyComponent } from './dossier/select-cparty/search-cparty/search-cparty.component';
import { QuickSearchCpartyComponent } from './dossier/select-cparty/search-cparty/quick-search-cparty/quick-search-cparty.component';
import { SearchServiceComponent } from './dossier/select-service/search-service/search-service.component';
import { AddOutpatientServiceComponent } from './dossier/select-service/add-outpatient-service/add-outpatient-service.component';
import { SubsComponent } from './dossier/select-service/subs/subs.component';
import { SubsListComponent } from './dossier/select-service/subs/subs-list/subs-list.component';
import { SubsShareComponent } from './dossier/select-service/subs/subs-share/subs-share.component';
import { SubItemComponent } from './dossier/select-service/subs/subs-list/sub-item/sub-item.component';



@NgModule({
  declarations: [
    DossierComponent,
    SearchInsuredComponent,
    DossierPageComponent,
    SelectMemberComponent,
    SelectPartnerComponent,
    SelectCpartyComponent,
    SelectServiceComponent,
    SearchPartnerComponent,
    PartnerInfoComponent,
    QuickSearchPartnerComponent,
    MemberInfoComponent,
    CpartyInfoComponent,
    SearchCpartyComponent,
    QuickSearchCpartyComponent,
    SubsComponent,
    SubsListComponent,
    SubsShareComponent,
    SubItemComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    SearchServiceComponent,
    AddOutpatientServiceComponent
  ]
})
export class DossierModule { }
