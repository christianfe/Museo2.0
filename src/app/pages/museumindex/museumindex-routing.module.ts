import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumindexPage } from './museumindex.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumindexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumindexPageRoutingModule {}
