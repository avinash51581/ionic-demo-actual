export class LoginResponseModule { 
    status: string;
    message: string;
    username:string;
    password:string;
    roleId:string;
    userId:string;
    passwordfailureAttempt:number;
    
    public constructor(init?: LoginResponseModule) {
        Object.assign(this, init);
      }

}