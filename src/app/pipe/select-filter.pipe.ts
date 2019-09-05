import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(contacts: Array<any>, prefix: string): any {
    // return contacts.filter(contact => contact.name.match('^' + prefix));
  }

}
