import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DossierSubsService } from '../../services/dossier-subs.service';
import {
  SearchServiceInput,
  SearchServiceResult,
} from 'src/app/dossier/models/service.models';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  debounceTime,
  distinctUntilChanged,
  empty,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-search-service',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './quick-search-service.component.html',
  styleUrls: ['./quick-search-service.component.css'],
})
export class QuickSearchServiceComponent implements OnInit {
  @Input() title = 'جستجوی خدمت';
  @Input() serviceType = 'D';
  @Input() control = new FormControl("", Validators.required);

  @Output() selectService = new EventEmitter<SearchServiceResult>();

  options = new BehaviorSubject<SearchServiceResult[]>([]);
  $options = this.options.asObservable();

  searhMessage = new BehaviorSubject<string | null>(null);
  $searhMessage = this.searhMessage.asObservable();

  constructor(private dossierSubs: DossierSubsService) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.control.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value: any) => {
          this.searhMessage.next('در حال جستجو ...');
        }),
        switchMap((value: string) => {
          if (this.control.valid && value) {
            return this.searchService(value).pipe(
              catchError((err) => {
                this.searhMessage.next(err.error.resMessage);
                return of([]);
              })
            );
          }
          this.searhMessage.next('');
          return EMPTY;
        }),
        catchError((err) => {
          this.searhMessage.next(err.error.resMessage);
          return EMPTY;
        })
      )
      .subscribe(
        (options) => {
          this.options.next(options);
          if (this.options.getValue().length) {
            this.searhMessage.next('');
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  searchService(searchClause: string) {
    let input: SearchServiceInput = {
      isIrc: false,
      maxResultCount: 10,
      searchClause: searchClause,
      serviceType: this.serviceType,
    };
    return this.dossierSubs.searchService(input);
  }

  onSelectService(service: SearchServiceResult) {
    this.control.setValue(service.fullName, {emitEvent: false, onlySelf: true});
    this.selectService.emit(service);
  }
}
