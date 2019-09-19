import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewprojectDetailsPage } from './viewproject-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewprojectDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewprojectDetailsPage]
})
export class ViewprojectDetailsPageModule {}
