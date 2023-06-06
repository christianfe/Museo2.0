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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opera',
  templateUrl: './opera.page.html',
  styleUrls: ['./opera.page.scss'],
})
export class OperaPage implements OnInit {

  idOpera: number;
  opera: Opera | undefined;
  autore: Observable<Autore> | undefined;

  public commenti: Feedback[] = [];
  public commentiVisibili: Feedback[] = [];
  isInputOpen = false;
  public alertButtons = ['Inserisci'];
  public alertInputs = [
    {
      placeholder: 'Nome',
      attributes: {
        maxlength: 20,
      }
    },
    {
      type: 'textarea',
      placeholder: 'inserisci il tuo commento'
    },
  ];


  constructor(private route: ActivatedRoute, private operaservice: OperasService, private autoreservice: AuthorService, private guestbookservice: GuestbookService) {
    this.idOpera = route.snapshot.params['id']
    this.operaservice.get(this.idOpera).subscribe({
      next: o => this.opera = o
    });
    this.guestbookservice.getAll(this.idOpera).subscribe((f: Feedback[]) => {
      for (let c of f)
        this.commenti.push(c)
      this.commenti.reverse()
      this.pushComments();
    });
    //FIXME this.autore = this.autoreservice.get(this.opera.idAutore);
  }

  ngOnInit() {


  }


  pushComments() {
    for (let i = 0; ((i < 3) && (this.commentiVisibili.length < this.commenti.length)); i++)
      this.commentiVisibili.push(this.commenti[this.commentiVisibili.length]);
  }


  addComment() {
    this.isInputOpen = true;
  }
  alertDimiss(e: any) {
    this.isInputOpen = false;
    if (!e["detail"]["data"])
      return
    let user = e["detail"]["data"]["values"][0];
    let text = e["detail"]["data"]["values"][1];
    let comm: Feedback = {
      id: null,
      nome: user,
      descrizione: text,
      link: this.idOpera
    }
    this.guestbookservice.add(comm)
    this.commentiVisibili.splice(0, 0, comm)
  }
}
