import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNoEncontrada404Component } from './pagina-no-encontrada404/pagina-no-encontrada404.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedaAlApiComponent } from './busqueda-al-api/busqueda-al-api.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TraducirRolPipe } from './traducir-rol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontrada404Component,
    AcercaDeComponent,
    BienvenidaComponent,
    BusquedaAlApiComponent,
    TraducirRolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
