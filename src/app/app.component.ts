import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user/users.interface';
import { usersList } from '../data/users-list';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

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
    this.usersListFiltered = this.filterUserList(filterOptions, this.usersList)
  }

  onClear(filterOptions: IFilterOptions) {
    this.usersListFiltered = this.filterUserList(filterOptions, this.usersList)
    this.ngOnInit()
  }

  filterUserList(options: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = []

    filteredList = this.filterUsersListByName(options.name, usersList)
    filteredList = this.filterUsersListByStatus(options.status, filteredList)
    filteredList = this.filterUsersListByDate(options.startDate, options.endDate, filteredList)

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

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]):IUser[] {
    const statusNotTyped = status === undefined

    if(statusNotTyped){
      return usersList
    }

    const filteredList = usersList.filter((user) => user.ativo === status)
    return filteredList
  }

  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const dateNotTyped = startDate === undefined || endDate === undefined

    if(dateNotTyped){
      return usersList
    }

    const listFiltered = usersList.filter((user) =>
      isWithinInterval(new Date(user.dataCadastro), { start: startDate, end: endDate }))
    return listFiltered
  }
}
