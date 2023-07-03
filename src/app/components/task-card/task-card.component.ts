import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/models/interfaces/Tarefa';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input('task') task: Tarefa;
  // @Input('hasPermission') hasPermission: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.task)
  }

}
