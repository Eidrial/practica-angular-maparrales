import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontrada404Component } from './pagina-no-encontrada404/pagina-no-encontrada404.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { BusquedaAlApiComponent } from './busqueda-al-api/busqueda-al-api.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'acercade', component: AcercaDeComponent },
  { path: 'busqueda', component: BusquedaAlApiComponent },
  { path: '**', component: PaginaNoEncontrada404Component }
];

const routerOptions: ExtraOptions = {
  useHash: true, //utiliza el hash en la URL para las rutas
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  //para que se vea la pagina 404
  ]
})
export class AppRoutingModule { }
