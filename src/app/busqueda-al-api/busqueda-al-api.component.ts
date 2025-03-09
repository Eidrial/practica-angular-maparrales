import { Component } from '@angular/core';
import { OverwatchService } from '../overwatch.service';
import { IHeroe } from '../i-heroe';

@Component({
  selector: 'app-busqueda-al-api',
  standalone: false,
  templateUrl: './busqueda-al-api.component.html',
  styleUrl: './busqueda-al-api.component.css'
})
export class BusquedaAlApiComponent {
  heroes!: IHeroe[]; //lista de heroes
  heroeNombre!: ''; //para buscar el nombre del heroe
  error: string = ''; //para manejar errores

  constructor(private overwatchservice: OverwatchService) { }

  buscarHeroe(): void {
    if (this.heroeNombre.trim() == '') { //si el campo de busqueda esta vacio
      this.error = 'Por favor introduce un nombre de héroe para buscar.';
    } else { //si no está vacio
      this.overwatchservice.buscarPorNombre(this.heroeNombre).subscribe(
        (data) => {
          this.heroes = [data];  //se almacena el heroe en el array
          this.error = ''; //limpiar el mensaje de error si la búsqueda fue exitosa
        },
        (err) => {
          this.heroes = []; //limpiar el array en el caso de que no se encuentre
          this.error = 'Héroe no encontrado, comprueba que el nombre sea correcto.';
        }
      );
    }
  }
}
