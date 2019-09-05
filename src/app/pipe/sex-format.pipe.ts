import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sexFormat'
})
export class SexFormatPipe implements PipeTransform {

    transform(sex: string, ...args: any[]): any {
        switch (sex) {
            case 'male':
                return '男';
            case 'female':
                return '女';
            default:
                return '人妖';
        }
    }

}
