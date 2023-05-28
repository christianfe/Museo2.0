import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autore } from 'src/app/models/autore';
import { Opera } from 'src/app/models/opera';
import { AuthorService } from 'src/app/services/author.service';
import { OperasService } from 'src/app/services/operas.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})

export class AuthorPage implements OnInit {
  idAuhtor: number
  author: Autore | undefined
  operas: Opera[] | undefined

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private operaService: OperasService) {
    this.idAuhtor = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.authorService.get(this.idAuhtor).subscribe({
      next: a => this.author = a
    });
    this.operaService.getOperaByAuthor(this.idAuhtor).subscribe({
      next: o => this.operas = o
    });
  }

}
