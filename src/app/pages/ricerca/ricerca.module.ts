import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicercaPageRoutingModule } from './ricerca-routing.module';

import { RicercaPage } from './ricerca.page';

import { OperasService } from 'src/app/services/operas.service';
import { AuthorService } from 'src/app/services/author.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicercaPageRoutingModule
  ],
  declarations: [RicercaPage]
})
export class RicercaPageModule {



}
