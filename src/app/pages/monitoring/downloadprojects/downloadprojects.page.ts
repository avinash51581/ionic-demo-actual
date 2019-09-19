import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Toast } from 'src/app/utilityClasses/toastController';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IMasterState } from 'src/app/utilityInterfaces/IMasterState';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMasterSubSector } from 'src/app/utilityInterfaces/IMasterSubSector';
import { IMasterPurpose } from 'src/app/utilityInterfaces/IMasterPurpose';
import { IMasterStateImplementingDepartment } from 'src/app/utilityInterfaces/IMasterStateImplementingDepartment';
import { IMasterActivity } from 'src/app/utilityInterfaces/IMasterActivity';
import { IMasterTranche } from 'src/app/utilityInterfaces/IMasterTranche';
import { IMasterProject } from 'src/app/utilityInterfaces/IMasterProject';
import { DownloadProjectRequestModule } from 'src/app/models/DownloadProjects/downloadProjectRequestModule';
import { DownloadProjectResponseModule } from 'src/app/models/DownloadProjects/downloadProjectResponseModule';
import { DownloadProjectService } from 'src/app/services/DownLoadProjects/download-project.service';
//import { SelectSearchableComponent } from 'ionic-select-searchable';

@Component({
  selector: 'app-downloadprojects',
  templateUrl: './downloadprojects.page.html',
  styleUrls: ['./downloadprojects.page.scss'],
})
export class DownloadprojectsPage implements OnInit {
  downloadForm: FormGroup;
  private masterState: IMasterState[] = [];
  private masterSubSector: IMasterSubSector[] = [];
  private masterPurpose: IMasterPurpose[] = [];
  private masterStateImpldept: IMasterStateImplementingDepartment[] = [];
  private masterActivity: IMasterActivity[] = [];
  private masterTranche: IMasterTranche[] = [];
  private masterProjects:IMasterProject[]=[];
  
  

  private spinnerValue=true;

  downloadRequest:DownloadProjectRequestModule;
  downloadResponse:DownloadProjectResponseModule;



  constructor(private databaseService:DatabaseService,
    private formBuilder: FormBuilder,
    public  loader: LoadingController,
    public downloadService:DownloadProjectService,
    private toast:Toast) 
    {
        this.downloadForm=this.formBuilder.group({
        masterState: ['', [Validators.required]],
        masterSubSector: ['', [Validators.required]],
        masterPurpose: ['', [Validators.required]],
        masterImpDept: ['', [Validators.required]],
        masterActivity:['', [Validators.required]],
        masterTranche:['', [Validators.required]],

      });
    
    this.getMasterStateDetails();
  }

  async loadSpinner(){

    const loading = await this.loader.create({
      message: 'loading ,please wait.....',
      spinner: 'circles',
      duration: 100000
    });
      await loading.present();


      await loading.dismiss();


  }


async getMasterStateDetails(){
      this.loadSpinner();
      const loading = await this.loader.create({
        message: 'loading ,please wait.....',
        spinner: 'circles',
        duration: 100000
      });
        await loading.present();

    this.databaseService.getMasterStateDetails().then(response=>{
      this.masterState=response;
      console.log('State List');
      console.log(response);
      
    }).catch((e)=>console.log(e));
    await loading.dismiss();
    
  }

  masterStateSelected(event:any){
    let STATE_ID=event;
    console.log(STATE_ID);
    
    this.getMasterStateImplementingDepartment(STATE_ID);
  }

  getMasterStateImplementingDepartment(STATE_ID){
      this.databaseService.getMasterStateImplementingDepartment(STATE_ID).then(response=>{
        this.masterStateImpldept=response;
      }).catch((e)=>console.log(e));
  }

  masterImpDeptSelected(event:any){
    this.getMasterSubSectorDetails();
  }

  getMasterSubSectorDetails(){
    this.databaseService.getMasterSubSectorDetails().then(response=>{
      this.masterSubSector=response;
    }).catch((e)=>console.log(e));
  }

  masterSubSectorSelected(event:any){
    let SS_ID=event;
    this.getMasterPurposeDetails(SS_ID);
  }

  getMasterPurposeDetails(SS_ID){
    this.databaseService.getMasterPurposeDetails(SS_ID).then(response=>{
      this.masterPurpose=response;
    }).catch((e)=>console.log(e));
  }

  masterPurposeSelected(event:any){
    let PP_PGM_PURP_ID=event;
    this.getMasterActivity(PP_PGM_PURP_ID);
  }

  getMasterActivity(PP_PGM_PURP_ID){
    this.databaseService.getMasterActivity(PP_PGM_PURP_ID).then(response=>{
      this.masterActivity=response;
    }).catch((e)=>console.log(e));
  }

  masterActivitySelected(event:any){
    let PA_PGM_ACT_ID=event;
    this.getMasterTrancheDetails();
  }

  getMasterTrancheDetails(){
    this.databaseService.getMasterTrancheDetails().then(response=>{
    this.masterTranche=response;
    }).catch((e)=>console.log(e));
  }

  get formControl() {
    return this.downloadForm.controls;
  }

  async onDownloadProjectClick(){
    const loading = await this.loader.create({
      message: 'Requesting server,please wait.....',
      spinner: 'crescent',
      duration: 10000
    });
      await loading.present();

      this.databaseService.getMasterProjects().then(response=>{
        this.masterProjects=response;
        console.log('Master Project Record:');
        console.log(response);
        
    }).catch((e)=>console.log(e));
    

    console.log(this.formControl.masterState.value);
    console.log(this.formControl.masterImpDept.value);
    console.log(this.formControl.masterSubSector.value);
    console.log(this.formControl.masterPurpose.value);
    console.log(this.formControl.masterActivity.value);
    console.log(this.formControl.masterTranche.value);
    this.downloadRequest=new DownloadProjectRequestModule(this.downloadForm.value);
    this.downloadRequest.masterStateCode=this.formControl.masterState.value;
    this.downloadRequest.masterImpDeptCode=this.formControl.masterImpDept.value;
    this.downloadRequest.masterSubSectorCode=this.formControl.masterSubSector.value;
    this.downloadRequest.masterPurposeCode=this.formControl.masterPurpose.value;
    this.downloadRequest.masterActivityCode=this.formControl.masterActivity.value;
    this.downloadRequest.masterTrancheCode=this.formControl.masterTranche.value;

    this.downloadService.downLoadProjects(this.downloadRequest).subscribe((response)=>{
      console.log(response);

      


    },error => {
        alert("error Occur while processing");
  });
    //downLoadProjects
    await loading.dismiss();
  }


  getMasterProjects(){
    this.databaseService.getMasterProjects().then(response=>{
    this.masterProjects=response;
    console.log(response);
    }).catch((e)=>console.log(e));
  }




  ngOnInit() {

  }

}

