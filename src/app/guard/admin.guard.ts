import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';
import { UserType } from 'src/models/auth/user-type.model';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userInfo = JSON.parse(authService.getAuthUserFromStorage()) as AuthApiResponse;
  const isAdmin = userInfo?.userType === UserType.Admin;
  
  if (!isAdmin) return router.navigate(['/not-allowed']);
  
  return isAdmin
};
