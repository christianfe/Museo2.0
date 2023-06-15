import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { GuestbookService } from 'src/app/services/guestbook.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.page.html',
  styleUrls: ['./guestbook.page.scss'],
})
export class GuestbookPage implements OnInit {
  data: Feedback[] = []
  public QRcodeChecker: boolean = false;


  constructor(private guestbookService: GuestbookService, private local: LocalStorageService) {
    this.QRcodeChecker = local.getData(environment.QrCodeCheckedVAR) == "1"

  }

  ngOnInit() {
    this.guestbookService.getAll(-1).subscribe({
      next: (f: Feedback[]) => this.data = f.reverse()
    });
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      this.guestbookService.getAll(-1).subscribe({
        next: (f: Feedback[]) => this.data = f.reverse()
      });
      event.target.complete();
    }, 300);
  }

}
