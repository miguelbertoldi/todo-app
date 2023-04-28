import { Component } from '@angular/core';

interface Pessoa {
  nome: string;
  categoria: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  mostraInput: boolean = true;
  mostraCategoria: boolean = false;

  usuarios: Pessoa[] = [];

  pessoa: Pessoa = {
    nome: 'Sergio',
    categoria: ''
  }

  cadastrarUsuario(): void {
    console.log(this.pessoa);
    console.log(this.usuarios);

    const usuario: Pessoa = {
      nome: this.pessoa.nome,
      categoria: ''
    }

    this.usuarios.push(usuario);

    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  removerTarefa(usuario): void {
    this.usuarios.splice(this.usuarios.indexOf(usuario), 1)
    localStorage.removeItem('usuario');
    localStorage.removeItem('usuarios');
  }

  adicionarCategoria(usuario, event): void {
    usuario.categoria = event.target.innerText;
  }

  filterName : string = null;
  limpar() {
    this.pessoa.nome = ''
  }

  title = 'todo-app';
}
