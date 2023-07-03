import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { Propriedade } from 'src/models/interfaces/Propriedade';
import { Tarefa } from 'src/models/interfaces/Tarefa';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalComponent implements OnInit {

  @Input('propsList') propsList: Propriedade[];
  @Output() newCard = new EventEmitter();

  task: Tarefa = {
    name: '',
    content: ''
  }

  constructor() { }

  ngOnInit() {
  }

  createCard(): void {
    this.newCard.emit(this.task);
  }

}
