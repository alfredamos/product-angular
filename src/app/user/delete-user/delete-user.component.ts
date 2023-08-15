import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserApiResults } from '../../../models/users/user-results.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  id = '';
  user$ = combineLatest([
    this.userService.getAllUser(),
    this.route.paramMap,
  ]).pipe(
    map(([userApiRes, params]) => {
      this.id = params.get('id')!;

      const users = userApiRes.users;
      const user = users?.find((user) => user.id === this.id);

      return user;
    })
  );

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  backToList() {
    this.router.navigate(['/users']);
  }

  deleteUser(value: boolean){
    console.log("In edit-user, value : ", value);
    if(value){
      this.userService.deleteUser(this.id).subscribe(() => this.router.navigate(['/users']))
    }else{
      this.router.navigate(["/users"]);
    }
  }
}
