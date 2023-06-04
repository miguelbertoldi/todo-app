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
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent {

    listaCategorias: Categoria[] = [{nome: 'TO-DO', color: '#FF0000'}, {nome: 'DOING', color: '#FFAE00'}, {nome: 'DONE', color: '#16BD00'}];
    listaTarefas: Tarefa[] = [];
    nome: string = '';
    color: string = '#ffffff';

    ngOnInit() {

      if (localStorage.getItem('listaCategorias') != null) {
        this.listaCategorias = JSON.parse(localStorage.getItem('listaCategorias'));
      }

      if (localStorage.getItem('listaTarefas') != null) {
        this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
      }
    }

    cadastrarCategoria(): void {

      const categoria: Categoria = {
        nome: this.nome,
        color: this.color
      }

        if (this.nome != '') {
            this.listaCategorias.push(categoria);
            localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
            this.limparInput();
        }
    }

    removerCategoria(categoriaRm): void {
        this.listaCategorias.splice(this.listaCategorias.indexOf(categoriaRm), 1);

        for (let j = 0; j <= this.listaTarefas.length; j++) {
            for (const i of this.listaTarefas) {
                if (i.categoria == categoriaRm.nome) {
                    this.listaTarefas.splice(this.listaTarefas.indexOf(i), 1);
                }
            }
        }

        localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
        localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
    }

    limparInput(): void {
        this.nome = '';
    }


}
