import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/classes/users/user";
import { Property } from 'src/models/interfaces/Property';
import { Task } from 'src/models/interfaces/Task';
import { CookieService } from "src/services/cookie-service.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  taskList: Task[] = [];
  propsList: Property[] = [];
  user: User = JSON.parse(this.cookieService.getCookieValue('user'));

  constructor(
    private router: Router,
    private cookieService: CookieService
    ) {
      if (localStorage.getItem('taskList') != null) {
        this.taskList = JSON.parse(localStorage.getItem('taskList'));
      }

      if (localStorage.getItem('propsList') != null) {
        this.propsList = JSON.parse(localStorage.getItem('propsList'));
      }
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

  createCard(card: Task): void {
    this.taskList.push(card);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  editCard(): void {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  removeCard(card: Task) {
    this.taskList.splice(this.taskList.indexOf(card), 1);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  createProp(prop: Property) {
    this.propsList.push(prop);
    localStorage.setItem('propsList', JSON.stringify(this.propsList));
  }

}
