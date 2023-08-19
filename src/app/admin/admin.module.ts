import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { MakeAdminUserComponent } from './make-admin-user/make-admin-user.component';
import { MakeAdminUserFormComponent } from './make-admin-user-form/make-admin-user-form.component';
import { FeatureProductFormComponent } from './feature-product-form/feature-product-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminPanelComponent,
    FeatureProductComponent,
    MakeAdminUserComponent,
    MakeAdminUserFormComponent,
    FeatureProductFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }
