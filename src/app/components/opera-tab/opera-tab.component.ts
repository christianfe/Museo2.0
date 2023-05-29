import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opera } from 'src/app/models/opera';

@Component({
  selector: 'app-opera-tab',
  templateUrl: './opera-tab.component.html',
  styleUrls: ['./opera-tab.component.scss']
})
export class OperaTabComponent implements OnInit {

  @Input() public opera: Opera | undefined;
  constructor(private router: Router) { }

  ngOnInit() { }

  routeToOpera(idOpera: number) {
    this.router.navigateByUrl("/tabs/opera/" + idOpera)
  }

}
