import { Component } from "@angular/core";

interface Propriedade {
  nome: string,
  tipo: string,
  itens ?: string[],
  inputAdd ?: boolean
}

@Component({
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css']
})

export class PropsComponent {

  nome: string;
  tipo: string;
  item: string;
  listaTipos: string[] = ['Texto', 'Número', 'Seleção'];
  listaProps: Propriedade[] = [];

  ngOnInit() {
    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'));
    }

    for (const i of this.listaProps) {
      i.inputAdd = false;
    }
  }

  cadastrarPropriedade (): void {
    let prop: Propriedade;

    if (this.tipo === 'Seleção') {
      prop = {
        nome: this.nome,
        tipo: this.tipo,
        itens: [],
        inputAdd: false
      }
    } else {
      prop = {
        nome: this.nome,
        tipo: this.tipo,
      }
    }

    this.listaProps.push(prop);
    this.localStorage();
  }

  removerPropriedade (prop: Propriedade): void {
    this.listaProps.splice(this.listaProps.indexOf(prop), 1);
    this.localStorage();
  }

  adicionarItem (prop: Propriedade): void {
    console.log(prop.itens)
    if (Array.isArray(prop.itens)){
      prop.itens.push(this.item);
      this.item = '';
    }

      this.localStorage();
  }

  removerItem (item: string, prop: Propriedade): void {

    if (Array.isArray(prop.itens)){
      prop.itens.splice(prop.itens.indexOf(item), 1);
      this.item = '';
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
