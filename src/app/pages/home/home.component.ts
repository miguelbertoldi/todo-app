import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/classes/users/user";
import { Propriedade } from 'src/models/interfaces/Propriedade';
import { Tarefa } from 'src/models/interfaces/Tarefa';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  taskList: Tarefa[];
  propsList: Propriedade[];

  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
  }

  logout(): void {
    localStorage.setItem('user', JSON.parse(null));
    this.router.navigate(['']);
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

  // showInput (tarefa: Tarefa): void {
  //   tarefa.inputAdd = !tarefa.inputAdd;
  //   this.conteudo = '';

  //   for (const i of this.taskList) {
  //     if (i != tarefa) {
  //       i.inputAdd = false;
  //     }
  //   }
  //   this.setLocalStorage();
  // }

  // confirmarAlteracao (tarefa: Tarefa): void {
  //   tarefa.content = this.conteudo;
  //   this.showInput(tarefa);
  // }

  setLocalStorage (): void {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }


}
