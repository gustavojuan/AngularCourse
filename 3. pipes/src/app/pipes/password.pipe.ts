import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active:boolean = true): string {

    let pass:string='';

    if(active){
      for(let i=0; i< value.length;i++){
        pass+='*'
      }
    }else{
      pass = value;
    }
    return pass;
  }

}
