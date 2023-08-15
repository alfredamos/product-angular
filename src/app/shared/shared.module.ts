import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import {HttpClientModule}from "@angular/common/http";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AlertModalComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AlertModalComponent,
    NavigationBarComponent
  ]
})
export class SharedModule { }
