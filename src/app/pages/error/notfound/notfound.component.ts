import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() { }
  navigate() {
    this.nav.navigateBack(['/tabs/homepage'])
  }
}
