import { Propriedade } from "./Propriedade";

export interface Tarefa {
    name: string,
    properties?: Propriedade,
    content: string | number,
    inputAdd?: boolean
}
