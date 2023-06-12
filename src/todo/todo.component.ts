import { Component, OnInit } from "@angular/core";

interface Tarefa {
  nome: string,
  categoria: string
}

interface Categoria {
  nome: string,
  color: string
}

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  listaCategorias: Categoria[] = [];
  tarefas: Tarefa[] = [];
  categoria: string = '';
  nomeTarefa: string = '';
  categoriaAlt: string = '';
  showCategoria: boolean = false;
  indexDrag: number = 0;
  tarefaDrag: Tarefa = null;
  categoriaDrop: string = '';

  listaTarefas: Tarefa[] = [];


  ngOnInit() {

    if (localStorage.getItem('listaTarefas') != null) {
      this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
    }

    if (localStorage.getItem('listaCategorias') != null) {
      this.listaCategorias = JSON.parse(localStorage.getItem('listaCategorias'));
    }
  }

  cadastrarTarefa(): void {

    const tarefaAdd: Tarefa = {
      nome: this.nomeTarefa,
      categoria: this.categoria
    }

    if (this.verificar()) {

      if (tarefaAdd.nome != '' && tarefaAdd.categoria != '') {
        this.listaTarefas.push(tarefaAdd);
        this.addLocalStorage();

      }
    } else {
      alert('Tarefa já cadastrada!')
    }
    this.limparInput();
  }

  verificar(): boolean {
    for (const i of this.listaTarefas) {
      if (i.nome === this.nomeTarefa) {
        return false;
      }
    }
    return true;
  }

  removerTarefa(tarefa): void {
    this.listaTarefas.splice(this.listaTarefas.indexOf(tarefa), 1);
    this.addLocalStorage();
  }

  alterarCategoria(tarefa): void {
    tarefa.categoria = this.categoriaAlt;
    tarefa.showCategoria = false;
    this.addLocalStorage();
    this.limparInput();
  }

  showCategoriaFunc(tarefa): void {
    tarefa.showCategoria = true;
  }

  limparInput(): void {
    this.nomeTarefa = '';
    this.categoria = '';
    this.categoriaAlt = '';
  }


  // DRAG N DROP

  dragover(categoria: Categoria, event: Event): void {
    event.preventDefault();
    this.categoriaDrop = categoria.nome;
  }

  drag(tarefa: Tarefa): void {
    this.tarefaDrag = tarefa;
  }

  getIndex(index: number, event: Event): void {
    event.preventDefault();
    this.indexDrag = index;
    console.log(index)
  }

  drop(event: Event) {
    event.preventDefault();
    this.tarefaDrag.categoria = this.categoriaDrop;

    this.ajustarPosicao();
  }

  ajustarPosicao(): void {

    this.listaTarefas.splice(this.listaTarefas.indexOf(this.tarefaDrag), 1);
    this.listaTarefas.splice(this.indexDrag, 0, this.tarefaDrag);
    
    this.addLocalStorage();
  }

  addLocalStorage(): void {
    localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
  }

}
