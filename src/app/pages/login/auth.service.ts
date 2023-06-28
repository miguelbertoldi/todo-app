import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/classes/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = JSON.parse(localStorage.getItem('isAuthenticated'));

  users: User[];
  user: User;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private userRepository: UserRepository
    ) { 
      console.log(this.authenticatedUser)
      userRepository.getUsers().subscribe({
        next: (value) => {
          this.users = value;;
        }
      })
    }

  login(userId: string, userName: string): void {

    if (this.userExists(userId, userName)) {
      localStorage.setItem('isAuthenticated', JSON.stringify(true));

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/tarefas'])

    }
  }

  userExists(userId: string, userName: string): boolean {
    for (const i of this.users) {
      if (i.name == userName && i.id == userId) {
        this.user = i;
        localStorage.setItem('user', JSON.stringify(i));
        return true;
      }
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.authenticatedUser;
  }
}
