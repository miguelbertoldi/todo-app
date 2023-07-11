import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/models/interfaces/Property';
import { Task } from 'src/models/interfaces/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input('task') task: Task;
  @Input('propsList') propsList: Property[] = [];
  // @Input('hasPermission') hasPermission: boolean;

  @Output() remove = new EventEmitter()
  @Output() edit = new EventEmitter();

  isEditing: boolean;
  newProp: Property;

  constructor() { }

  ngOnInit() {
  }

  editCard(): void {
    this.isEditing = !this.isEditing;
  }

  commitChange(): void {
    this.edit.emit(this.task); //sempre que alterar é enviado pra home
  }

  addProperty(): void {
    const newProp = { ...this.newProp }; //cópia
    this.task.properties.push(newProp);
    this.commitChange(); //propriedade é adicionada no click no select
  }

  removeProperty(prop: Property): void {
    this.task.properties.splice(this.task.properties.indexOf(prop));
  }

  propertyAlreadyExists(prop: Property): boolean {
    return this.task.properties.some((property) => {
      property.name === prop.name;
    });
  }

  submit(): void {
    this.newProp = null;
    this.editCard();
  }

  removeCard(): void {
    this.remove.emit(this.task);
  }


}
