import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Propriedade } from 'src/models/interfaces/Propriedade';

@Component({
  selector: 'app-modal-prop',
  templateUrl: './modal-prop.component.html',
  styleUrls: ['./modal-prop.component.css']
})
export class ModalPropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() newProp = new EventEmitter();

  typeList: string[] = ['Seleção', 'Texto', 'Número'];

  prop: Propriedade = {
    name: '',
    type: ''
  }

  createProp() {
    const propsCopy = { ...this.prop }
    this.newProp.emit(propsCopy);
  }

}
