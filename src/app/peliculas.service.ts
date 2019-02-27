import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
//Importacion de la interfaz
import { Pelicula } from "./interfaces/pelicula";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/peliculas/"; //Ruta de nuestra api

  //Metodo get para obtener todos las peliculas
  public getAllPelicula$(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.url);
  }

  //Metodo delete para borrar una pelicula
  public deletePelicula$(id: string): Observable<Pelicula> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Pelicula>(url, httpOptions);
  }

  //Metodo put para actualizar una pelicula
  public updatePelicula$(pelicula: Pelicula): Observable<any>{
    //const url = `${this.url}/${pelicula.id}`;
    return this.http.put<Pelicula>(this.url + pelicula.id, pelicula, httpOptions);
  }

  //Metodo post para insertar una pelicula
  public addPelicula$(pelicula: Pelicula): Observable<Pelicula>{
    return this.http.post<Pelicula>(this.url, pelicula, httpOptions);
  }

  //Metodo get para obtener una pelicula
  public getPelicula$(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get<Pelicula>(url);
  }
}
