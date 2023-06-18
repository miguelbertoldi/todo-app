import { Component } from "@angular/core";

interface Propriedade {
  nome: string,
  tipo: string,
  itens ?: string[],
}

interface Tarefa {
  nome: string,
  propriedades: Propriedade,
  conteudo: string | number,
  inputAdd: boolean
}

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {

  listaTarefas: Tarefa[] = [];
  listaProps: Propriedade[];

  nome: string;
  prop: Propriedade;
  conteudo: string | number;

  propDrag: Propriedade;
  tarefaDrag: Tarefa;
  indexTarefaDrag: number;

  ngOnInit() {
    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'))
    }

    if (localStorage.getItem('listaTarefas') != null) {
      this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
    }
  }

  cadastrarTarefa (): void {
    if (this.nome != '' && this.prop != null) {
      const tarefa: Tarefa = {
        nome: this.nome,
        propriedades: this.prop,
        conteudo: this.conteudo,
        inputAdd: false
      }

      this.listaTarefas.push(tarefa);
      this.setLocalStorage();
    }

    this.nome = '';
    this.prop = null;
  }

  removerTarefa (tarefa: Tarefa): void {
    this.listaTarefas.splice(this.listaTarefas.indexOf(tarefa), 1);
    this.setLocalStorage();
  }

  showInput (tarefa: Tarefa): void {
    tarefa.inputAdd = !tarefa.inputAdd;
    this.conteudo = '';

    for (const i of this.listaTarefas) {
      if (i != tarefa) {
        i.inputAdd = false;
      }
    }
    this.setLocalStorage();
  }

  confirmarAlteracao (tarefa: Tarefa): void {
    tarefa.conteudo = this.conteudo;
    this.showInput(tarefa);
  }

  setLocalStorage (): void {
    localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
  }

  //drag n drop

  dragTarefa(tarefa: Tarefa): void {
    this.tarefaDrag = tarefa;
  }

  getIndex (index: number, event: Event): void {
    event.preventDefault();
    this.indexTarefaDrag = index;
  }

  dragoverProp (prop: Propriedade, event: Event): void {
    event.preventDefault();
    this.propDrag = prop;
  }

  drop (event: Event): void {
    event.preventDefault();
    if (this.tarefaDrag.propriedades.tipo != this.propDrag.tipo) {
      this.tarefaDrag.conteudo = '';
    }

    this.tarefaDrag.propriedades = this.propDrag;
    this.listaTarefas.splice(this.listaTarefas.indexOf(this.tarefaDrag), 1);
    this.listaTarefas.splice(this.indexTarefaDrag, 0, this.tarefaDrag);

  }

}
