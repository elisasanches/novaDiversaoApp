import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoobPageRoutingModule } from './scoob-routing.module';

import { ScoobPage } from './scoob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoobPageRoutingModule
  ],
  declarations: [ScoobPage]
})
export class ScoobPageModule {}
