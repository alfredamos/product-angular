import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EditProfileDto } from 'src/models/auth/edit-profile.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  editProfileForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, fb:FormBuilder){
    this.editProfileForm = fb.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      gender: [''],
    });
  }

  ngOnInit(): void {
    this.authService.currentUser().pipe(
      tap((user) => {
        this.editProfileForm.patchValue({
          id: user.id,
          name: user.name,
         email: user.email,
         phone: user.phone,
         gender: user.gender
        })
      }),
      take(1)
    ).subscribe();
  }

  onEditProfileSubmit(value: EditProfileDto): void{
    this.authService.editProfile(value).subscribe((authUser) => {
      console.log("In edit-profile, authUser : ", authUser);
      this.router.navigate(["/products"])

    })
  }

  backToList(): void{
    this.router.navigate(["/products"])
  }
}
