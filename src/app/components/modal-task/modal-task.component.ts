import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/models/interfaces/Property';
import { Task } from 'src/models/interfaces/Task';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalComponent implements OnInit {

  @Input('propsList') propsList: Property[] = [];
  @Output() newCard = new EventEmitter();

  task: Task = {
    name: '',
    properties: []
  }

  constructor() { }

  ngOnInit() {
  }

  createCard(): void {
    this.newCard.emit(this.task);
  }

  addProperty(): void {

  }

}
