import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: 'categoria.component.html'
})

export class CategoriaComponent {
    listaCategorias: string[] = ['TODO', 'DOING', 'DONE'];
    categoria: string = '';

    ngOnInit() {
        if (localStorage.getItem('listaCategorias') != null) {
            this.listaCategorias = JSON.parse(localStorage.getItem('listaCategorias'));
        }
    }

    cadastrarCategoria(): void {
        this.listaCategorias.push(this.categoria);
        localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
    }

    removerCategoria(categoriaRm): void {
        this.listaCategorias.splice(this.listaCategorias.indexOf(categoriaRm), 1);
        localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
    }




}