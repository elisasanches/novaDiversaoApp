import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EraUmaVezPageRoutingModule } from './era-uma-vez-routing.module';

import { EraUmaVezPage } from './era-uma-vez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EraUmaVezPageRoutingModule
  ],
  declarations: [EraUmaVezPage]
})
export class EraUmaVezPageModule {}
