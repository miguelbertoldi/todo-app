import { Component } from "@angular/core";
import { Propriedade } from "src/interfaces/propriedade";
import { User } from "src/models/users/user";

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

  user: User = JSON.parse(localStorage.getItem('user'));

  ngOnInit() {

    if (localStorage.getItem('listaProps') != null) {
      this.listaProps = JSON.parse(localStorage.getItem('listaProps'));
    }

    for (const i of this.listaProps) {
      i.inputAdd = false;
    }
  }

  hasPermission(permission: string): boolean {
    return this.user.propertiesPermissions.some((propertiesPermissions) => {
      return propertiesPermissions === permission;
    });
  }

  cadastrarPropriedade (): void {
    let prop: Propriedade;

    if (this.tipo === 'Seleção') {
      prop = {
        name: this.nome,
        type: this.tipo,
        items: [],
        inputAdd: false
      }
    } else {
      prop = {
        name: this.nome,
        type: this.tipo,
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
    console.log(prop.items)
    if (Array.isArray(prop.items)){
      prop.items.push(this.item);
      this.item = '';
    }

      this.localStorage();
  }

  removerItem (item: string, prop: Propriedade): void {

    if (Array.isArray(prop.items)){
      prop.items.splice(prop.items.indexOf(item), 1);
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
