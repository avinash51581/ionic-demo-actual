import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { IMasterProject } from 'src/app/utilityInterfaces/IMasterProject';
@Component({
  selector: 'app-viewproject-details',
  templateUrl: './viewproject-details.page.html',
  styleUrls: ['./viewproject-details.page.scss'],
})
export class ViewprojectDetailsPage implements OnInit {

  private NP_PROJ_CODE=''; //"P1999900000000004573"
  private NP_PROJ_DESCN1='';  //KUDAKULETHUR"
  private NP_ACNTNG_STATE_CODE=''; //"90"
  private NP_TRANCHE_CODE='';  //"5"
  private NRP_PROJ_IMPL_STATE_DEPT=''; //"900001"
  private NRP_PROPOSAL_NUMBER='';//"MP1999900000000004558"
  private NRP_PURP_CODE='';//"451016"


  private masterProjects:IMasterProject[]=[];
  constructor(public activatedRoute : ActivatedRoute,
    private databaseService:DatabaseService) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.getProjectDetails(res.ProjectCode);
  });

   }

   getProjectDetails(ProjectCode:any){
      this.databaseService.getProjectDetailsByProjectCode(ProjectCode).then(response=>{
        this.masterProjects=response;
        console.log(response);
        this.NP_PROJ_CODE=response[0].NP_PROJ_CODE;
        this.NP_PROJ_DESCN1=response[0].NP_PROJ_DESCN;
        this.NP_ACNTNG_STATE_CODE=response[0].NP_ACNTNG_STATE_CODE;
        this.NP_TRANCHE_CODE=response[0].NP_TRANCHE_CODE;
        this.NRP_PROJ_IMPL_STATE_DEPT=response[0].NRP_PROJ_IMPL_STATE_DEPT;
        this.NRP_PROPOSAL_NUMBER=response[0].NRP_PROPOSAL_NUMBER;
        this.NRP_PURP_CODE=response[0].NRP_PURP_CODE;
        
      
      }).catch((e)=>console.log(e));
    }
  ngOnInit() {
  }

}
