import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { form_contact } from 'src/app/models/formContact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})


export class ContactsPage implements OnInit {

  //form: form_contact = new form_contact()
  form: any;

  constructor(private fb: FormBuilder) { }


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
  }

}
