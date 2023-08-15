import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ChangePasswordDto } from 'src/models/auth/change-password.model';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent {
  @Input() changePasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    oldPassword: [
      '',
      [Validators.required, Validators.min(6), Validators.max(12)],
    ],
    newPassword: [
      '',
      [Validators.required, Validators.min(6), Validators.max(12)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.min(6), Validators.max(12)],
    ],
  });

  @Output() onChangePassword = new EventEmitter<ChangePasswordDto | null>();
  @Output() onBackToList = new EventEmitter<void>();

  get email() {
    return this.changePasswordForm.get('email');
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  constructor(private fb: FormBuilder) {}

  onChangePasswordSubmit() {
    this.onChangePassword.emit(this.changePasswordForm.value as ChangePasswordDto);
  }

  backToList() {
    console.log("clicked in form");
    
    this.onBackToList.emit();
  }
}
