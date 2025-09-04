import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../../interfaces/user/users.interface';
import { usersList } from '../../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  usersList: IUser[] = usersList
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Output() userClickedEmitter = new EventEmitter<IUser>();

  onUserSelected(user: IUser){
    this.userClickedEmitter.emit(user)
  }
}
