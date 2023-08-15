import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css'],
})
export class AlertModalComponent {
  @Output() onModalButtonHandler = new EventEmitter<boolean>();  
  @Input() modalButtonSave = '';
  @Input() modalMessage = '';
  @Input() modalTitle = '';
  @Input() modalButtonClose = '';

  modalButtonSubmit(value: boolean){
    this.onModalButtonHandler.emit(value);
  }

}
