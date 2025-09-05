import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../interfaces/user/users.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = {} as IUser
  @Output('hideDetails') hideDetailsEmitt = new EventEmitter<boolean>()

  onClick() {
    this.hideDetailsEmitt.emit()
  }
}
