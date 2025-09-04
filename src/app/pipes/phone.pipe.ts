import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const invalidPhone = !phone || phone.length < 10 || phone.length > 11
    if(invalidPhone){
      return 'Telefone indisponível ou inválido'
    }

    const cellPhone = phone.length === 11;
    if(cellPhone) { //Formatando o numero de telefone
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`
    }
  }
}
