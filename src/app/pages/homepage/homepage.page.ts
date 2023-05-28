import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { HttpClient } from '@angular/common/http';
import { GuestbookService } from 'src/app/services/guestbook.service';
import { Notizia } from 'src/app/models/notizia';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  protected notizia: Notizia | undefined;

  constructor(private newservice: NewsService, private guestbookservice: GuestbookService) {

  }

  ngOnInit() {
    this.newservice.get(1).subscribe(data => this.notizia = data[0])
  }

}
