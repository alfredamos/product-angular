import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SharedModule } from '../shared/shared.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { AuthModule } from '../auth/auth.module';
import { DisplayOneUserComponent } from './display-one-user/display-one-user.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    DeleteUserComponent,
    DetailUserComponent,
    EditUserComponent,
    ListUserComponent,
    UsersTableComponent,
    UserDisplayComponent,
    DisplayOneUserComponent
  ],
  imports: [
    SharedModule,
   AuthModule
  ]
})
export class UserModule { }
