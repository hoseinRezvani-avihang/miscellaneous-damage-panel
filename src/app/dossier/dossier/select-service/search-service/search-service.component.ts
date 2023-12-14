import { Component, Input, OnInit, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuickSearchServiceComponent } from './quick-search-service/quick-search-service.component';
import { SelectSearchServiceComponent } from './select-search-service/select-search-service.component';

@Component({
  selector: 'app-search-service',
  standalone: true,
  imports: [CommonModule, SharedModule, QuickSearchServiceComponent, SelectSearchServiceComponent],
  templateUrl: './search-service.component.html',
  styleUrls: ['./search-service.component.css']
})
export class SearchServiceComponent implements OnInit {

  
  @Input() searchType: Signal<SearchType> = signal(SearchType.select);
  quickSearch: Signal<boolean> = computed(() => {
    return this.searchType() === SearchType.quick;
  });
  
  ngOnInit(): void {
  }
}

export enum SearchType {
  quick = 'quick',
  select = "select"
}
