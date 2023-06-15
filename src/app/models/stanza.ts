import { Opera } from "./opera";

export class Stanza {
  id: number | undefined;
  nome: String | undefined;
  descrizione: String | undefined;
  operaRappresentativa: Opera | undefined;
  colore: String | undefined;
  public opere: Opera[] = []

  constructor(id: number, nome: string, descrizione: string, colore: string) {
    this.id = id;
    this.nome = nome;
    this.descrizione = descrizione;
    this.colore = colore;
  }
}
