import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';
import { AuthService } from '../services/auth.service';

export const protectedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userInfo = JSON.parse(authService.getAuthUserFromStorage()) as AuthApiResponse;
  const isLoggedIn = userInfo?.isLoggedIn;

  if (!isLoggedIn) return router.navigate(["/must-login"]);
  
  return isLoggedIn;
};
