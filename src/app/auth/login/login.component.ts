import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDto } from 'src/models/auth/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, fb: FormBuilder){
    this.loginForm = fb.group({
      email: [''],
      password: ['']
    })
  }

  backToList(): void{
    this.router.navigate(["/products"]);
  }

  onLoginSubmit(value: LoginDto): void{
    this.authService.login(value).pipe(
      tap(authUser => {
        console.log("In login, authUser : ", authUser);
        this.authService.loginAuthUser(authUser);
      })
    ).subscribe(() => this.router.navigate(["/products"]))

  }
}
