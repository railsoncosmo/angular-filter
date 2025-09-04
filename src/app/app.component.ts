import { Component } from '@angular/core';
import { IUser } from '../interfaces/user/users.interface';
import { usersList } from '../data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser = usersList[0]
}
