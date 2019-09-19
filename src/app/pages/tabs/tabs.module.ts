import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

import { ContactPage } from 'src/app/pages/contact/contact.page';
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';
import { NotificationPageModule } from 'src/app/pages/notification/notification.module';
import { ProfilePageModule } from 'src/app/pages/profile/profile.module';

const routes: Routes = [
  {
    path: 'tabs',
   component: TabsPage,
    children:[
      {
        path:'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      
      // {
      //   path:'tabs',
      //   loadChildren: './pages/tabs/tabs.module#TabsPageModule'
      // },

      
      {
        path:'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
        //component:ContactPageModule
      },
      {
        path:'about',
        loadChildren: '../about/about.module#AboutPageModule'
        //component:AboutPageModule
      },
      
      {
        path:'notification',
        loadChildren: '../notification/notification.module#NotificationPageModule'
        //component:NotificationPageModule
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageModule,
    ContactPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
