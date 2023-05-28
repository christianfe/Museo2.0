import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorPageRoutingModule } from './author-routing.module';

import { AuthorPage } from './author.page';
import { OperaTabComponent } from 'src/app/component/opera-tab/opera-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorPageRoutingModule
  ],
  declarations: [AuthorPage, OperaTabComponent]
})
export class AuthorPageModule { }
