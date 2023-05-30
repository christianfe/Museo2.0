import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Autore } from 'src/app/models/autore';
import { Opera } from 'src/app/models/opera';
import { AuthorService } from 'src/app/services/author.service';
import { OperasService } from 'src/app/services/operas.service';
import { formatDate } from '@angular/common';
import { Feedback } from 'src/app/models/feedback';
import { GuestbookService } from 'src/app/services/guestbook.service';

@Component({
  selector: 'app-opera',
  templateUrl: './opera.page.html',
  styleUrls: ['./opera.page.scss'],
})
export class OperaPage implements OnInit {

  idOpera: number;
  opera: Observable<Opera> | undefined;
  autore: Observable<Autore> | undefined;

  commenti: Feedback[] = [];



  constructor(private route: ActivatedRoute,
              private operaservice: OperasService,
              private autoreservice: AuthorService,
              private guestbookservice: GuestbookService) {
    this.idOpera = route.snapshot.params['id']
  }

  ngOnInit() {
    this.opera = this.operaservice.get(this.idOpera);
    this.opera.subscribe(opera => {

      for (let id of opera.commenti){
        this.guestbookservice.get(id).subscribe( commento => this.commenti.push(commento));
      }

      this.autore = this.autoreservice.get(opera.idAutore);
    })
  }

}
