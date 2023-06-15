import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Stanza } from 'src/app/models/stanza';
import { OperasService } from 'src/app/services/operas.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  room: Stanza | undefined
  constructor(private route: ActivatedRoute, private operasService: OperasService, private nav: NavController) { }

  ngOnInit() {
    this.room = new Stanza(this.route.snapshot.params['id'], "stanza", "descrizione", "colore")
    this.operasService.getOperaByStanza(this.room.id!).subscribe({
      next: s => { this.room!.opere = s }
    })
  }

  routeToOpera(idOpera: number) {
    this.nav.navigateForward("/tabs/opera/" + idOpera)
  }
}
