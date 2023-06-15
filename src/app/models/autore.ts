export interface Autore {
  id: number;
  nome: string;
  cognome: string;
  soprannome: string;
  descrizione: string;
  data_nascita: Date;
  data_morte: Date;
  luogoNascita: String;
  luogoMorte: String;
  url: string;
  links: string[];
}
