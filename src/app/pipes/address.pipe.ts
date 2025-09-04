import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const invalidAddress = !address || !address.rua 
    || !address.cidade || !address.estado || !address.pais
    || address.numero === null || address.numero === undefined || address.numero === ''

    if(invalidAddress){
    return 'Telefone não disponível ou inválido'
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`
  }
}
