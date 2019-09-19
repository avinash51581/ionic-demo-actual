import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubmitmonitoringdetailsPage } from './submitmonitoringdetails.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitmonitoringdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubmitmonitoringdetailsPage]
})
export class SubmitmonitoringdetailsPageModule {}
