import { Component } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from 'src/models/users/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Todo-App';

  private userId: string = 'joao.silva';
  private users: User[] = [];
  private user: User | undefined;

  constructor (private userRepository: UserRepository) {
    console.log(this.userRepository.getUsers());
    this.user = this.getUsuarioLogado();
    console.log(this.user);
  }

  private getUsuarioLogado (): User | undefined {
    return this.users.find((user) => {
      return user.id === this.userId;
    })
  }

  private hasPermissions(permission: string): boolean {
    return this.user.cardPermissions.some((cardPermission) => {
      return cardPermission === permission;
    })
  }
  
}
