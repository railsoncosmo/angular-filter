import { IUser } from "../../interfaces/user/users.interface";
import { IFilterOptions } from "../../interfaces/filter-options.interface";
import { isWithinInterval } from "date-fns/isWithinInterval";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const nameNotTyped = name === undefined;

  if (nameNotTyped) {
    return usersList
  }

  const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))
  return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
  const statusNotTyped = status === undefined

  if (statusNotTyped) {
    return usersList
  }

  const filteredList = usersList.filter((user) => user.ativo === status)
  return filteredList
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const dateNotTyped = startDate === undefined || endDate === undefined

  if (dateNotTyped) {
    return usersList
  }

  const listFiltered = usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), { start: startDate, end: endDate }))
  return listFiltered
}

const filterUserList = (options: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = []

  filteredList = filterUsersListByName(options.name, usersList)
  filteredList = filterUsersListByStatus(options.status, filteredList)
  filteredList = filterUsersListByDate(options.startDate, options.endDate, filteredList)

  return filteredList
}

export { filterUserList }

