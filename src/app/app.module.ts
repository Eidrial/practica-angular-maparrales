import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNoEncontrada404Component } from './pagina-no-encontrada404/pagina-no-encontrada404.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedaAlApiComponent } from './busqueda-al-api/busqueda-al-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontrada404Component,
    AcercaDeComponent,
    BienvenidaComponent,
    BusquedaAlApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
