import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EraUmaVezPage } from './era-uma-vez.page';

const routes: Routes = [
  {
    path: '',
    component: EraUmaVezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EraUmaVezPageRoutingModule {}
