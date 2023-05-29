import { Opera } from "./opera";

export class Stanza { //FIXME interface
  id: number | undefined;
  nome: String | undefined;
  descrizione: String | undefined;
  opere: Opera[] = []
  constructor(id: number, nome: string, descrizione: string) {
    this.id = id;
    this.nome = nome;
    this.descrizione = descrizione
  }
}
