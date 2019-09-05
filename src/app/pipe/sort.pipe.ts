import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, type: string): any {
    const sortClosure = function( name ){
      return function(a, b) {
        if( a[name] < b[name] ){
          return -1;
        }else{
          return 1;
        }
      }
    };
    return function(value, type) {
      let sortFn = sortClosure(type);
      return value.sort(sortFn);
    };
  }

}
