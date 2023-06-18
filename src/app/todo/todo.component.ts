import { Component } from "@angular/core";

interface Propriedade {
  nome: string,
  tipo: string,
  itens ?: string[],
}

interface Tarefa {
  nome: string,
  propriedades: Propriedade,
  conteudo: string | number
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
  conteudo: string | number = '';

  ngOnInit() {
    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'));
    }
  }

  cadastrarTarefa (): void {

    if (this.nome != '' && this.prop != null) {
      const tarefa: Tarefa = {
        nome: this.nome,
        propriedades: this.prop,
        conteudo: this.conteudo
      }
      
      this.listaTarefas.push(tarefa);
      this.localStorage();
    }

  }



  localStorage (): void {
    localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
  }

}
