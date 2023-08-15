import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/models/auth/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input() loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6), Validators.max(12)]]
  });

  @Output() onLogin = new EventEmitter<LoginDto | null>();
  @Output() onBackToList = new EventEmitter<void>();

  get email(){
   return this.loginForm.get('email') ;
  }

  get password(){
   return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder){}

  onLoginSubmit(){
    this.onLogin.emit(this.loginForm.value as LoginDto);
  }

  backToList(){
    this.onBackToList.emit();
  }
}
