import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Stanza } from 'src/app/models/stanza';
import { OperasService } from 'src/app/services/operas.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  room: Stanza | undefined
  id_stanza: number = 0;
  constructor(private route: ActivatedRoute, private roomService: RoomService, private operasService: OperasService, private nav: NavController) {
    this.id_stanza = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.roomService.get(this.id_stanza).subscribe({
      next: s => {
        this.room = s;
        this.operasService.getOperaByStanza(this.id_stanza).subscribe({
          next: o => { this.room!.opere = o }
        })
      },
      error: _ => this.nav.navigateForward("/not-found")
    })
  }

  routeToOpera(idOpera: number) {
    this.nav.navigateForward("/tabs/opera/" + idOpera)
  }
}
