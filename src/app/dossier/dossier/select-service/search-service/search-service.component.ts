import { Component, EventEmitter, Input, OnInit, Output, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuickSearchServiceComponent } from './quick-search-service/quick-search-service.component';
import { SelectSearchServiceComponent } from './select-search-service/select-search-service.component';
import { SearchServiceResult } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-search-service',
  standalone: true,
  imports: [CommonModule, SharedModule, QuickSearchServiceComponent, SelectSearchServiceComponent],
  templateUrl: './search-service.component.html',
  styleUrls: ['./search-service.component.css']
})
export class SearchServiceComponent implements OnInit {


  @Input() searchType: Signal<SearchType> = signal(SearchType.quick);
  @Input() serviceType!: string;
  @Output() selectService = new EventEmitter<SearchServiceResult>();

  quickSearch: Signal<boolean> = computed(() => {
    return this.searchType() === SearchType.quick;
  });

  ngOnInit(): void {
  }

  onSelectService(service: SearchServiceResult) {
    this.selectService.emit(service);
  }
}

export enum SearchType {
  quick = 'quick',
  select = "select"
}
