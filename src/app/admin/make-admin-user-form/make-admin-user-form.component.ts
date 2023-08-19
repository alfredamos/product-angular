import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/models/auth/gender.model';
import { MakeAdminUserDto } from 'src/models/auth/make-admin-user.model';
import { UserType } from 'src/models/auth/user-type.model';

@Component({
  selector: 'app-make-admin-user-form',
  templateUrl: './make-admin-user-form.component.html',
  styleUrls: ['./make-admin-user-form.component.css'],
})
export class MakeAdminUserFormComponent {
  @Input() makeAdminUserForm = this.fb.group({
    name: '',
    email: '',
    phone: '',
    gender: '',
    userType: '',
  });

  @Output() onMakeUserAdmin = new EventEmitter<MakeAdminUserDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,   
  ) {}

  makeUserAdmin(){
    const formValue = this.makeAdminUserForm.value as MakeAdminUserDto;
    this.onMakeUserAdmin.emit(formValue);

  }

  backToList(){
    this.onBackToList.emit()
  }
}
