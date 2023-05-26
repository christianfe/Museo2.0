import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { GuestbookService } from 'src/app/services/guestbook.service';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.page.html',
  styleUrls: ['./guestbook.page.scss'],
})
export class GuestbookPage implements OnInit {
  data: Feedback[] | undefined;

  constructor(private guestbookService: GuestbookService) { }

  ngOnInit() {
    this.guestbookService.getAll().subscribe({
      next: d => this.data = d
    })
  }

}