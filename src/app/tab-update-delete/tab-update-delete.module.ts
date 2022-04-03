import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabUpdateDeletePageRoutingModule } from './tab-update-delete-routing.module';

import { TabUpdateDeletePage } from './tab-update-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabUpdateDeletePageRoutingModule
  ],
  declarations: [TabUpdateDeletePage]
})
export class TabUpdateDeletePageModule {}
