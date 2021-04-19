import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  userlogin: string;
  userpassword: string;
  useremail: string;
  users: Array<IUser> = [];
  saveindex: number;
  editstatus: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    const userInfo = {
      userlogin: this.userlogin,
      userpassword: this.userpassword,
      useremail: this.useremail
    }
    this.users.push(userInfo);
    this.userlogin = '';
    this.userpassword = '';
    this.useremail = '';
    console.log(this.users);
  }
  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
  editUser(index: number): void {
    this.userlogin = this.users[index].userlogin;
    this.useremail = this.users[index].useremail;
    this.userpassword = this.users[index].userpassword;
    this.saveindex = index;
    this.editstatus = true;
  }
  saveUser(): void {
    const userInfo = {
      userlogin: this.userlogin,
      userpassword: this.userpassword,
      useremail: this.useremail
    }
    this.users.splice(this.saveindex, 1, userInfo);
    this.editstatus = false;
    this.userlogin = '';
    this.userpassword = '';
    this.useremail = '';
  }
}

interface IUser {
  userlogin: string;
  userpassword: string;
  useremail: string;
}