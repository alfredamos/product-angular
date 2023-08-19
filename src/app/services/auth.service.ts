import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';
import { LoginDto } from 'src/models/auth/login.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ChangePasswordDto } from 'src/models/auth/change-password.model';
import { EditProfileDto } from 'src/models/auth/edit-profile.model';
import { SignupDto } from '../../models/auth/signup.model';
import { UserDetail } from 'src/models/auth/user-detail.model';
import { MakeAdminUserDto } from 'src/models/auth/make-admin-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = 'http://localhost:3000/api/auth';
  private authUserSubject = new BehaviorSubject<AuthApiResponse>(
    new AuthApiResponse()
  );
  authUser$ = this.authUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const userInfo = JSON.parse(this.getAuthUserFromStorage()) as AuthApiResponse;
    if (userInfo){
      this.updateAuthUser$(userInfo);
    }
  }

  changePassword(
    changePasswordDto: ChangePasswordDto
  ): Observable<AuthApiResponse> {
    return this.http.patch<AuthApiResponse>(
      `${this.url}/change-password`,
      changePasswordDto
    );
  }

  editProfile(editProfileDto: EditProfileDto): Observable<AuthApiResponse> {
    return this.http.patch<AuthApiResponse>(
      `${this.url}/edit-profile`,
      editProfileDto
    );
  }

  currentUser(): Observable<UserDetail>{
    return this.http.get<UserDetail>(`${this.url}/current-user`);
  }

  login(loginDto: LoginDto): Observable<AuthApiResponse> {
    return this.http.post<AuthApiResponse>(`${this.url}/login`, loginDto).pipe(
      tap(authApiResponse => {
        this.loginAuthUser(authApiResponse);
      })
    );
  }

  signup(signup: SignupDto): Observable<AuthApiResponse> {
    return this.http.post<AuthApiResponse>(`${this.url}/signup`, signup);
  }

  updateUserRole(changeUserRoleDto: MakeAdminUserDto){
    return this.http.patch<AuthApiResponse>(
      `${this.url}/change-role`,
      changeUserRoleDto
    );
  }

  updateAuthUser$(value: AuthApiResponse) {
    this.authUserSubject.next(value);
  }

  getAuthUserValue(): AuthApiResponse {
    return this.authUserSubject.getValue();
  }

  getAuthUserFromStorage(): string {
    return localStorage.getItem('userInfo')!;
  }

  logoutAuthUser() {
    this.updateAuthUser$(new AuthApiResponse());
    this.removeJwtToken();
  }

  loginAuthUser(value: AuthApiResponse): void {
    this.updateAuthUser$(value);
    this.setJwtToken(value);
  }

  setJwtToken(value: AuthApiResponse): void {
    localStorage.setItem('userInfo', JSON.stringify(value));
  }

  removeJwtToken() {
    localStorage.removeItem('userInfo');
  }
}
