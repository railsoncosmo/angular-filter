import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user/users.interface';
import { usersList } from '../data/users-list';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { filterUserList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser
  showUserDetails: boolean = false

  ngOnInit(): void {
    this.usersList = usersList
    this.usersListFiltered = this.usersList
  }

  onUserSelected(user: IUser){
    this.userSelected = user
    this.showUserDetails = true
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUserList(filterOptions, this.usersList)
  }

  onClear(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUserList(filterOptions, this.usersList)
    this.ngOnInit()
  }

  toggleShowDetails() {
    this.showUserDetails = !this.showUserDetails
  }
}
