import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PartnerInfo, PartnerSearchResult, PartnerType, SearchPartnerInput } from 'src/app/dossier/models/partner.models';
import { ParnterService } from '../../services/parnter.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, EMPTY, catchError, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quick-search-partner',
  templateUrl: './quick-search-partner.component.html',
  styleUrls: ['./quick-search-partner.component.css']
})
export class QuickSearchPartnerComponent implements OnInit {

  @Input() control = new FormControl<string>("", Validators.required);
  @Input() partnerType: string = PartnerType.CLINIC.symbol;
  @Input() hasContract = false;
  @Input() partner!: PartnerInfo | null;

  @Output() onSelectPartner = new EventEmitter<PartnerSearchResult>();

  options = new BehaviorSubject<PartnerSearchResult[]>([]);
  $options = this.options.asObservable();

  searhMessage = new BehaviorSubject<string | null>(null);
  $searhMessage = this.searhMessage.asObservable();
  loading = false;

  allowSearching = false;

  constructor(
    private partnerService: ParnterService
  ) {};

  ngOnInit(): void {
    this.onSearch();
    if (this.partner) {
      this.control.setValue(this.partner.partnerName, {emitEvent: false, onlySelf: false});
    }
  }

  onSearch() {
    this.control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(), 
      tap((value: any) => {
        this.searhMessage.next("در حال جستجو ...");
        this.allowSearching = true;
      }), 
      switchMap((value: string) => {
        if (this.control.valid && value) {
          return this.searchParnter(value)
        }
        this.searhMessage.next(null);
        return EMPTY;
      }), 
      catchError((err) => {
        this.searhMessage = err.error.resMessage;
        return EMPTY;
      })
    ).subscribe((value: PartnerSearchResult[]) => {
      this.options.next(value);
      if (this.options.getValue().length) {
        this.searhMessage.next(null);
      } else {
        this.searhMessage.next("نتیجه‌ای یافت نشد.");
      }
    })
  }

  searchParnter(searchClause: string) {
    let input: SearchPartnerInput = {
      searchClause, 
      type: this.partnerType,
      hasContract: this.hasContract,
      maxResultCount: 10, 
      provinceIds: null
    };

    return this.partnerService.searchParnter(input);
  }

  selectParnter(parnter: PartnerSearchResult) {
    this.control.setValue(parnter.partnerName, {emitEvent: false });
    this.onSelectPartner.emit(parnter);
  }

}
