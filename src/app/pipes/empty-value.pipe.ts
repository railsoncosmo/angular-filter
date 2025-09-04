import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValue'
})
export class EmptyValuePipe implements PipeTransform {

  transform(value: any): string | any {
    const isEmpty = value === undefined ||
    value === null || value === '' || typeof(value) !== 'string'

    if(isEmpty){
      return ' Não informado';
    }

    return value;
  }
}
