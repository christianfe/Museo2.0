import { Component, OnInit } from '@angular/core';
import { Stanza } from 'src/app/models/stanza';
import { Observable } from 'rxjs';
import { MuseumIndexService } from 'src/app/services/museumindex.service';
import { OperasService } from 'src/app/services/operas.service';
import { Opera } from 'src/app/models/opera';


@Component({
  selector: 'app-museumindex',
  templateUrl: './museumindex.page.html',
  styleUrls: ['./museumindex.page.scss'],
})
export class MuseumindexPage implements OnInit {


 
  // protected opera : Observable<Opera> | undefined;
  protected stanze : Stanza[] | undefined;

  

  constructor(private museumIndexService: MuseumIndexService, private operasService: OperasService) {
   }

  ngOnInit() {

    this.museumIndexService.getAll().subscribe(dati=>{
      this.stanze = dati;
    });
  



  }

}
