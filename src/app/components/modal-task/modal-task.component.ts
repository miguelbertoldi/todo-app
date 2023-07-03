import { Component, Input, OnInit } from '@angular/core';
import { Propriedade } from 'src/models/interfaces/Propriedade';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalComponent implements OnInit {

  @Input('propsList') propsList: Propriedade[];

  constructor() { }

  ngOnInit() {
  }

}
