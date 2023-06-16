import { Component, OnInit } from "@angular/core";

interface Propriedade {
  nome: string,
  tipo: string,
  conteudo: string[] | string | number,
  inputAdd: boolean
}

@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent {

  nome: string;
  tipo: string;
  conteudo: string;
  listaTipos: string[] = ['Texto', 'Número', 'Seleção'];
  listaProps: Propriedade[] = [];

  ngOnInit() {
    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps')); 
    }
  }

  cadastrarPropriedade (): void {

      const prop: Propriedade = {
        nome: this.nome,
        tipo: this.tipo,
        conteudo: this.conteudo,
        inputAdd: false
      }

    this.listaProps.push(prop);
    this.localStorage();
  }

  removerPropriedade (prop: Propriedade): void {
    this.listaProps.splice(this.listaProps.indexOf(prop), 1);
    this.localStorage();
  }

  adicionarItem (prop: Propriedade): void {
    if (Array.isArray(prop.conteudo)){
      prop.conteudo.push(this.conteudo);
    }

      prop.inputAdd = !prop.inputAdd;
      this.localStorage();
  }

  removerItem (item: string, prop: Propriedade): void {

    if (Array.isArray(prop.conteudo)){
      prop.conteudo.splice(prop.conteudo.indexOf(item), 1);
    }
    this.localStorage();
  }

  mostraInput (prop: Propriedade): void {
    prop.inputAdd = !prop.inputAdd;
  }

  localStorage (): void {
    localStorage.setItem('listaProps', JSON.stringify(this.listaProps));
  }

}
