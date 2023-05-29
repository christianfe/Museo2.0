import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stanza } from 'src/app/models/stanza';
import { OperasService } from 'src/app/services/operas.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  room: Stanza | undefined
  constructor(private route: ActivatedRoute, private operasService: OperasService, private router: Router) { }

  ngOnInit() {
    this.room = new Stanza(this.route.snapshot.params['id'], "stanza", "descrizione")
    this.operasService.getOperaByStanza(this.room.id!).subscribe({
      next: s => { this.room!.opere = s }
    })
  }

  routeToOpera(idOpera: number) {
    this.router.navigateByUrl("/tabs/opera/" + idOpera)
  }
}
