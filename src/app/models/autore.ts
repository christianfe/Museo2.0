export interface Autore {
  id: number;
  nome: string;
  cognome: string;
  soprannome: string;
  descrizione: string;
  dataNascita: Date;
  dataMorte: Date;
  luogoNascita: String;
  luogoMorte: String;
  url: string;
  links: string[];
}
