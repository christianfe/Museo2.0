import { Opera } from "./opera";

export class Stanza {
  id: number | undefined;
  nome: String | undefined;
  descrizione: String | undefined;
  operaRappresentativa: Opera | undefined;
  opere: Opera[] = []

  constructor(id: number, nome: string, descrizione: string) {
    this.id = id;
    this.nome = nome;
    this.descrizione = descrizione;
  }
}
