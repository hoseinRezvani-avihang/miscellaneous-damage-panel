import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, Validators } from '@angular/forms';
import { SearchServiceInput, SearchServiceResult } from 'src/app/dossier/models/service.models';
import { DossierSubsService } from '../../services/dossier-subs.service';
import { BehaviorSubject } from 'rxjs';
import { HospitalType } from '../../hospital/models/hospital.models';

@Component({
  selector: 'app-select-search-service',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './select-search-service.component.html',
  styleUrls: ['./select-search-service.component.css']
})
export class SelectSearchServiceComponent {

  @Input() title = 'جستجوی خدمت';
  @Input() serviceType = "D"
  @Input() control = new FormControl(null);
  @Input() hospitalType!: HospitalType;

  @Output() selectService = new EventEmitter<SearchServiceResult>();

  message =  new BehaviorSubject<string | null>("در حال جستجو ...");

  options = new BehaviorSubject<SearchServiceResult[] | null>(null);

  constructor(
    private dossierSubs: DossierSubsService
  ) {}

  searchService() {
    let input: SearchServiceInput = {
      isIrc: false,
      maxResultCount: 10,
      searchClause: "GNRL",
      serviceType: this.serviceType,
      hospitalType: this.hospitalType
    };
    if ((this.options.getValue() ?? []).length) return;
    this.message.next('در حال جستجو ...');
    this.dossierSubs.searchService(input).subscribe((result: SearchServiceResult[]) => {
      this.options.next(result);
      if (result.length) {
        this.message.next(null);
      } else {
        this.message.next("نتیجه‌ای یافت نشد.");
      }
    }, err => {
      this.message.next(err.error.resMessage);
    })
  }

  onSelectService(service: SearchServiceResult) {
    this.selectService.emit(service);
  }

}
