import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitizenInput, CitizenResult } from '../models/citizen.models';
import { Observable, map } from 'rxjs';
import { Result } from 'src/app/shared/shared.models';
import {
  PartnerInfoResult,
  PartnerSearchResult,
  SearchPartnerInput,
} from '../models/partner.models';
import { CPartyResult } from '../models/cparty.models';
import {
  SearchServiceInput,
  SearchServiceResult,
} from '../models/service.models';
import { DossierSave, OMRInput, OmrResult } from '../models/dossier-core.models';

@Injectable({
  providedIn: 'root',
})
export class HttpDossierService {
  basePath = '/hitsa-mdp';
  newStaticPath = '/mdp';
  domain = window.location.origin;
  staticPath = this.domain + this.basePath;

  fetchCitizenUrl = this.staticPath + '/v1/services/citizen/fetch';
  searchParnterUrl =
    this.staticPath + '/v1/services/partner/search/quick/fetch/list';
  fetchPartnerInfoUrl = this.staticPath + '/v1/services/partner/info/fetch/id';

  searchCpartyUrl = this.staticPath + '/v1/services/cparty/search/fetch/list';
  searchServiceUrl = this.staticPath + '/v1/services/service/search/fetch/list';

  fetchOMRUrl = this.staticPath + "/v1/services/service/inquiry/omr/fetch";

  savePrescriptionUrl = this.newStaticPath + '/v1/services/prescription/save';

  constructor(private http: HttpClient) {}

  fetchCitizen(input: CitizenInput): Observable<CitizenResult> {
    return this.http
      .post<Result<CitizenResult>>(this.fetchCitizenUrl, input)
      .pipe(
        map((result: Result<CitizenResult>) => {
          return result.info;
        })
      );
  }

  searchParnter(input: SearchPartnerInput): Observable<PartnerSearchResult[]> {
    return this.http
      .post<Result<PartnerSearchResult[]>>(this.searchParnterUrl, input)
      .pipe(
        map((result: Result<PartnerSearchResult[]>) => {
          return result.info;
        })
      );
  }

  fetchPartnerInfo(partnerId: string): Observable<PartnerInfoResult> {
    let input = { partnerId };
    return this.http
      .post<Result<PartnerInfoResult>>(this.fetchPartnerInfoUrl, input)
      .pipe(
        map((result: Result<PartnerInfoResult>) => {
          return result.info;
        })
      );
  }

  searchCparty(noMedicalSystem: string): Observable<CPartyResult[]> {
    let input = { noMedicalSystem };
    return this.http
      .post<Result<CPartyResult[]>>(this.searchCpartyUrl, input)
      .pipe(
        map((result: Result<CPartyResult[]>) => {
          return result.info;
        })
      );
  }

  searchService(input: SearchServiceInput): Observable<SearchServiceResult[]> {
    return this.http
      .post<Result<SearchServiceResult[]>>(this.searchServiceUrl, input)
      .pipe(
        map((result: Result<SearchServiceResult[]>) => {
          return result.info;
        })
      );
  }

  fetchOMR(input: OMRInput): Observable<OmrResult> {
    return this.http.post<Result<OmrResult>>(this.fetchOMRUrl, input).pipe(
      map((result: Result<OmrResult>) => {
        return result.info;
      })
    );
  }

  savePrescription(input: DossierSave): Observable<Result<void>> {
    return this.http.post<Result<void>>(this.savePrescriptionUrl, input);
  }
}
