import { UserRepository } from 'src/repositories/user.repository';
import { Component } from "@angular/core";
import { User } from "src/models/classes/users/user";
import { Propriedade } from 'src/interfaces/Propriedade';
import { Tarefa } from 'src/models/interfaces/Tarefa';
import { AuthService } from '../../../services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class TodoComponent {

  listaTarefas: Tarefa[] = [];
  listaProps: Propriedade[];

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

    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'))
    }

    if (localStorage.getItem('listaTarefas') != null) {
      this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
    }
  }

  // hasPermission(permission: string): boolean {
  //   return this.user.cardPermissions.some((cardPermission) => {
  //     return cardPermission === permission;
  //   });
  // }

  cadastrarTarefa (): void {
    if (this.nome != '' && this.prop != null) {
      const tarefa: Tarefa = {
        name: this.nome,
        properties: this.prop,
        content: this.conteudo,
        inputAdd: false
      }

      this.listaTarefas.push(tarefa);
      this.setLocalStorage();
    }

    this.nome = '';
    this.prop = null;
  }

  removerTarefa (tarefa: Tarefa): void {
    this.listaTarefas.splice(this.listaTarefas.indexOf(tarefa), 1);
    this.setLocalStorage();
  }

  showInput (tarefa: Tarefa): void {
    tarefa.inputAdd = !tarefa.inputAdd;
    this.conteudo = '';

    for (const i of this.listaTarefas) {
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
    localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
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
    this.listaTarefas.splice(this.listaTarefas.indexOf(this.tarefaDrag), 1);
    this.listaTarefas.splice(this.indexTarefaDrag, 0, this.tarefaDrag);

  }

}
