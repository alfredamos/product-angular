import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { MakeAdminUserDto } from 'src/models/auth/make-admin-user.model';

@Component({
  selector: 'app-make-admin-user',
  templateUrl: './make-admin-user.component.html',
  styleUrls: ['./make-admin-user.component.css']
})
export class MakeAdminUserComponent implements OnInit {
  makeAdminUserForm: FormGroup;
  id = "";

  constructor(private authService: AuthService, private userService: UserService, private route: ActivatedRoute, private router: Router, fb: FormBuilder){
    this.makeAdminUserForm = fb.group({
      name: '',
      email: '',
      phone: '',
      gender: '',
      userType: '',
    });    
  }

  ngOnInit(): void {
    combineLatest([this.userService.getAllUser(), this.route.paramMap]).pipe(map(([userApiRes, paraMap]) => {
      this.id = paraMap.get('id')!;
      const user = userApiRes?.users?.find(user => user.id === this.id);
      console.log("make-admin, user : ", user);
      this.makeAdminUserForm.patchValue({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        gender: user?.gender,
        userType: user?.userType,
      });
    })).subscribe()
  }

  makeAdminUserSubmit(value: MakeAdminUserDto){
    console.log("launch pad, user : ", value)
    this.authService.updateUserRole(value).subscribe(() => this.router.navigate(["/users"]));
  }

  backToList(){
    this.router.navigate(["/users"]);
  }

}
