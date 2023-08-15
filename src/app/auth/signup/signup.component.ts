import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignupDto } from 'src/models/auth/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, fb: FormBuilder){
     this.signupForm = fb.group({
       name: [''],
       email: [''],
       phone: [''],
       password: [''],
       confirmPassword: [''],
       gender: [''],
     });
  }

  onSignupSubmit(value: SignupDto): void{
    this.authService.signup(value).subscribe(authUser => {
      console.log("In signup, authUser : ", authUser);
      this.router.navigate(["/login"]);

    })
  }

  backToList(): void{
    this.router.navigate(["/login"])
  }
}
