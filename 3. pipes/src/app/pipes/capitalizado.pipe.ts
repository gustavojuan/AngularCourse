import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, all:boolean = true): string {
  /*  console.log(value);
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);*/

    value = value.toLowerCase();
    let nombres = value.split(" ");

    if(all){
      for(let i in nombres){
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(" ");
  }
}
