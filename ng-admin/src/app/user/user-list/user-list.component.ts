import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  totalLength: any;
  page: number = 1;

  searchValue: any;

  users: User[] = [];
  selectedUser: User;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe( response => this.users = response);
  }


  createUser() {
    this.router.navigate(['/user-form'])
  }


}
