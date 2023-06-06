import { Autore } from "./autore";

export class Opera {
  id: number | undefined;
  titolo: String | undefined;
  descrizione: String | undefined;
  dataInizio: Date | undefined;
  dataFine: Date | undefined;
  altezza: number | undefined;
  lunghezza: number | undefined;
  profondita: number | undefined;
  nomeAutore: string | undefined;
  autore: Autore | undefined;
  picture: String | undefined;
  links: String[] = [];
  commenti: any;

  constructor() { }
}
