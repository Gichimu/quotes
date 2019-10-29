import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {

    let today:Date = new Date();
    let todayWithouttime:any = new Date(today.getFullYear(), today.getMonth(), today.getUTCDate());
    let mydatevar = Math.abs(value - todayWithouttime);
    let mytime = mydatevar*0.001;
    let abstime = mytime/86400;
    
    if(abstime < 1){
      return 0
    }else{
      return abstime;
    }
  }

}
