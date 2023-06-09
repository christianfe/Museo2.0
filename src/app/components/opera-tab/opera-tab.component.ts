import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Opera } from 'src/app/models/opera';

@Component({
  selector: 'app-opera-tab',
  templateUrl: './opera-tab.component.html',
  styleUrls: ['./opera-tab.component.scss']
})
export class OperaTabComponent implements OnInit {

  @Input() public opera: Opera | undefined;
  constructor(private nav: NavController) { }

  ngOnInit() { }



}
