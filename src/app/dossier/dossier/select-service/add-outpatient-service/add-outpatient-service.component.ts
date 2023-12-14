import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchServiceComponent } from '../search-service/search-service.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchServiceResult } from 'src/app/dossier/models/service.models';

@Component({
  selector: 'app-add-outpatient-service',
  standalone: true,
  imports: [CommonModule, SearchServiceComponent, SharedModule],
  templateUrl: './add-outpatient-service.component.html',
  styleUrls: ['./add-outpatient-service.component.css']
})
export class AddOutpatientServiceComponent {

  form = new FormGroup({
    service: new FormControl<SearchServiceResult | null>(null),
    cnt: new FormControl(null),
    isMarkMatchService: new FormControl(null),
    claimAmount: new FormControl(null),
    ISGlobal: new FormControl(null),
    
  })

}
