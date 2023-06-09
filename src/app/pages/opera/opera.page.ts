import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Autore } from 'src/app/models/autore';
import { Opera } from 'src/app/models/opera';
import { AuthorService } from 'src/app/services/author.service';
import { OperasService } from 'src/app/services/operas.service';
import { Feedback } from 'src/app/models/feedback';
import { GuestbookService } from 'src/app/services/guestbook.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';


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
  public isConfirmOpen = false;
  public result_h: string = "";
  public QRcodeChecker: boolean = false;
  public alertButtons = ['Inserisci'];
  public confirmButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nome',
      attributes: {
        maxlength: 20
      }
    },
    {
      type: 'textarea',
      placeholder: 'inserisci il tuo commento'
    },
  ];


  constructor(private route: ActivatedRoute, private local: LocalStorageService, private operaservice: OperasService, private guestbookservice: GuestbookService, private alertCtrl: AlertController) {
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
    let confirm = this.alertCtrl.create({
      header: 'Inserisci il tuo commento',
      inputs: [{
        placeholder: 'Nome',
        name: "nome",
        attributes: {
          maxlength: 20
        }
      },
      {
        type: 'textarea',
        name: "commento",
        placeholder: 'inserisci il tuo commento'
      }],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel'
        },
        {
          text: 'Inserisci',
          handler: (data: any) => {
            let user = data["nome"];
            let text = data["commento"];
            if (user != "" && text != "") {
              let comm: Feedback = {
                id: null,
                nome: user,
                descrizione: text,
                link: this.idOpera
              }
              this.guestbookservice.add(comm)
              this.commenti.splice(0, 0, comm)
              this.showConfirm(1);
            } else
              this.showConfirm(0);
          }
        }
      ]
    });
    confirm.then(alert => alert.present());
  }
  showConfirm(type: number) {
    let h: string = ""
    let b: string = ""
    if (type == 1) {
      h = "Operazione eseguita!"
      b = "Il tuo commento è stato aggiunto"
    } else if (type == 0) {
      h = "Errore!"
      b = "I campi richiesti devono essere compilati"
    }
    let alert = this.alertCtrl.create({
      header: h,
      subHeader: b,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.then(alert => alert.present());
  }

  // alertDimiss(e: any) {
  //   if (!this.isInputOpen) {
  //     this.isInputOpen = false;
  //     return
  //   }
  //   this.isConfirmOpen = false;
  //   if (!e)
  //     return
  //   let user = e["detail"]["data"]["values"][0];
  //   let text = e["detail"]["data"]["values"][1];

  //   if (user != "" && text != null) {
  //     this.result_h = "Il tuo commento è stato inserito!"
  //     this.isConfirmOpen = true;
  //   } else {
  //     this.result_h = "Non puoi lasciare i campi vuoti, riprova";
  //     this.isConfirmOpen = true;
  //     window.location.reload();
  //     return
  //   }


  // }
}
