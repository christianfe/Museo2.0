import { Component, OnInit } from '@angular/core';
import { Notizia } from 'src/app/models/notizia';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {

  protected notizia! : Observable<Notizia>;


  constructor(private newservice: NewsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.notizia = this.newservice.get(parseInt(params.get('id')!,0))
    })
  }


}
