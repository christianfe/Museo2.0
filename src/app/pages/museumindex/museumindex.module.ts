import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MuseumindexPageRoutingModule } from './museumindex-routing.module';
import { MuseumindexPage } from './museumindex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumindexPageRoutingModule
  ],
  declarations: [MuseumindexPage]
})
export class MuseumindexPageModule { }
