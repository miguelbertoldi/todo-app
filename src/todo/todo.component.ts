import { Component, OnInit } from "@angular/core";


interface Tarefa {
    nome: string,
    categoria: string
}

@Component({
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {
    listaCategorias: string[] = [];
    tarefas: Tarefa[] = [];
    categoria: string = '';
    nomeTarefa: string = '';
    categoriaAlt: string = '';
    showCategoria: boolean = false;

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

          if (tarefaAdd.nome != '' && tarefaAdd.categoria != '') {

              this.listaTarefas.push(tarefaAdd);
              localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));  
            }
        this.limparInput();
    }

    removerTarefa(tarefa): void {
        this.listaTarefas.splice(this.listaTarefas.indexOf(tarefa), 1);
        localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
    }

    alterarCategoria(tarefaClick): void {
        tarefaClick.categoria = this.categoriaAlt;
        localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
        this.limparInput();
    }

    

    limparInput(): void {
        this.nomeTarefa = '';
        this.categoria = '';
        this.categoriaAlt = '';
    }

}