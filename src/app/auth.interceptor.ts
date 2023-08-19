import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userInfo = JSON.parse(
      this.authService.getAuthUserFromStorage()
    ) as AuthApiResponse;
    const accessToken = userInfo?.token;
    console.log({ accessToken });

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 401) {
          console.log('Invalid credentials or expired token, please login!');
          this.authService.updateAuthUser$(new AuthApiResponse());
          window.location.href = '/must-login';
        } 
        if (event instanceof HttpResponse && event.status === 403) {
          console.log(
            'You are not authorized to view this page, please login!'
          );
          this.authService.updateAuthUser$(new AuthApiResponse());
          window.location.href = '/not-allowed';
        } /* else {
          console.log('Oops something went wrong, please login!');
          this.authService.updateAuthUser$(new AuthApiResponse());
          window.location.href = '/something-wrong';
        } */
      })
    );
  }
}
