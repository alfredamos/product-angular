import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EditProfileDto } from 'src/models/auth/edit-profile.model';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css'],
})
export class EditProfileFormComponent {
  @Input() editProfileForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    password: [
      '',
      [Validators.required, Validators.min(6), Validators.max(12)],
    ],
    gender: [''],
  });

  @Input() formName = "Edit Profile";

  @Output() onEditProfile = new EventEmitter<EditProfileDto | null>();
  @Output() onBackToList = new EventEmitter<void>();

  get name() {
    return this.editProfileForm.get('name');
  }

  get email() {
    return this.editProfileForm.get('email');
  }

  get phone() {
    return this.editProfileForm.get('phone');
  }

  get password() {
    return this.editProfileForm.get('password');
  }

  constructor(private fb: FormBuilder) {}

  onEditProfileSubmit() {
    this.onEditProfile.emit(this.editProfileForm.value as EditProfileDto);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
