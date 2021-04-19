import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  taskName: string;
  finalName: string;
  checkStatus: boolean;
  count: number = 0;
  tasks: Array<ITask> = [];
  saveTask: string;
  indexEdit: number;
  validSave: boolean;
  constructor() { }
  ngOnInit(): void {
  }
  addTask(): void {
    this.finalName = this.taskName;
    const task: ITask = {
      finalName: this.finalName,
      checkStatus: false,
    }
    this.tasks.push(task);
    this.taskName = '';
    this.count = this.tasks.length
  }
  checkstatus(index: number): void {
    if (this.tasks[index].checkStatus == true) {
      this.tasks[index].checkStatus = false;
    }
    else {
      this.tasks[index].checkStatus = true;
    }
  }
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.count = this.tasks.length;
  }
  editTask(index: number): void {
    this.saveTask = this.tasks[index].finalName;
    this.indexEdit = index;
    this.validSave = true;
  }
  saveValidTask(): void {
    this.tasks[this.indexEdit].finalName = this.saveTask;
    this.validSave = false;
  }
}
interface ITask {
  finalName: string,
  checkStatus: boolean
}