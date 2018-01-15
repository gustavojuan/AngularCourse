import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active:boolean = true): string {

    console.log(value);
    console.log(active);

    let pass:string='';
    if(active){
      for(let i in value){
        pass+='*'
      }
    }else{
      pass = value;
    }
    return pass;
  }

}
