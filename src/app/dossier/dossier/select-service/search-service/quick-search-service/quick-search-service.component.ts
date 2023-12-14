import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DossierSubsService } from '../../services/dossier-subs.service';
import { SearchServiceResult } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-quick-search-service',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './quick-search-service.component.html',
  styleUrls: ['./quick-search-service.component.css']
})
export class QuickSearchServiceComponent {

  options!: SearchServiceResult[];

  constructor(
    private dossierSubs: DossierSubsService
  ) {}

  searchService() {
    
  }

}
