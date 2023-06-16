import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperaPageRoutingModule } from './opera-routing.module';

import { OperaPage } from './opera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperaPageRoutingModule
  ],
  declarations: [OperaPage]
})
export class OperaPageModule { }
