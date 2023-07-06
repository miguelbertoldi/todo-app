import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/classes/users/user";
import { Propriedade } from 'src/models/interfaces/Propriedade';
import { Tarefa } from 'src/models/interfaces/Tarefa';
import { CookieService } from "src/services/cookie-service.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  taskList: Tarefa[] = [];
  propsList: Propriedade[] = [];
  user: User = JSON.parse(this.cookieService.getCookieValue('user'));

  
  constructor(
    private router: Router,
    private cookieService: CookieService
    ) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
    }

  logout(): void {
    this.cookieService.removeCookie();
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
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  createProp(prop: Propriedade) {
    console.log(prop);
    console.log(this.propsList)
    this.propsList.push(prop);
    localStorage.setItem('propsList', JSON.stringify(this.propsList));
  }

}
