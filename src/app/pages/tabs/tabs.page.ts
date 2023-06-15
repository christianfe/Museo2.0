import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {

  constructor(private nav: NavController, private alertCtrl: AlertController) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.destroyScanner()
  }
  destroyScanner() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  async openScanner() {
    await BarcodeScanner.checkPermission({ force: true });

    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      let link = this.getLink(result.content)
      if (link == "")
        this.invalidAlert()
      else
        this.nav.navigateForward(link)
    }
    this.destroyScanner()
  };

  invalidAlert() {
    let alert = this.alertCtrl.create({
      header: "Errore!",
      subHeader: "Hai scannerizzato un codice non valido",
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.then(alert => alert.present());
  }

  getLink(data: string): string {
    console.log("ho letto: " + data);
    // QR CODE FORMAT OP#3 - AU#2 - MU#
    let type: string = "";
    let id: string = "";
    let d: string[] = data.split("#");
    if (d.length != 2)
      return ""
    switch (d[0]) {
      case "OP":
        type = "opera"
        break;
      case "AU":
        type = "author"
        break;
      case "MU":
        type = "museumindex"
        break;
      case "RM":
        type = "room"
        break;
      default:
        return ""
    }

    try {
      if (Number(d[1]) < 0)
        return ""
      else if (d[1] == "")
        id = "";
      else
        id = "/" + d[1];
    } catch (error) {
      return ""
    }
    localStorage.setItem(environment.QrCodeCheckedVAR, "1")
    let link = 'tabs/' + type + id;
    return link;
  }
}
