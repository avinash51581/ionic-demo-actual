import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

//https://stackblitz.com/angular/brleoyyorkap?file=app%2Finput-error-state-matcher-example.html
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      const flag = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
      return flag;
    }
  }