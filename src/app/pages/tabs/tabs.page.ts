import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private navCltr:NavController,
    private dataBaseService:DatabaseService) {
    
   }

   redirectToDownloadPage(){
     this.navCltr.navigateForward('/downloadprojects');

   }

   redirectToViewPage(){
    this.navCltr.navigateForward('/viewprojects');

   }

   redirectToFillObservationPage(){
    this.navCltr.navigateForward('/fillobservations');

   }

   redirectToTakePhotoPage(){
    this.navCltr.navigateForward('/takephotos');
   }

   redirectToSubmitPage(){
    this.navCltr.navigateForward('/submitmonitoringdetails');

   }
   logout(){
    this.navCltr.navigateForward('/home');
   }




  ngOnInit() {
  }

}
