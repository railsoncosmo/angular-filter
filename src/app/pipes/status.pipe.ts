import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const invalidStatus = status === null || status === undefined
    if(invalidStatus){
      return 'Status indisponível'
    }
    return status ? 'Ativo' : 'Inativo'
  }
}
