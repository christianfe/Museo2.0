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

  protected notizia!: Observable<Notizia>;

  constructor(private http : HttpClient,
              private newservice: NewsService,
              private guestbookservice: GuestbookService) {

  }

  ngOnInit() {
    this.notizia = this.newservice.get(1);
    this.notizia.subscribe(data => console.log(data))
  }

}
