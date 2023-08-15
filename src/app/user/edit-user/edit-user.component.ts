import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserDto } from 'src/models/auth/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  userForm!: FormGroup;
  id = "";

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.userForm = fb.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      gender: [''],
    });
  }

  ngOnInit(): void {
    combineLatest([this.userService.users$, this.route.paramMap])
      .pipe(
        map(([users, paraMap]) => {
          this.id = paraMap.get('id')!;
          const user = users.find((user: UserDto) => user.id === this.id);
          
          this.userForm.patchValue({
            id: user?.id,
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            gender: user?.gender,
          });
        })
      )
      .subscribe();           
  }

  onUserSubmit(value: UserDto): void {
    value.id = this.id;
    
    this.userService.editUser(value).subscribe((user) => {
      this.router.navigate(['/users']);
    });
  }

  backToList(): void {
    this.router.navigate(['/users']);
  }
}
