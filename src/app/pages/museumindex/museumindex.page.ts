import { Component, OnInit } from '@angular/core';
import { Stanza } from 'src/app/models/stanza';
import { Observable } from 'rxjs';
import { MuseumIndexService } from 'src/app/services/museumindex.service';


@Component({
  selector: 'app-museumindex',
  templateUrl: './museumindex.page.html',
  styleUrls: ['./museumindex.page.scss'],
})
export class MuseumindexPage implements OnInit {


 
  protected stanza : Observable<Stanza> | undefined;
  protected stanze : Observable<Stanza[]> | undefined;

  

  constructor(private museumIndexService: MuseumIndexService) {
   }

  ngOnInit() {

    this.stanze = this.museumIndexService.getAll();

    


  }

}
