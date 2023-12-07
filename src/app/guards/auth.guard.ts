import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router)
  let isAuth = authService.isAuth.getValue();
  let token = route.queryParams['token'];
  if (token) {
    authService.token.next(token);
  }

  if (!isAuth && !state.url.includes("auth")) {
    router.navigate(['auth'], {queryParams: {token}});
    return false;
  }
  return true;
};
