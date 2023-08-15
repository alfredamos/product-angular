import { Component, Input } from '@angular/core';
import { UserDto } from 'src/models/auth/user.model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {
  @Input() user = new UserDto();
}
