import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDto } from 'src/models/auth/user.model';

@Component({
  selector: 'app-display-one-user',
  templateUrl: './display-one-user.component.html',
  styleUrls: ['./display-one-user.component.css'],
})
export class DisplayOneUserComponent {
  @Input() user = new UserDto();

  @Output() onDeleteHandler = new EventEmitter<boolean>()
  @Output() onBackToList = new EventEmitter<void>();

  backToList(){
    this.onBackToList.emit();
  }

  deleteUser(value: boolean){
    this.onDeleteHandler.emit(value);
  }
}
