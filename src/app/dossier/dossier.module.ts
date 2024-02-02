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
import { DossierActionsComponent } from './dossier/select-service/dossier-actions/dossier-actions.component';
import { HospitalComponent } from './dossier/select-service/hospital/hospital.component';
import { HospitalServicesComponent } from './dossier/select-service/hospital/hospital-services/hospital-services.component';
import { HospitalTabComponent } from './dossier/select-service/hospital/hospital-services/hospital-tab/hospital-tab.component';
import { HospitalDoctorServicesComponent } from './dossier/select-service/hospital/hospital-services/hospital-doctor-services/hospital-doctor-services.component';
import { HospitalDrugEquipmentComponent } from './dossier/select-service/hospital/hospital-services/hospital-drug-equipment/hospital-drug-equipment.component';
import { HospitalParaclinicComponent } from './dossier/select-service/hospital/hospital-services/hospital-paraclinic/hospital-paraclinic.component';
import { HospitalHotelingComponent } from './dossier/select-service/hospital/hospital-services/hospital-hoteling/hospital-hoteling.component';
import { HospitalOtherServicesComponent } from './dossier/select-service/hospital/hospital-services/hospital-other-services/hospital-other-services.component';
import { HospitalCategoryComponent } from './dossier/select-service/hospital/hospital-services/hospital-category/hospital-category.component';
import { HospitalCategorySharesComponent } from './dossier/select-service/hospital/hospital-services/hospital-category/hospital-category-shares/hospital-category-shares.component';
import { VisitServicesComponent } from './dossier/select-service/hospital/hospital-services/hospital-doctor-services/visit-services/visit-services.component';
import { SelectVisitComponent } from './dossier/select-service/hospital/hospital-services/hospital-doctor-services/visit-services/select-visit/select-visit.component';
import { VisitListComponent } from './dossier/select-service/hospital/hospital-services/hospital-doctor-services/visit-services/visit-list/visit-list.component';
import { VisitItemComponent } from './dossier/select-service/hospital/hospital-services/hospital-doctor-services/visit-services/visit-item/visit-item.component';
import { BedServiceComponent } from './dossier/select-service/hospital/hospital-services/hospital-hoteling/bed-service/bed-service.component';
import { SelectBedComponent } from './dossier/select-service/hospital/hospital-services/hospital-hoteling/bed-service/select-bed/select-bed.component';
import { BedListComponent } from './dossier/select-service/hospital/hospital-services/hospital-hoteling/bed-service/bed-list/bed-list.component';
import { BedItemComponent } from './dossier/select-service/hospital/hospital-services/hospital-hoteling/bed-service/bed-list/bed-item/bed-item.component';
import { GeneralServiceComponent } from './dossier/select-service/hospital/hospital-services/general-service/general-service.component';
import { AddLevel3ServiceComponent } from './dossier/select-service/hospital/hospital-services/general-service/add-level-3-service/add-level-3-service.component';
import { AddGeneralServiceComponent } from './dossier/select-service/hospital/hospital-services/general-service/add-general-service/add-general-service.component';
import { HospitalTotalSharesComponent } from './dossier/select-service/hospital/hospital-total-shares/hospital-total-shares.component';


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
    SubItemComponent,
    DossierActionsComponent,
    HospitalComponent,
    HospitalServicesComponent,
    HospitalTabComponent,
    HospitalDoctorServicesComponent,
    HospitalDrugEquipmentComponent,
    HospitalParaclinicComponent,
    HospitalHotelingComponent,
    HospitalOtherServicesComponent,
    HospitalCategoryComponent,
    HospitalCategorySharesComponent,
    VisitServicesComponent,
    SelectVisitComponent,
    VisitListComponent,
    VisitItemComponent,
    BedServiceComponent,
    SelectBedComponent,
    BedListComponent,
    BedItemComponent,
    GeneralServiceComponent,
    AddLevel3ServiceComponent,
    AddGeneralServiceComponent,
    HospitalTotalSharesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchServiceComponent,
    AddOutpatientServiceComponent
  ]
})
export class DossierModule { }
