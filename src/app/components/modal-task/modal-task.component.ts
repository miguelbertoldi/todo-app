import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/models/interfaces/Property';
import { Task } from 'src/models/interfaces/Task';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalComponent implements OnInit {

  @Input('propsList') propsList: Property[] = [];
  @Output() newCard = new EventEmitter();
  visible: boolean;

  task: Task = {
    name: '',
    properties: []
  }

  constructor() { }

  ngOnInit() {
  }

  createCard(): void {
    const newCard = { ...this.task };
    this.newCard.emit(newCard);
    this.changeVisibility();
  }

  addProperty(): void {

  }

  changeVisibility(): void {
    this.task.name = '';
    this.visible = !this.visible;
  }

}
