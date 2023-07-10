import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Property } from 'src/models/interfaces/Property';

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

  prop: Property = {
    name: '',
    type: '',
    content: ''
  }

  createProp() {
    const propsCopy = { ...this.prop }
    this.newProp.emit(propsCopy);
  }

}
