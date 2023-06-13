import { Component, OnInit } from "@angular/core";

interface Tarefa {
  nome: string,
  propriedade: Propriedade
}

interface Propriedade {
  nome: string,
  tipo: string,
  dado: string | number | string[],
}

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {

  listaProps: Propriedade[];
  listaTarefas: Tarefa[] = [];

  propriedade: string;
  prop: Propriedade;

  nomeTarefa: string = '';
  showCategoria: boolean = false;

  indexDrag: number = 0;
  tarefaDrag: Tarefa = null;
  propriedadeDrop: Propriedade;




  ngOnInit() {

    if (localStorage.getItem('listaTarefas') != null) {
      this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
    }

    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'));
    }
  }

  cadastrarTarefa(): void {

    for (const i of this.listaProps) {
      if (i.nome == this.propriedade) {
        this.prop = i;
      }
    }

    console.log(this.propriedade)
    
    const tarefaAdd: Tarefa = {
      nome: this.nomeTarefa,
      propriedade: this.prop
      
    }
    console.log(this.propriedade);

    console.log(tarefaAdd)

    this.limparInput();
  }


  limparInput(): void {
    this.nomeTarefa = '';
  }


  // DRAG N DROP

  drag (tarefa: Tarefa): void {
    this.tarefaDrag = tarefa;
  }

  dragover (event: Event, prop: Propriedade): void {
    event.preventDefault();
    this.propriedadeDrop = prop;
  }

  getIndex (event: Event, index: number): void {
    event.preventDefault();
    this.indexDrag = index;
  }

  drop (event: Event): void {
    event.preventDefault();

    this.tarefaDrag.propriedade = this.propriedadeDrop;

    this.addLocalStorage();
  }
  

  addLocalStorage(): void {
    localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
  }

  teste(prop, tarefa) {
    console.log(prop)
    console.log(tarefa.prop)
  }

}
