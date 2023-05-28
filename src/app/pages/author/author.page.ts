import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autore } from 'src/app/models/autore';
import { AuthorService } from 'src/app/services/author.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {
  idAuhtor: number
  author: Autore | undefined
  baseurl = environment.apiUrl + "autori"

  constructor(private route: ActivatedRoute, private authorService: AuthorService) {
    this.idAuhtor = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.authorService.get(this.idAuhtor).subscribe({
      next: a => this.author = a
    })
  }

}
