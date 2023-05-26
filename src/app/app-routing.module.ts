import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './pages/error/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/homepage',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contacts',
    redirectTo: 'tabs/contacts'
  },
  {
    path: 'museumindex',
    redirectTo: 'tabs/museumindex'
  },
  {
    path: 'scan-qr',
    redirectTo: 'tabs/scan-qr'
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },
  {
    path: '**',
    component: NotfoundComponent,
    pathMatch: "full"
  },  {
    path: 'guestbook',
    loadChildren: () => import('./pages/guestbook/guestbook.module').then( m => m.GuestbookPageModule)
  },
  {
    path: 'new-guestbook',
    loadChildren: () => import('./pages/new-guestbook/new-guestbook.module').then( m => m.NewGuestbookPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
