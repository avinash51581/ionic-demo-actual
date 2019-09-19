import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {

 private userName1='';

message="";
//   nameEventHander($event: any) {
//     this.userName1 = $event;
// }

receivedMessage($event){
  console.log("In Message Received");
  this.message=$event;
}


  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tabs',
      icon: 'home'
    },
    
    // {
    //   title: 'Profile',
    //   url: '/profile',
    //   icon: 'contact'
    // },
    {
      title: 'Download Projects',
      url: '/downloadprojects',
      icon: 'download'
    },
    {
      title: 'View Projects',
      url: '/viewprojects',
      icon: 'eye'
    },

    {
      title: 'Fill Observations',
      url: '/fillobservations',
      icon: 'create'
    },

    {
      title: 'Take Photographs',
      url: '/takephotos',
      icon:'md-photos'
      //icon: 'md-camera'
    },

    {
      title: 'Submit Details',
      url: '/submitmonitoringdetails',
      icon: 'md-checkmark-circle'
    },
    
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
  
    
    {
      title: 'Logout',
      url: '/home',
      icon: 'md-log-out'
    },

  ];


  public otherLabel = [
    {
      title: 'Other',
    },
  ];



  public otherPages = [
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'ios-contact'
    },

    {
      title: 'App Update',
      url: '/notification',
      icon: 'md-cloud-download'
    },

    
    {
      title: 'Notifications',
      url: '/notification',
      icon: 'ios-notifications'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'flash'
    },
    
   
  ];






  
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataBaseService:DatabaseService
  ) {
    
    console.log("In app.component.ts");
    this.initializeApp();
  }

  
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.dataBaseService.getUserDetails().then(response=>{
      //       this.USERNAME=response[0].UserName;
      //       console.log("USERNAME" + this.USERNAME);
      //   }).catch(e => console.log(e));
    
      
      

    });
  }
}
