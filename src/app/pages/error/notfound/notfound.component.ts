import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  navigate() {
    this.router.navigate(['/tabs/homepage'])
  }
}
