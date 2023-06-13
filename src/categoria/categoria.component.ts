import { Component, OnInit } from "@angular/core";

interface Tarefa {
  nome: string,
  categoria: string
}

interface Categoria {
  nome: string,
  color: string
}

interface Propriedade {
  nome: string,
  tipo: string,
  dado: string | number | string[],
  showInput: boolean
}



@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent {

  listaCategorias: string[] = [];
  listaTarefas: Tarefa[] = [];
  listaTipos: String[] = ['Texto', 'Número', 'Seleção'];
  listaProps: Propriedade[] = [];
  nome: string = '';
  color: string = '#ffffff';
  tipo: string;
  dado: string | number | string[]
  inputCategoria: boolean = false;
  categoriaAdd: string;

  ngOnInit() {

    if (localStorage.getItem('listaTarefas') != null) {
      this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
    }

    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'));

    }
  }

  showInput (prop): void {
    prop.showInput = true;
  }
  
  cadastrarCategoria (prop): void {

    prop.dado.push(this.categoriaAdd)
    console.log(prop)
    console.log(prop.dado)
    localStorage.setItem('listaProps', JSON.stringify(this.listaProps))
  }
  
  cadastrarPropriedade(): void {
    console.log(this.nome)
    console.log(this.tipo)

    let prop: Propriedade;

    if (this.tipo != 'Seleção') {
      prop = {
        nome: this.nome,
        tipo: this.tipo,
        dado: this.dado,
        showInput: this.inputCategoria
      }
    } else {
      prop = {
        nome: this.nome,
        tipo: this.tipo,
        dado: [],
        showInput: this.inputCategoria
      }
    }

    this.listaProps.push(prop);
    localStorage.setItem('listaProps', JSON.stringify(this.listaProps));

  }

  cancelar (prop): void {
    prop.showInput = false;
    localStorage.setItem('listaProps', JSON.stringify(this.listaProps));
  } 


  removerPropriedade(prop): void {


    this.listaProps.splice(this.listaProps.indexOf(prop), 1);

    localStorage.setItem('listaProps', JSON.stringify(this.listaProps));
    // localStorage.setItem('listaCategorias', JSON.stringify(this.listaCategorias));
  }

  limparInput(): void {
    this.nome = '';
  }


}
