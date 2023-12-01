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
  token = new BehaviorSubject<string | null>(null);

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
        '8360a4e1883ca2b7adb5bf299f5482c607689c08ebf000ea34c16663d0b3a8d3e74681a1e4de75ce04367fee1d62ec88afedc66cb921f9e692c660fd1e4a59d00583c8be2c346a09134067ab6996f8a32679cce87e212c3a8aa07921881f1c904b13317f4c3d68af9252436e075a25e4a78e24bece753287d2f21cd9d83fc09a4ce78ba7517901974846863533d68b027d94eb6b23b1553cf27a8a878e31f9721edc4bc6b20e7d5355d01dc49ef324aad801db005f18e593a3f1d6f8b86078d668266ef40264cb923a39ce587b5e49932cdb2ce7fe8a185746e1d226aa8edf7603aa37b40df8cc829e322566d86f5072582fe1274d61a1cd6eab0d3e6ea8cf4fe815d56f6aef091aece920e6b6d8c2bedc9aec0de33d511af4b95a0c10055b8970f27995e51b802a290e220b1068674a13be33c778f07675aa722d5c6e7805bcdd1ad0e7c5c742f2ecd23ed3e6093055f55beb67b62e1e4462a03bb7813ef742920298f08a969e9eb44e0fb3de83797790c51b5e8426fc3558259005314df960e75eba170b92b23f5a03e3cd440f1e287a2ab7a1e7dd39734ff8e3a8470ad9c9b461382ac90578215b175cf0fca93f1132e70198fb3e673fd7cef6d317e28da20066b450a51aaa005e909baebdfe6789b4473d5a5acd13188ec41bac35a11a9363db5cd3af47c05b6c0bb2456f0b4516f0d7179751b2204c9d9a3016690d0b5bb5060e8d054a4d975aae5dc134600b921ac560adf4274c231656dde8acc480a8190c7bc9e1a7f4d8ff33686aba188f74a75e903d82625c893530e27c305dfd7f3859a51c4d3a287c61705d26c9c24ac2e7c5d8ffe8d887adbfdc1e7df1e306ad8bc3c07f2166dee5364d0df8d73f65c2f5867dbfb88abcf67fba91fcc9cca70fc6085695bc8ec454a53ac54d70be2af0f2946046c3ecd20cb2e557bc3c32093c05ca38884f4610da66a6ff98064c3d19a439613aa831954f',
    };
    return this.httpAuth.login(input).pipe(
      tap((result: LoginResult) => {
        this.loginInfo.next(result);
      })
    );
  }
}
