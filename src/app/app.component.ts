import { Component, ViewChildren } from '@angular/core';

interface Tarefa {
  nome: string;
  categoria: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo-app';

  @ViewChildren('divDone') done;
  @ViewChildren('divDoing') doing;
  @ViewChildren('divTodo') todo;
  
  todoVisible: boolean = true;
  doingVisible: boolean = true;
  doneVisible: boolean = true;

  ngOnInit(): void {
    if (localStorage.getItem('lista') != null) {
      this.lista = JSON.parse(localStorage.getItem('lista'));
    }
  }
  
  mostraInput: boolean = true;

  lista: Tarefa[] = [];

  tarefa: Tarefa = {
    nome: '',
    categoria: ''
  }

  // CADASTRAR TAREFA  -------------------------

  cadastrarTarefa(): void {
    console.log(this.tarefa);
    console.log(this.lista);

    const tarefaAdd: Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    }

    if(tarefaAdd.categoria != '' && tarefaAdd.nome != ''){
      
      this.lista.push(tarefaAdd);
      
      localStorage.setItem('lista', JSON.stringify(this.lista));
    }
  }

  // REMOVER TAREFA  -------------------------

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


  // ADICIONAR CATEGORIA -------------------------

  adicionarCategoria(tarefaAdd, event): void {
    tarefaAdd.categoria = event.target.innerText;
    localStorage.removeItem('lista');
    localStorage.setItem('lista', JSON.stringify(this.lista));
  }


  // LIMPAR INPUT  -------------------------

  input : string = null;

  limpar() {
    this.tarefa.nome = ''
  }

  visibleDone(): void {

    if (!this.todoVisible) {
      this.todoVisible = true;
      this.doingVisible = true;

    } else {
      this.todoVisible = false;
      this.doingVisible = false;
    }

  } 

  visibleDoing(): void {

    if (!this.todoVisible) {
      this.todoVisible = true;
      this.doneVisible = true;

    } else {
      this.todoVisible = false;
      this.doneVisible = false;
    }

  } 

  visibleTodo(): void {

    if (!this.doingVisible) {
      this.doingVisible = true;
      this.doneVisible = true;

    } else {
      this.doingVisible = false;
      this.doneVisible = false;
    }
  } 

}
