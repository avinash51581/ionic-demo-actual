import { Injectable } from '@angular/core';
import { Constant } from 'src/app/models/constant';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DESService {

  constructor(private constant:Constant) { }

  encrypt(message) {
    let key=this.constant.KEY;
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
    //return Observable.of(encrypted.toString());
    //return encrypted.toString().asObservable();
    
}

decrypt(ciphertext) {
    let key=this.constant.KEY;
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


}
