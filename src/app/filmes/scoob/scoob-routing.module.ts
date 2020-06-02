import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoobPage } from './scoob.page';

const routes: Routes = [
  {
    path: '',
    component: ScoobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoobPageRoutingModule {}
