import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { CPartyResult } from 'src/app/dossier/models/cparty.models';
import { CpartyService } from '../services/cparty.service';

@Component({
  selector: 'app-quick-search-cparty',
  templateUrl: './quick-search-cparty.component.html',
  styleUrls: ['./quick-search-cparty.component.css'],
})
export class QuickSearchCpartyComponent implements OnInit {
  @Input() cpartySearchControl = new FormControl('', Validators.required);
  @Output() selectCparty = new EventEmitter<CPartyResult>();

  options = new BehaviorSubject<CPartyResult[]>([]);
  $options = this.options.asObservable();

  searhMessage = new BehaviorSubject<string | null>(null);
  $searhMessage = this.searhMessage.asObservable();

  constructor(
    private cpartyService: CpartyService
  ) {}

  ngOnInit(): void {
    this.onCpartySearch();
  }

  onCpartySearch() {
    this.cpartySearchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value: any) => {
          this.searhMessage.next('در حال جستجو ...');
        }),
        switchMap((value: string) => {
          if (this.cpartySearchControl.valid) {
            return this.searchCparty(value);
          }
          this.searhMessage.next("");
          return EMPTY;
        }),
        catchError((err) => {
          this.searhMessage.next(err.error.resMessage);
          return of([]);
        })
      )
      .subscribe((value: CPartyResult[]) => {
        this.options.next(value);
        if (this.options.getValue().length) {
          this.searhMessage.next("");
        }
      });
  }

  searchCparty(searchCluase: string) {
    return this.cpartyService.searchCparty(searchCluase);
  }

  onSelectCparty(cparty: CPartyResult) {
    this.cpartySearchControl.disable();
    this.cpartySearchControl.setValue(cparty.fullName, {emitEvent: false, onlySelf: false})
    this.cpartySearchControl.enable();
    this.selectCparty.emit(cparty);
  }
}
