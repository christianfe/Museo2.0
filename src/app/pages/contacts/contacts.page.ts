import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContattiService } from 'src/app/services/contatti.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})


export class ContactsPage implements OnInit {

  form: any;
  isAlertOpen: boolean = false;
  public alertButtons = ['Chiudi'];
  public backPage = "/"

  constructor(private fb: FormBuilder, private nav: NavController, private contattiService: ContattiService) { }


  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      mail: [''],
      obj: [''],
      mex: ['']
    });

  }

  onSubmit() {
    this.contattiService.addContact({
      id: null,
      nome: this.form.name,
      mail: this.form.mail,
      oggetto: this.form.obj,
      messaggio: this.form.mex
    });
    this.setAlertStatus(true);
  }

  setAlertStatus(s: boolean) {
    this.isAlertOpen = s
    if (!s)
      this.nav.navigateForward(this.backPage)
  }
}
