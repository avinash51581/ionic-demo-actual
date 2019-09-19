import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, LoadingController,Platform} from '@ionic/angular';
import { TabsPage } from 'src/app/pages/tabs/tabs.page';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/utilityClasses/customErrorMatcher';
import { LoginService } from '../services/login.service';
import * as CryptoJS from 'crypto-js';
import { Toast } from 'src/app/utilityClasses/toastController';
import { Network } from '@ionic-native/network/ngx';
import { LoginRequestModule } from '../models/loginRequestModule';
import { LoginResponseModule } from '../models/LoginResponseModule';
import { RequestStatus } from 'src/app/models/RequestStatus';
import { HttpErrorResponse } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DatabaseService } from 'src/app/services/database.service';
import { DESService } from 'src/app/services/des.service';



// import { Storage } from '@ionic/storage';

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message:string = "Hello";
  @Output() messageEvent = new EventEmitter<string>();
  matcher = new MyErrorStateMatcher();
  loginForm: FormGroup;
  salt = '';
  loading = false;
  loginModeOnline='Online';
  username='';
  password='';
  error = '';
  salttoken='';
  private STORAGE_KEY = 'salt';
  //requestStatus: RequestStatus;
  loginResponse: LoginResponseModule;
  loginRequest:LoginRequestModule;
  isNetworkStatusAvailable:any
  private networkState:string;

  constructor(private navCltr:NavController,
              private formBuilder: FormBuilder,
              private router:Router,
              private loginService:LoginService,
              public  loader: LoadingController,
              private toast:Toast,
              private platform:Platform,
              // private storage:Storage,
              private nativeStorage: NativeStorage,
              private databaseService:DatabaseService,
              private des:DESService,
              private network:Network) {
                
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.minLength(8)]],
      //password: ['', [Validators.required,Validators.minLength(8),Validators.pattern('^[A-Z][a-zA-Z]+( [A-Z][a-zA-Z]+)*$')]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      radiovalue:['',Validators.required]
    });
    console.log("In Home.page.ts");
  }

  onSubmit(){
    //this.navCltr.navigateForward('/tabs/tabs');

  if(this.formControl.radiovalue.value==this.loginModeOnline){

    
    this.isNetworkStatusAvailable= this.checkNetworkConnectivity();
    if(this.isNetworkStatusAvailable){
      this.loginService.getSalt().subscribe((response) => {
        this.salt = response;
        console.log("Salt:" + this.salt);
        this.login();
        },error => {
          this.toast.showToast("Internal server error,please try again");
      },
     );
    }else{
        this.toast.showToast("User is offline,please check network connectivity");
        return;
    }
      
  }else{
    this.login();
  }}

  async login(){
    this.username=this.formControl.username.value.toLowerCase();  
    this.password=this.formControl.password.value;
  if(this.formControl.radiovalue.value==this.loginModeOnline){   //Online
      if (this.platform.is('android')) {
        this.isNetworkStatusAvailable= this.checkNetworkConnectivity();
      } else if (this.platform.is('ios')) {
          alert('ios');
      } 

    if(!this.isNetworkStatusAvailable){
      this.toast.showToast("User is offline,please check network connectivity");
      return;
    }
    const loading = await this.loader.create({
      message: 'Requesting server,please wait.....',
      spinner: 'crescent',
      duration: 10000
    });
      await loading.present();
      const singleHashPwd = CryptoJS.SHA256(this.formControl.password.value);
      const singleHashBinary = this.binaryConversion(singleHashPwd.toString());
      const saltPlusSingleHash = this.salt + singleHashBinary.toString();
      const doubleHashPwdBinary = CryptoJS.SHA256(saltPlusSingleHash);
      const doubleHashB2c = this.binaryConversion(doubleHashPwdBinary.toString());
      let requestMode="M";
      this.loginRequest=new LoginRequestModule(this.loginForm.value);
      this.loginRequest.username=this.username;
      this.loginRequest.password=doubleHashB2c;
      this.loginRequest.requestmode=requestMode;
      this.loginService.login(this.loginRequest).subscribe((response)=>{
        this.loginResponse = response;
        if (this.loginResponse.status === 'Unsuccessful'){
          this.error = 'Invalid Username Or Password';
          let OnlinePasswordfailureAttempt=this.loginResponse.passwordfailureAttempt;

          let userRecordCount=0;
          this.databaseService.getMasterUserCount().then(data=>{
            userRecordCount=data;
            if(userRecordCount>0){
              console.log("userRecordCount:"+userRecordCount);
              this.databaseService.updateOnlinePasswordFailureAttemptCount(this.des.encrypt(OnlinePasswordfailureAttempt.toString())).then(res=>{
                console.log(res);
              });
            }
          }).catch(e =>console.log(e) //this.toast.showToast("Server Error, Please contact system administrator")
          );
          return;
        }
        else if (this.loginResponse.status === 'Locked'){
            this.error = this.loginResponse.message;
            return;
        }else if (this.loginResponse.status === 'Inactive') {
          this.error = this.loginResponse.message;
          return;
        }else if (this.loginResponse.status === 'Exceeds_Login_attempts'){
          this.error = this.loginResponse.message;
          return;
        }else{
                  this.databaseService.deleteMasterUser();
                   let roleId=this.loginResponse.roleId;
                   let userid=this.loginResponse.userId;
                   let username=this.loginResponse.username;
                   let password=this.loginResponse.password;
                   let status=this.loginResponse.status;
                   let StrOnlinePasswordfailureAttempt=this.loginResponse.passwordfailureAttempt.toString();
                   let OfflinePasswordfailureAttempt:number=0;
                   let StrOfflinePasswordfailureAttempt=OfflinePasswordfailureAttempt.toString();
                   
                   this.messageEvent.emit(this.message);
                   //let OfflinePasswordfailureAttempt=parseInt('0');
                   console.log("Response Salt:" + this.salt);
                   console.log("Response Role ID:" + roleId);
                   console.log("Response UserID:" + userid);
                   console.log("Response UserName:" + username);
                   console.log("Response Password:" + password);
                   console.log("Response Status:" + status);
                   console.log("Response Online Password Failure Attempt:" + StrOnlinePasswordfailureAttempt);
                   console.log("Response Offline Password Failure Attempt:" + StrOfflinePasswordfailureAttempt);
                   //this.databaseService.addMasterUser(this.des.encrypt(userid),this.des.encrypt(username),this.des.encrypt(password),this.des.encrypt(roleId),this.des.encrypt(StrOnlinePasswordfailureAttempt),this.des.encrypt(StrOfflinePasswordfailureAttempt),this.des.encrypt(this.salt));
                   this.databaseService.addMasterUser(userid,username,password,roleId,StrOnlinePasswordfailureAttempt,StrOfflinePasswordfailureAttempt,this.salt);
                   this.loginForm.reset();
                   this.navCltr.navigateForward('/tabs/tabs');
          //Successfully Login
        }

      },error => {
        this.error=error;
        //console.log(this.error);
        //this.toast.showToast(this.error);
        
    });
  await loading.dismiss();

    }else{   //Offline

   
      
    const loading = await this.loader.create({
      message: 'Requesting server,please wait.....',
      spinner: 'crescent',
      duration: 6000
    });
    await loading.present();

    this.username=this.formControl.username.value.toLowerCase();  
    this.password=this.formControl.password.value;
    this.databaseService.getUserDetails().then(response=>{
      console.log(response.length);
      if(response==='' || response === null || response.length===0){
        this.error='User should always login in Online mode for first attempt';
        return;
      }
      // let decryptedUserID=this.des.decrypt(response[0].UserId);
      // let decryptedUserName=this.des.decrypt(response[0].UserName);
      // let decryptedPassword=this.des.decrypt(response[0].Password);
      // let decryptedOnlinePasswordFailureAttempt=this.des.decrypt(response[0].OnlinePasswordFailureAttempt);
      // let decryptedOfflinePasswordFailureAttempt=this.des.decrypt(response[0].OfflinePasswordFailureAttempt);
      // let decryptedSalt=this.des.decrypt(response[0].Salt);
      // const singleHashPwd = CryptoJS.SHA256(this.formControl.password.value);
      // const singleHashBinary = this.binaryConversion(singleHashPwd.toString());
      // const saltPlusSingleHash = decryptedSalt + singleHashBinary.toString();
      // const doubleHashPwdBinary = CryptoJS.SHA256(saltPlusSingleHash);
      // const doubleHashB2c = this.binaryConversion(doubleHashPwdBinary.toString());
      let decryptedUserID=response[0].UserId;
      let decryptedUserName=response[0].UserName;
      let decryptedPassword=response[0].Password;
      let decryptedOnlinePasswordFailureAttempt=response[0].OnlinePasswordFailureAttempt;
      let decryptedOfflinePasswordFailureAttempt=response[0].OfflinePasswordFailureAttempt;
      let decryptedSalt=response[0].Salt;

      const singleHashPwd = CryptoJS.SHA256(this.formControl.password.value);
      const singleHashBinary = this.binaryConversion(singleHashPwd.toString());
      const saltPlusSingleHash = decryptedSalt + singleHashBinary.toString();
      const doubleHashPwdBinary = CryptoJS.SHA256(saltPlusSingleHash);
      const doubleHashB2c = this.binaryConversion(doubleHashPwdBinary.toString());

      // console.log("singleHashPwd:"+ singleHashPwd);
      // console.log("singleHashBinary:"+ singleHashBinary);
      // console.log("saltPlusSingleHash:"+ saltPlusSingleHash);
      // console.log("doubleHashPwdBinary:"+ doubleHashPwdBinary);
      // console.log("doubleHashB2c:"+ doubleHashB2c);
      // console.log("decryptedUserID:"+ decryptedUserID);
      // console.log("decryptedUserName:"+ decryptedUserName);
      // console.log("decryptedPassword:"+ decryptedPassword );
      // console.log("decryptedOnlinePasswordFailureAttempt:"+ decryptedOnlinePasswordFailureAttempt);
      // console.log("decryptedOfflinePasswordFailureAttempt:"+ decryptedOfflinePasswordFailureAttempt);
      // console.log("decryptedSalt:"+decryptedSalt);
      // console.log("this.UserName:"+this.username);
      // console.log("this.Password:"+this.password);
      
      // if(decryptedUserName!=this.des.encrypt(this.username)){

      //   this.error = 'Invalid Username Or Password';
      //   return;
      // }else if(decryptedUserName===this.des.encrypt(this.username)){

        console.log("decryptedPassword");
        console.log(decryptedPassword);

        console.log("doubleHashB2c");
        console.log(doubleHashB2c);

      if(doubleHashB2c===decryptedPassword){
        console.log("decryptedPassword");
        console.log(decryptedPassword);


               
        //Login
      }
      if(true){
      
        let OfflinePasswdfailureCount=parseInt(decryptedOfflinePasswordFailureAttempt);
        console.log("INT OfflinePasswdfailureCount:" + OfflinePasswdfailureCount);
        let IncOfflinePasswdfailureCount=OfflinePasswdfailureCount+1;
        console.log("IncOfflinePasswdfailureCount:" + IncOfflinePasswdfailureCount);
        let EncryptedIncOfflinePasswdfailureCount=this.des.encrypt(IncOfflinePasswdfailureCount.toString());
        console.log("EncryptedIncOfflinePasswdfailureCount:" + EncryptedIncOfflinePasswdfailureCount);
        this.databaseService.updateOfflinePasswordFailureAttemptCount(EncryptedIncOfflinePasswdfailureCount).then(res=>{
          console.log("Res"+res);
          if(res>0){
            if(IncOfflinePasswdfailureCount==4){
              this.error='You have exceeded login attempts,Your account is locked.Please contact administrator';
              return;
            }else if(IncOfflinePasswdfailureCount>4){
              this.error='Your account is locked.Please contact administrator';
              return;
            }else{
              this.error = 'Invalid Username Or Password';
              return;
            }
          }else{
                  this.error='Error occur while processing, Please contact system administrator';
                  return;
          }
        });
    }
     // }
    }).catch(this.error='Error occur while processing, Please contact system administrator');
    await loading.dismiss();
  }
}

radioClick(){
  this.error='';
}

  binaryConversion(text: string) {
    let output = '';
    for (let i = 0; i < text.length; i++) {
      output += text[i].charCodeAt(0).toString(2);
    }
    return output;
  }

 

  

  checkNetworkConnectivity(){
    this.networkState = navigator.connection.type;
    let status;
    if(this.networkState === 'none' || this.networkState === 'NONE'){
      status = false;
    }else {
      status = true;
    }
    return status;

}



  ngOnInit() {
  }

  clearErrorDiv(){
    this.error='';
  }

  get formControl() {
    return this.loginForm.controls;
  }

  getUserNameErrorMessage(){
    return this.formControl.username.hasError('required') ? 'User name is required':
        this.formControl.username.errors ? 'Minimum length should 8 character' : '';
  }

  getPasswordErrorMessage(){
    return this.formControl.password.hasError('required') ? 'Password is required' :
    this.formControl.password.hasError('pattern') ? 'Should not contain numbers/special characters,first letter of each word should be capital' :
      this.formControl.password.errors ? 'Minimum length should 8 character' : '';

  }

}

