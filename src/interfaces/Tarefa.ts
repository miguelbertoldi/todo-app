import { Propriedade } from "./propriedade";

export interface Tarefa {
    name: string,
    properties: Propriedade,
    content: string | number,
    inputAdd: boolean
}
