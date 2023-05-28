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

  protected guests!: Observable<Feedback[]>;


  constructor(private newservice: NewsService,
    private guestbookservice: GuestbookService,
    private http: HttpClient) { }

  ngOnInit() {

    //inizializzazione notizia
    this.notizia= this.newservice.get(1);

    //inizializzazione guestbook
    this.guests = this.guestbookservice.getHomeFeeds();



  }

}
