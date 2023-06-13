import { Component, OnInit } from "@angular/core";

interface Tarefa {
  nome: string,
  propriedade: Propriedade
}

interface Propriedade {
  nome: string,
  tipo: string,
  dado: string | number | string[]
}

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  listaProps: Propriedade[];
  tarefas: Tarefa[] = [];
  propriedade: Propriedade;
  nomeTarefa: string = '';
  categoriaAlt: string = '';
  showCategoria: boolean = false;
  indexDrag: number = 0;
  tarefaDrag: Tarefa = null;
  propriedadeDrop: Propriedade;

  listaTarefas: Tarefa[] = [];


  ngOnInit() {

    if (localStorage.getItem('listaTarefas') != null) {
      this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
    }

    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'));
    }
  }

  cadastrarTarefa(): void {

    const tarefaAdd: Tarefa = {
      nome: this.nomeTarefa,
      propriedade: this.propriedade
    }

    console.log(tarefaAdd)

    if (this.verificar()) {

      if (tarefaAdd.nome != '') {
        this.listaTarefas.push(tarefaAdd);
        this.addLocalStorage();

      }
    } else {
      alert('Tarefa já cadastrada!')
    }
    console.log(this.listaProps)
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
    this.categoriaAlt = '';
  }


  // DRAG N DROP

  dragover(propriedade: Propriedade, event: Event): void {
    event.preventDefault();
    this.propriedadeDrop = propriedade;
    console.log(propriedade)

  }

  drag(tarefa: Tarefa): void {
    this.tarefaDrag = tarefa;
    console.log(tarefa)
  }

  getIndex(index: number, event: Event): void {
    event.preventDefault();
    this.indexDrag = index;
    console.log(index)
  }

  drop(event: Event) {
    event.preventDefault();
    this.tarefaDrag.propriedade = this.propriedadeDrop;

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
