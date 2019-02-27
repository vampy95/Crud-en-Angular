import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from "../interfaces/pelicula";
import { PeliculasService } from "../peliculas.service";

@Component({
  selector: 'app-add-pelicula',
  templateUrl: './add-pelicula.component.html',
  styleUrls: ['./add-pelicula.component.css']
})
export class AddPeliculaComponent implements OnInit {

  @Input() public peliculas: Pelicula[]; //El componente table le pasa los datos del array peliculas
  @Output() public hideAdd = new EventEmitter<boolean>();

  public pelicula: Pelicula = {
    id: '',
    nombre: '',
    director: ' ',
    clasificacion: '',
  };

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  add(){
    this.addPeliculas();
    this.hideAdd.emit(false);
  }

  //Peticion al servicio para añadir una pelicula
  addPeliculas(): void {
    this.peliculasService.addPelicula$(this.pelicula).subscribe((pelicula) => {
      this.peliculas.push(pelicula);
    },
      error => {
        console.log(error);
      }
    )
  }

}
