import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { IMasterProject } from 'src/app/utilityInterfaces/IMasterProject';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewprojects',
  templateUrl: './viewprojects.page.html',
  styleUrls: ['./viewprojects.page.scss'],
})
export class ViewprojectsPage implements OnInit {

  private masterProjects:IMasterProject[]=[];
  data: any;
  constructor(private databaseService:DatabaseService,
              private loader:LoadingController,
              private navCltr:NavController) {
        this.getMasterProjects();
   }

   async getMasterProjects(){
    const loading = await this.loader.create({
      message: 'loading ,please wait.....',
      spinner: 'circles',
      duration: 100000
    });
      await loading.present();

    this.databaseService.getMasterProjects().then(response=>{
    this.masterProjects=response;
    console.log(response);
    
    }).catch((e)=>console.log(e));
    await loading.dismiss();
  }

  viewDetails(event:any){
    this.data = event;
    let object = {
      ProjectCode: event
    }
    this.navCltr.navigateForward('/viewproject-details',{queryParams:object,});
  }




  ngOnInit() {
  }



}
