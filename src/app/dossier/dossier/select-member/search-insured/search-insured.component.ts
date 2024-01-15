import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpDossierService } from '../../../services/http-dossier.service';
import { DossierService } from '../../../services/dossier.service';
import { CitizenResult } from '../../../models/citizen.models';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search-insured',
  templateUrl: './search-insured.component.html',
  styleUrls: ['./search-insured.component.css']
})
export class SearchInsuredComponent implements OnInit {

  searchControl = new FormControl("2529925291", Validators.required)
  loading = false;
  @Output() selectMember = new EventEmitter<CitizenResult>();

  constructor(
    private dossierService: DossierService
  ) {}

  ngOnInit(): void {

  }

  onSeach()  {

    if (this.searchControl.valid) {
      this.loading = true;
      this.dossierService.fetchCitizen(this.searchControl.value as string, null).pipe(
        finalize(() => {
          this.loading = false;
        })
      ).subscribe(
        (result: CitizenResult) => {
          this.selectMember.emit(result);
        }
      )
    }
  }

}
