import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userInfo = JSON.parse(this.authService.getAuthUserFromStorage()) as AuthApiResponse
    const accessToken = userInfo?.token;
    console.log({ accessToken });

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next.handle(request);

  }
}
