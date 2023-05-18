import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.css']    
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

        if (this.categoria != '') {
            this.listaCategorias.push(this.categoria);
            localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
            this.limparInput();
        }
    }

    removerCategoria(categoriaRm): void {
        this.listaCategorias.splice(this.listaCategorias.indexOf(categoriaRm), 1);
        localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
    }

    limparInput(): void {
        this.categoria = '';
    }




}