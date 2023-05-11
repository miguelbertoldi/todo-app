import { SlicePipe } from '@angular/common';
import { Component, ViewChildren } from '@angular/core';

interface Tarefa {
  nome: string;
  categoria: string;
}

interface Categoria {
  nome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo-app';
  
  todoVisible: boolean = true;
  doingVisible: boolean = true;
  doneVisible: boolean = true;
  inputVisible: boolean = true;

  ngOnInit(): void {
    if (localStorage.getItem('lista') != null) {
      this.lista = JSON.parse(localStorage.getItem('lista'));
    }

    if (localStorage.getItem('listaCategorias') != null) {
      this.listaCategorias = JSON.parse(localStorage.getItem('listaCategorias'));
    }
  }
  
  mostraInput: boolean = true;

  lista: Tarefa[] = [];

  listaCategorias = ['TODO', 'DOING', 'DONE']

  tarefa: Tarefa = {
    nome: '',
    categoria: ''
  }

  categoria: string = '';

  // CATEGORIA -------------------------------------------

  inserirCategoria(): void {

    this.listaCategorias.push(this.categoria);
    localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));

  }

  alterarCategoriaTarefa(opcao): void {
    console.log(opcao)
  }


  removerCategoria(categoriaAdd): void {
    //Add lista categorias
    this.listaCategorias.splice(this.listaCategorias.indexOf(categoriaAdd), 1);
    localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));


    //Remover itens da categoria removida

    let lista2 = JSON.parse(localStorage.getItem('lista'));

    for (const i of lista2) {
      if (i.categoria == categoriaAdd) {
        lista2.splice(this.lista.indexOf(i), 1);
      }
    }

    this.lista = lista2;
    localStorage.removeItem('lista');
    localStorage.setItem('lista', JSON.stringify(this.lista));
  }
  



  // TAREFA  -------------------------
  cadastrarTarefa(): void {
    
    const tarefaAdd: Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    }

    if(tarefaAdd.categoria != '' && tarefaAdd.nome != ''){
      
      this.lista.push(tarefaAdd);
      
      localStorage.setItem('lista', JSON.stringify(this.lista));

      this.inputVisible = false;   
    }
  }

  removerTarefa(tarefaAdd): void {
    this.lista.splice(this.lista.indexOf(tarefaAdd), 1)

    for (const i of localStorage.getItem('lista')) {
      if (i == tarefaAdd) {
        localStorage.removeItem(i);
      }
    };

    localStorage.removeItem('lista');
    localStorage.setItem('lista', JSON.stringify(this.lista));

  }

  // ALTERAR CATEGORIA -------------------------

  alterarCategoria(tarefaAdd, event): void {
    tarefaAdd.categoria = event.target.innerText;
    localStorage.removeItem('lista');
    localStorage.setItem('lista', JSON.stringify(this.lista));

  }

  //  INPUT  -------------------------

  input : string = null;

  limpar() {
    this.tarefa.nome = '';
    this.tarefa.categoria = '';
    this.categoria = '';
  }

  inputView(): void {
    this.inputVisible = true;
  }

}