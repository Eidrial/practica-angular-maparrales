import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE = "https://overfast-api.tekrop.fr/";

@Injectable({
  providedIn: 'root'
})
export class OverwatchService {

  constructor(private httpclient: HttpClient) { }

  buscarPorNombre(nombre: string) {
    return this.httpclient.get<any>(`${URL_BASE}/heroes/${nombre.toLowerCase()}`);
  }
}
