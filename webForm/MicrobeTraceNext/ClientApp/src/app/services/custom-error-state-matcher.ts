import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

/** Error when invalid control is dirty or touched*/
export class CustomStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //return !!(control && control.invalid);// && control.value != undefined && control.value != '' && !(control.dirty || control.touched)) );//&& (control.dirty || control.touched));

    if(control && control.invalid){

      if(control.dirty || control.touched){
        return true;
      }
      else{
        //Pre-populated data validation on only when it has value

        if (control.value != undefined && control.value != '')
          return true;
        //else if (control.errors.required)
        //  return true;
        else
          return false;
      }
    }else{
      return false;
    }



  }
}
