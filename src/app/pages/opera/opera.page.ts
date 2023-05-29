import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opera',
  templateUrl: './opera.page.html',
  styleUrls: ['./opera.page.scss'],
})
export class OperaPage implements OnInit {
  idOpera: number | undefined
  constructor(private route: ActivatedRoute) {
    this.idOpera = route.snapshot.params['id']
  }

  ngOnInit() {
  }

}
