import { Component } from "@angular/core";

interface Propriedade {
  nome: string,
  tipo: string,
  conteudo: string[] | string | number,
  inputAdd: boolean
}

@Component({
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css']
})

export class PropsComponent {

  nome: string;
  tipo: string;
  conteudo: string;
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
        conteudo: [],
        inputAdd: false
      }
    } else {
      prop = {
        nome: this.nome,
        tipo: this.tipo,
        conteudo: this.conteudo,
        inputAdd: false
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
    console.log(prop.conteudo)
    if (Array.isArray(prop.conteudo)){
      prop.conteudo.push(this.conteudo);
      this.conteudo = '';
    }

      this.localStorage();
  }

  removerItem (item: string, prop: Propriedade): void {

    if (Array.isArray(prop.conteudo)){
      prop.conteudo.splice(prop.conteudo.indexOf(item), 1);
      this.conteudo = '';
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
