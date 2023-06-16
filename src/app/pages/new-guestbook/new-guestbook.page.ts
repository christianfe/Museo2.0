import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
      id: null,
      nome: this.form.name,
      descrizione: this.form.descrizione,
      link: -1
    })
    this.setAlertStatus(true);
  }

  setAlertStatus(s: boolean) {
    this.isAlertOpen = s
    if (!s) {
      this.router.navigateByUrl(this.backPage)

    }

  }
}
