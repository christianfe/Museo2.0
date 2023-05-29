import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperaPage } from './opera.page';

const routes: Routes = [
  {
    path: '',
    component: OperaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperaPageRoutingModule {}
