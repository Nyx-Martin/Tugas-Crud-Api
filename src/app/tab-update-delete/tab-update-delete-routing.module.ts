import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabUpdateDeletePage } from './tab-update-delete.page';

const routes: Routes = [
  {
    path: '',
    component: TabUpdateDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabUpdateDeletePageRoutingModule {}
