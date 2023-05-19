import { Component, OnInit } from "@angular/core";
import { Console } from "console";

interface Tarefa {
    nome: string,
    categoria: string
}

@Component({
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.css']    
})

export class CategoriaComponent {
    listaCategorias: string[] = ['TODO', 'DOING', 'DONE'];
    listaTarefas: Tarefa[] = [];
    categoria: string = '';

    ngOnInit() {
        if (localStorage.getItem('listaCategorias') != null) {
            this.listaCategorias = JSON.parse(localStorage.getItem('listaCategorias'));
        }

        if (localStorage.getItem('listaTarefas') != null) {
            this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
        }
    }

    cadastrarCategoria(): void {

        if (this.categoria != '') {
            this.listaCategorias.push(this.categoria);
            localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
            this.limparInput();
        }
    }

    removerCategoria(categoriaRm): void {
        this.listaCategorias.splice(this.listaCategorias.indexOf(categoriaRm), 1);

        for (const j of this.listaTarefas) {   
            for (const i of this.listaTarefas) {
                if (i.categoria == categoriaRm) {
                    this.listaTarefas.splice(this.listaTarefas.indexOf(i), 1);
                }
            }
        }
        
        localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
        localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
    }

    limparInput(): void {
        this.categoria = '';
    }

}