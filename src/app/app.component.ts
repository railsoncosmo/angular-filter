import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user/users.interface';
import { usersList } from '../data/users-list';
import { IFilterOptions } from '../interfaces/filter-options.interface';

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
    setTimeout(() => {
      this.usersList = usersList
      this.usersListFiltered = this.usersList
    }, 1000)
  }

  onUserSelected(user: IUser){
    this.userSelected = user
    this.showUserDetails = true
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = this.filterUserList(filterOptions, this.usersList)
  }

  filterUserList(options: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = []

    filteredList = this.filterUsersListByName(options.name, usersList)

    return filteredList
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]):IUser[] {
    const nameNotTyped = name === undefined;

    if(nameNotTyped){
      return usersList
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))
    return filteredList;
  }
}
