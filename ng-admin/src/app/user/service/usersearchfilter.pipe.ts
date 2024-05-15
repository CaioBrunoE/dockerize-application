import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'usersearchfilter'
})
export class UsersearchfilterPipe implements PipeTransform {

  transform(users: User[], searchValue:string): User[] {

    if(!users || ! searchValue) {
      return users;
    } else {
      return users.filter(user =>
        user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}
