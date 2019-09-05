import { Pipe, PipeTransform } from '@angular/core';

import { isNumber } from 'util';

@Pipe({
  name: 'expandData'
})
export class ExpandDataPipe implements PipeTransform {

  transform(data: Array<any> | any): any {
    if (data && isNumber(data)) {
      return 2 * data;
    } else if (typeof (data) !== 'string' && data.length > 0) {
      data = data.filter(o => o.value > 3);
      data.map(o => 2 * o);
      return data;
    }
  }

}
