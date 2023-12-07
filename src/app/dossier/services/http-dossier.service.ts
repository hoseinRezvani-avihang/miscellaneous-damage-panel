import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitizenInput, CitizenResult } from '../models/citizen.models';
import { Observable, map } from 'rxjs';
import { Result } from 'src/app/shared/shared.models';
import { PartnerSearchResult, SearchPartnerInput } from '../models/partner.models';

@Injectable({
  providedIn: 'root'
})
export class HttpDossierService {

  basePath = '/hitsa-mdp';
  domain = window.location.origin;  
  staticPath = this.domain + this.basePath;

  fetchCitizenUrl = this.staticPath + "/v1/services/citizen/fetch";
  searchParnterUrl = this.staticPath + "/v1/services/partner/search/quick/fetch/list";

  constructor(
    private http: HttpClient
  ) { }

  fetchCitizen(input: CitizenInput): Observable<CitizenResult> {
    return this.http.post<Result<CitizenResult>>(this.fetchCitizenUrl, input).pipe(
      map((result: Result<CitizenResult>) => {
        return result.info;
      })
    )
  }

  searchParnter(input: SearchPartnerInput): Observable<PartnerSearchResult[]> {
    return this.http.post<Result<PartnerSearchResult[]>>(this.searchParnterUrl, input).pipe(
      map((result: Result<PartnerSearchResult[]>) => {
        return result.info;
      })
    )
  }


}
