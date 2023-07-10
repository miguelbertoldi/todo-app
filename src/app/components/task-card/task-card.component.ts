import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/models/interfaces/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input('task') task: Task;
  // @Input('hasPermission') hasPermission: boolean;

  @Output() remove = new EventEmitter()
  @Output() edit = new EventEmitter();

  isEditingTitle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editCardTitle(): void {
    this.isEditingTitle = !this.isEditingTitle;
  }

  commitChange(): void {
    this.edit.emit(this.task); //sempre que alterar é enviado pra home
  }

  editCardProperties(): void {

  }

  removeCard(): void {
    this.remove.emit(this.task);
  }


}
