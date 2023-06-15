import { Component, OnInit } from '@angular/core';
import { Autore } from 'src/app/models/autore';
import { AuthorService } from 'src/app/services/author.service';
import { OperasService } from 'src/app/services/operas.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.page.html',
  styleUrls: ['./ricerca.page.scss'],
})
export class RicercaPage implements OnInit {

  autori!: {id:number, nome: string, cognome:string}[];
  opere!: {id:number, nome:string}[];
  autori_id! : number[];

 constructor(private operaservice :OperasService,
             private autoriservice: AuthorService) {

  let cerca : string = "";
  this.cerca(cerca);


 }
  ngOnInit() {
  }

  handleInput(event : any){
    const query = event.target.value;
    //console.log(query)
    this.cerca(query);
  }

  cerca(stringa: string){
    this.opere = [];
    this.operaservice.getByFilter(stringa).subscribe( dati_opera => {

      for (let opera of dati_opera){

        this.opere.push({
          id: <number>opera.id,
          nome: <string>opera.titolo
      });
      }

      this.autori = [];     //questo è l'array che verrà usato per mostrare i risultati a schermo
      this.autori_id = [];  //l'array id mi serve per evitare di inserire duplicati nella lista dei risultati

      // Cerco un matching della stringa sia nel nome, che nel cognome, che nel soprannome
      this.autoriservice.getByFilterNome(stringa).subscribe( dati_autore => this.Aggiorna_autori(dati_autore));
      this.autoriservice.getByFilterCognome(stringa).subscribe(dati_autore => this.Aggiorna_autori(dati_autore));
      this.autoriservice.getByFilterSoprannome(stringa).subscribe(dati_autore => this.Aggiorna_autori(dati_autore));


    })
  }

  private Aggiorna_autori(autori : Autore[]){
    for (let autore of autori){

      let aut_struct = {
        id: autore.id,
       nome: autore.nome,
       cognome: autore.cognome
     };
     //prima di inserire l'autore nell'array vede se c'è già
     if (!this.autori_id.includes(aut_struct.id)){
      this.autori.push(aut_struct);
      this.autori_id.push(aut_struct.id);
     }
    }
  }
}
