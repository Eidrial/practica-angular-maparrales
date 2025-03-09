import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traducirRol',
  standalone: false
})
export class TraducirRolPipe implements PipeTransform {

  //recibe el rol en inglés y devuelve el rol traducido al español
  transform(rol: string): string {

    //traducir el rol a español
    switch (rol.toLowerCase()) {
      case 'damage':
        return 'Daño';
      case 'tank':
        return 'Tanque';
      case 'support':
        return 'Soporte';
      default:
        return rol; //si el valor corresponde a uno no traducido en el switch, lo devuelve sin traducción
    }
  }
}