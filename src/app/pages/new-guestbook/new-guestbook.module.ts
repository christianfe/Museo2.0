import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewGuestbookPageRoutingModule } from './new-guestbook-routing.module';
import { NewGuestbookPage } from './new-guestbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGuestbookPageRoutingModule
  ],
  declarations: [NewGuestbookPage]
})
export class NewGuestbookPageModule { }
