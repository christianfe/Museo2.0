import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'homepage',
        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepagePageModule)
      },
      {
        path: 'news/:id',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
      },
      {
        path: 'museumindex',
        loadChildren: () => import('../museumindex/museumindex.module').then(m => m.MuseumindexPageModule)
      },
      {
        path: 'guestbook',
        loadChildren: () => import('../guestbook/guestbook.module').then(m => m.GuestbookPageModule)
      },
      {
        path: 'new-feedback',
        loadChildren: () => import('../new-guestbook/new-guestbook.module').then(m => m.NewGuestbookPageModule)
      },
      {
        path: 'author/:id',
        loadChildren: () => import("../author/author.module").then(m => m.AuthorPageModule)
      },
      {
        path: 'room/:id',
        loadChildren: () => import("../room/room.module").then(m => m.RoomPageModule)
      },
      {
        path: 'opera/:id',
        loadChildren: () => import("../opera/opera.module").then(m => m.OperaPageModule)
      },
      {
        path: 'ricerca',
        loadChildren: () => import('../ricerca/ricerca.module').then(m => m.RicercaPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
