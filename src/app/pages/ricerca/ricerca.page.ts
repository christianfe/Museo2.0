import { Component, OnInit } from '@angular/core';
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

      this.autori = [];
      this.autoriservice.getByFilterNome(stringa).subscribe( dati_autore => {



         for (let autore of dati_autore){
           this.autori.push({
             id: autore.id,
             nome: autore.nome,
             cognome: autore.cognome
           });
         }
      }
      )

      this.autoriservice.getByFilterCognome(stringa).subscribe(dati_autore => {

        for (let autore of dati_autore){
           this.autori.push({
             id: autore.id,
            nome: autore.nome,
            cognome: autore.cognome
          });
        }
      }

      )


    })
  }


}
