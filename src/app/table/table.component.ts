import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from "../interfaces/pelicula";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public peliculas: Pelicula[];

  public pelicula: Pelicula = {
    id: '',
    nombre: '',
    director: ' ',
    clasificacion: '',
  };

  public showAdd: boolean = false;//Boolean para ocultar o mostrar el componente hijo add-pelicula
  public showUpdate: boolean = false;//Boolean para ocultar o mostrar el componente hijo update-pelicula

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getAllPeliculas();
  }

  //Mostrar o ocultar componente hijo add-pelicula
  showAddPelicua(){
    this.showUpdate = false;
    this.showAdd = !this.showAdd;
  }

  //Funcion que llama el componente hijo para ocultar el compoente hijo add-pelicula
  hideAdd(hide){
    this.showAdd = hide;
  }

  //Funcion que llama el componente hijo para ocultar el compoente hijo update-pelicula
  hideUpdate(hide){
    this.showUpdate = hide;
  }

  //Pelicula seleccionada para actualizar
  selectPelicula(pelicula: Pelicula){
    this.pelicula = pelicula;
    this.showAdd = false;
    this.showUpdate = !this.showUpdate;
  }

  //Peticion al servicio para mostrar todos los usuarios
  getAllPeliculas(): void {
    this.peliculasService.getAllPelicula$().subscribe(peliculas => {
      this.peliculas = peliculas;
    },
      error => {
        console.log(error);
      }
    );
  }

  //Peticion al servicio para eliminar una pelicula
  deletePelicula(pelicula: Pelicula): void {
    this.peliculasService.deletePelicula$(pelicula.id).subscribe(() => {
      this.getAllPeliculas();
    },
      error => {
        console.log(error);
      }
    );
  }

  //Peticion al servicio para mostrar todos los usuarios
  getPelicula(id: number): void {
    this.peliculasService.getPelicula$(id).subscribe((pelicula) => {
      console.log(pelicula);
    },
      error => {
        console.log(error);
      }
    );
  }

}
