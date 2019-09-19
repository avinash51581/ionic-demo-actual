export interface IMasterProject{
    count:number,  
    NP_PROJ_ID:number,
    NP_PROJ_CODE:string,
    NP_PROJ_DESCN:string,
    NP_TRANCHE_CODE:string,
    NP_ACNTNG_LOC_CODE:string,   //to show
    NP_ACNTNG_STATE_CODE:string

    NP_ACNTNG_DIST_CODE:string
    NP_ACNTNG_BLOCK_CODE:string
    NP_ACNTNG_VILLAGE_CODE:string
    NRP_PURP_CODE:string
    NRP_PROJ_ACT_CODE:string

    NRP_PROJ_SUB_ACT_CODE:string
    NRP_REMARKS:string
    NRP_PLANNED_START_DATE:string
    NRP_PLANNED_END_DATE:string
    NRP_PROJ_IMPL_STATE_DEPT:string
    NRP_UPDATED_TOTAL_COST:string
    NRP_EXP_INCURRED_CUTOFF_DATE:string

    NRP_EXP_INCURRED_AMT:string
    NRP_INELIGIBLE_COST:string
    NRP_CONT_BY_OTH_AGENCIES:string
    NRP_BAL_ELIGILBE_COST:string
    NRP_ELIG_LOAN_AMT_ASPER_PM:string
    NRP_STATE_GOVT_SHARE_ACTUAL:string
    NRP_ELIG_LOAN_AMT_ACTUAL:string
    
    NRP_COST_OF_DEVLPMNT:string
    NRP_ERR_PER:string
    NRP_BCR:string
    NRP_SANC_LOAN_AMT:string
    NRP_SANC_GRNT_AMT:string
    NRP_PROPOSAL_NUMBER:string
    
}