import { Component } from "@angular/core";
import { User } from "src/models/classes/users/user";
import { Propriedade } from 'src/models/interfaces/Propriedade';
import { Tarefa } from 'src/models/interfaces/Tarefa';
import { AuthService } from '../../../services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  taskList: Tarefa[] = [
    {
      name: 'Tarefa 1',
      content: ''
    }
  ];

  propsList: Propriedade[] = [
    {
      name: 'Propriedade 1',
      type: 'Texto'
    }
  ];

  nome: string;
  prop: Propriedade;
  conteudo: string | number;

  propDrag: Propriedade;
  tarefaDrag: Tarefa;
  indexTarefaDrag: number;

  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit() {

    console.log(this.user)

    if (localStorage.getItem('propsList') != null) {
      this.propsList = JSON.parse(localStorage.getItem('propsList'))
    }

    if (localStorage.getItem('taskList') != null) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
    }
  }

  // hasPermission(permission: string): boolean {
  //   return this.user.cardPermissions.some((cardPermission) => {
  //     return cardPermission === permission;
  //   });
  // }

  createCard(card: Tarefa): void {
    this.taskList.push(card);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  removeCard(card: Tarefa) {
    this.taskList.splice(this.taskList.indexOf(card), 1);
    console.log(card)
  }

  removerTarefa (tarefa: Tarefa): void {
    this.taskList.splice(this.taskList.indexOf(tarefa), 1);
    this.setLocalStorage();
  }

  showInput (tarefa: Tarefa): void {
    tarefa.inputAdd = !tarefa.inputAdd;
    this.conteudo = '';

    for (const i of this.taskList) {
      if (i != tarefa) {
        i.inputAdd = false;
      }
    }
    this.setLocalStorage();
  }

  confirmarAlteracao (tarefa: Tarefa): void {
    tarefa.content = this.conteudo;
    this.showInput(tarefa);
  }

  setLocalStorage (): void {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  //drag n drop

  dragTarefa(tarefa: Tarefa): void {
    this.tarefaDrag = tarefa;
  }

  getIndex (index: number, event: Event): void {
    event.preventDefault();
    this.indexTarefaDrag = index;
  }

  dragoverProp (prop: Propriedade, event: Event): void {
    event.preventDefault();
    this.propDrag = prop;
  }

  drop (event: Event): void {
    event.preventDefault();
    if (this.tarefaDrag.properties.type != this.propDrag.type) {
      this.tarefaDrag.content = '';
    }

    this.tarefaDrag.properties = this.propDrag;
    this.taskList.splice(this.taskList.indexOf(this.tarefaDrag), 1);
    this.taskList.splice(this.indexTarefaDrag, 0, this.tarefaDrag);

  }

}
