import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDto } from 'src/models/auth/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.userForm = fb.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      confirmPassword: [''],
      gender: [''],
    });
  }

  userSubmit(userDto: UserDto){
    console.log("new User info, user: ", userDto);
    this.userService.createUser(userDto).subscribe(() => this.router.navigate(["/users"]));
  }

  backToList(){
    this.router.navigate(["/users"]);
  }
}
