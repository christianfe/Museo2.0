import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
