import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { EditProfileComponent } from './auth/edit-profile/edit-profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './auth/home/home.component';
import { MustLoginComponent } from './auth/must-login/must-login.component';
import { NotAllowedComponent } from './auth/not-allowed/not-allowed.component';
import { adminGuard } from './guard/admin.guard';
import { protectedGuard } from './guard/protected.guard';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';

const routes: Routes = [
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent},
  {path: 'must-login', component: MustLoginComponent},
  {path: 'not-allowed', component: NotAllowedComponent},
  { path: 'signup', component: SignupComponent },

  { path: 'products', component: ListProductComponent, canActivate: [protectedGuard] },
  {path: "products/create", component: CreateProductComponent},
  {path: "products/delete/:id", component: DeleteProductComponent},
  {path: "products/detail/:id", component: DetailProductComponent},
  {path: "products/edit/:id", component: EditProductComponent},

  { path: 'users', component: ListUserComponent, canActivate: [adminGuard], children: [
      {path: 'create', component: CreateUserComponent},
      {path: 'delete/:id', component: DeleteUserComponent},
      {path: 'detail/:id', component: DetailUserComponent},
      {path: 'edit/:id', component: EditUserComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
