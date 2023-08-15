import { Component, Input } from '@angular/core';
import { UserDto } from 'src/models/auth/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  @Input() users: UserDto[] = [];
}
