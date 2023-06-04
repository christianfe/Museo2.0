import { Autore } from "./autore";

export class Opera {
  id!: number;
  titolo!: String;
  descrizione!: String;
  dataInizio!: Date;
  dataFine!: Date;
  altezza!: number;
  lunghezza!: number;
  profondita!: number;
  nomeAutore!: string;
  autore!: Autore | undefined;
  picture!: String;
  links!: String[];
  commenti: any;

  constructor(){}
}
