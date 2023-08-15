import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SignupDto } from 'src/models/auth/signup.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  @Input() signupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    password: [
      '',
      [Validators.required, Validators.min(6), Validators.max(12)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.min(6), Validators.max(12)],
    ],
    gender: ['']
  });

  @Input() formName = "Signup"

  @Output() onSignup = new EventEmitter<SignupDto | null>();
  @Output() onBackToList = new EventEmitter<void>();

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get phone() {
    return this.signupForm.get('phone');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  constructor(private fb: FormBuilder) {}

  onSignupSubmit() {
    this.onSignup.emit(this.signupForm.value as SignupDto);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
