import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users$ = this.userService.getAllUser();

  constructor(private userService: UserService){}
}
