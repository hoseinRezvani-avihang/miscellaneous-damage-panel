import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginInput, LoginResult, generalConfig, initializeResult } from '../auth.models';
import { Result } from 'src/app/shared/shared.models';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  basePath = '/hitsa-mdp';
  domain = window.location.origin;  
  staticPath = this.domain + this.basePath;

  initializeUrl = this.staticPath+'/v1/services/initialize';
  loginUrl = this.staticPath+'/v1/services/auth/login';

  constructor(
    private http: HttpClient,
  ) { }

  initialize(): Observable<generalConfig>{
    return this.http.post<Result<initializeResult>>(this.initializeUrl, {}).pipe(
      map((result: Result<initializeResult>) => {
        return result.info.generalConfig;
      })
    );
  }

  login(input: LoginInput): Observable<LoginResult> {
    return this.http.post<Result<LoginResult>>(this.loginUrl, input).pipe(
      map((result: Result<LoginResult>) => {
        return result.info;
      })
    )
  }
}
