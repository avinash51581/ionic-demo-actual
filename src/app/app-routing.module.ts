import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  // { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },


  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',loadChildren: './home/home.module#HomePageModule'}, //Login Page
  {path: 'list',loadChildren: './list/list.module#ListPageModule'},
  {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},  //Menu Page
  
  { path: 'downloadprojects', loadChildren: './pages/monitoring/downloadprojects/downloadprojects.module#DownloadprojectsPageModule' },
  { path: 'viewprojects', loadChildren: './pages/monitoring/viewprojects/viewprojects.module#ViewprojectsPageModule' },
  { path: 'fillobservations', loadChildren: './pages/monitoring/fillobservations/fillobservations.module#FillobservationsPageModule' },
  { path: 'takephotos', loadChildren: './pages/monitoring/takephotos/takephotos.module#TakephotosPageModule' },
  { path: 'submitmonitoringdetails', loadChildren: './pages/monitoring/submitmonitoringdetails/submitmonitoringdetails.module#SubmitmonitoringdetailsPageModule' },

  // { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'viewproject-details', loadChildren: './pages/monitoring/viewprojects/viewproject-details/viewproject-details.module#ViewprojectDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
