import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncateText'})
export class TruncateText  implements PipeTransform {
  transform(value: string, args1: string ){
    let limit = parseInt(args1, 10);
    if (value.length > limit) {
      return value.substring(0, limit)+"..."
    } 
    else {
      // let dif = limit - value.length;
      // let n;
      // for ( n = 0 ; n <= dif ; n++ ) {
      //   value = value + " ";
      // }
      return value;
    
    }
  }
}
