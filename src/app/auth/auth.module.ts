import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { ChangePasswordFormComponent } from './form/change-password-form/change-password-form.component';
import { EditProfileFormComponent } from './form/edit-profile-form/edit-profile-form.component';
import { SignupFormComponent } from './form/signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignupComponent } from './signup/signup.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { MustLoginComponent } from './must-login/must-login.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    ChangePasswordFormComponent,
    EditProfileFormComponent,
    SignupFormComponent,
    LoginComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    SignupComponent,
    HomeComponent,
    LogoutComponent,
    NotAllowedComponent,
    MustLoginComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EditProfileFormComponent,
    SignupFormComponent,    
  ]
})
export class AuthModule { }
