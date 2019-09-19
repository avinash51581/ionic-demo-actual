import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
export class Toast{

    constructor(private toastCltr:ToastController){

    }

    async showToast(msg:any) {
        const toast = await this.toastCltr.create({
          message:msg,
          duration: 2000
        });
        toast.present();
      }

      async showToast1(msg:any) {
        const toast = await this.toastCltr.create({
          header: '',
          message: msg,
          //position: 'top',
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
              handler: () => {
                
              }
            }
          ]
        });
        toast.present();
      }


}