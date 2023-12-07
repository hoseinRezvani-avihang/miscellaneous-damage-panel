import { Injectable } from '@angular/core';
import { HttpAuthService } from './http-auth.service';
import { tap, BehaviorSubject } from 'rxjs';
import { LoginInput, LoginResult, generalConfig } from '../auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  generalConfig = new BehaviorSubject<generalConfig>({} as generalConfig);
  loginInfo = new BehaviorSubject<LoginResult>({} as LoginResult);

  isAuth = new BehaviorSubject<boolean>(false);
  token = new BehaviorSubject<string | undefined>(undefined);

  constructor(private httpAuth: HttpAuthService) {}

  initialize() {
    return this.httpAuth.initialize().pipe(
      tap((result: generalConfig) => {
        this.generalConfig.next(result);
      })
    );
  }

  login() {
    let input: LoginInput = {
      clientWidth: window.screen.width,
      clientHeight: window.screen.height,
      ssoToken:
        this.token.getValue(),
    };
    return this.httpAuth.login(input).pipe(
      tap((result: LoginResult) => {
        this.loginInfo.next(result);
      })
    );
  }
}
