import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorPageRoutingModule } from './author-routing.module';

import { AuthorPage } from './author.page';
import { OperaTabComponent } from 'src/app/components/opera-tab/opera-tab.component';
import { RoomPageModule } from '../room/room.module';
import { AppModule } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorPageRoutingModule,
    AppModule
  ],
  declarations: [AuthorPage, OperaTabComponent]
})
export class AuthorPageModule { }
