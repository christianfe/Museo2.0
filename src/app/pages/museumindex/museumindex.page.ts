import { Component, OnInit } from '@angular/core';
import { Stanza } from 'src/app/models/stanza';
import { Observable } from 'rxjs';
import { MuseumIndexService } from 'src/app/services/museumindex.service';
import { OperasService } from 'src/app/services/operas.service';
import { Opera } from 'src/app/models/opera';
import { AuthorService } from 'src/app/services/author.service';


@Component({
  selector: 'app-museumindex',
  templateUrl: './museumindex.page.html',
  styleUrls: ['./museumindex.page.scss'],
})
export class MuseumindexPage implements OnInit {



  // protected opera : Observable<Opera> | undefined;
  protected stanzemap! : Observable<Map<String, String>[]>;
  protected stanze!: Stanza[];

  //searchbar
  protected searching : boolean = false;

  constructor(private museumIndexService: MuseumIndexService,
    private operasService: OperasService,
    private autoreservice: AuthorService) {
   }


  ngOnInit() {
    this.museumIndexService.getAll().subscribe(
      ( objs : any )=> {
        this.stanze = [];
        for (let obj of objs){
          //posso iniziare a creare l'oggetto stanza
          let stanza : Stanza = new Stanza(Number(obj.id), String(obj.nome), String(obj.descrizione), String(obj.colore));
          //devo recuperare l'opera rappresentativa
          this.operasService.getMap(Number(obj.operaRappresentativa)).subscribe(
            (opj : any ) => {
              let operaRappresentativa : Opera = new Opera();
              operaRappresentativa.id = opj.id;
              operaRappresentativa.titolo = opj.titolo;
              operaRappresentativa.picture = opj.picture;

              this.autoreservice.get(opj.idAutore).subscribe(
                autore => {
                  operaRappresentativa.autore = autore;
                  stanza.operaRappresentativa = operaRappresentativa;
                  this.stanze.push(stanza)
                  console.log(stanza)
                }
              )
            }
          );
        }
      }
    )
  }

  handleInput(event : any) {

  }

  ChangeFocus(){
    this.searching = !this.searching;
  }

  CommittedSearch(event :any ){
    this.ChangeFocus();
    console.log("search done");
  }



}
