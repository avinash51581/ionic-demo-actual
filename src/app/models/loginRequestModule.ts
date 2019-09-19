export class LoginRequestModule { 

    username:string;   
    password:string;
    requestmode:string;
    
         
 public constructor(init?: LoginRequestModule) {
   Object.assign(this, init);
 }


 }
 