import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Autore } from 'src/app/models/autore';
import { Opera } from 'src/app/models/opera';
import { AuthorService } from 'src/app/services/author.service';
import { OperasService } from 'src/app/services/operas.service';
import { Feedback } from 'src/app/models/feedback';
import { GuestbookService } from 'src/app/services/guestbook.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-opera',
  templateUrl: './opera.page.html',
  styleUrls: ['./opera.page.scss'],
})
export class OperaPage implements OnInit {

  public idOpera: number;
  public opera: Observable<Opera> | undefined;
  public autore: Observable<Autore> | undefined;
  private page: number = 1;
  public noMoreComments = false;
  public commenti: Feedback[] = [];
  public isInputOpen = false;
  public QRcodeChecker: boolean = false;
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


  constructor(private route: ActivatedRoute, private local: LocalStorageService, private operaservice: OperasService, private autoreservice: AuthorService, private guestbookservice: GuestbookService) {
    this.idOpera = route.snapshot.params['id']
    this.opera = this.operaservice.get(this.idOpera)
    this.pushComments();
    //local.setData(environment.QrCodeCheckedVAR, "1");
    //local.clearData()
    this.QRcodeChecker = local.getData(environment.QrCodeCheckedVAR) == "1"
  }

  ngOnInit() { }


  pushComments() {
    if (this.noMoreComments)
      return
    this.guestbookservice.getPage(this.idOpera, this.page, 3).subscribe((f: Feedback[]) => {
      this.noMoreComments = f.length != 3;
      for (let c of f)
        this.commenti.push(c)
    });
    this.page++;

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
    this.commenti.splice(0, 0, comm)
  }
}
