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
      this.heroes = []; //limpiar heroes
    } else { //si no está vacio
      this.overwatchservice.buscarPorNombre(this.heroeNombre.replace(" ", "-")).subscribe( //los pjs que tienen doble nombre tienen - en vez de un espacio (ej: junker-queen y no junker queen)
        //por lo tanto, el replace reemplaza SOLO el primer espacio en el nombre (que introduce el usuario) por un - para que la api pueda hacer la busqueda correctamente porque la api espera
        //ese formato (el usuario introduce junker queen y esto lo convierte a junker-queen para que la api lo detecte)
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
