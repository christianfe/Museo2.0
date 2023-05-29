import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      obj: [''],
      mex: ['']
    });

  }

  onSubmit() {
    console.log(this.form.name)
    console.log(this.form.obj)
    console.log(this.form.mex)
    this.setAlertStatus(true);
  }

  setAlertStatus(s: boolean) {
    this.isAlertOpen = s
    if (!s)
      this.router.navigateByUrl(this.backPage)
  }
}
