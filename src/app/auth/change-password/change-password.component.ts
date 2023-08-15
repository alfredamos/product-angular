import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ChangePasswordDto } from 'src/models/auth/change-password.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, fb: FormBuilder) {
    this.changePasswordForm = fb.group({
      email: [''],
      oldPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
  
    })
  }

  ngOnInit(): void {
    this.authService
      .currentUser()
      .pipe(
        tap((user) => {
          this.changePasswordForm.patchValue({
            email: user.email,
          });
        }),
        take(1)
      )
      .subscribe();
  }

  onChangePasswordSubmit(value: ChangePasswordDto): void {
    this.authService.changePassword(value).subscribe((authUser) => {
      console.log('In change-password, authUser : ', authUser);
      this.router.navigate(['/products']);
    });
  }

  backToList(): void {
    console.log("clicked in the parent element");
    
    this.router.navigate(['/products']);
  }
}
