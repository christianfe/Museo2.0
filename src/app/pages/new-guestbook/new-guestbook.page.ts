import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { GuestbookService } from 'src/app/services/guestbook.service';

@Component({
  selector: 'app-new-guestbook',
  templateUrl: './new-guestbook.page.html',
  styleUrls: ['./new-guestbook.page.scss'],
})
export class NewGuestbookPage implements OnInit {
  form: any
  isAlertOpen: boolean = false;
  public alertButtons = ['Chiudi'];
  public backPage = "/tabs/guestbook"

  constructor(private fb: FormBuilder, private router: Router, private guestbookService: GuestbookService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      descrizione: ['']
    });
  }


  onSubmit() {
    this.guestbookService.add({
      id: Math.floor(Math.random() * 1000), //FIXME obv not a random id
      nome: this.form.name,
      descrizione: this.form.descrizione
    })
    this.setAlertStatus(true);
  }

  setAlertStatus(s: boolean) {
    this.isAlertOpen = s
    if (!s)
      this.router.navigateByUrl(this.backPage)
  }
}

