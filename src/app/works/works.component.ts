import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  cenzor: boolean;
  task: boolean;
  users: boolean;
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (this.router.url == '/works/userslist') {
      this.users = true;
      this.task = false;
      this.cenzor = false;
    }
    if (this.router.url == '/works/tasklist') {
      this.task = true;
      this.cenzor = false;
      this.users = false;
    }
    if (this.router.url == '/works/cenzor') {
      this.cenzor = true;
      this.task = false;
      this.users = false;
    }
  }
}
