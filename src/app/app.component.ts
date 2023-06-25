import { Component } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor(
    private userRepository: UserRepository
  ) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

  // adicionarTarefa(): void {
  //   if (!this.hasPermission('Add')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // editarTarefa(): void {
  //   if (!this.hasPermission('Edit')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // removerTarefa(): void {
  //   if (!this.hasPermission('Remove')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // hasPermission(permission: string): boolean {
  //   return this.user.cardPermissions.some((cardPermission) => {
  //     return cardPermission === permission;
  //   });
  // }

  // private getUsuarioLogado(): User {
  //   return this.users.find((user) => {
  //     return user.id === this.userId
  //   }) as User;
  // }

}
