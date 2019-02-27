import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from "../interfaces/pelicula";
import { PeliculasService } from "../peliculas.service";

@Component({
  selector: 'app-update-pelicula',
  templateUrl: './update-pelicula.component.html',
  styleUrls: ['./update-pelicula.component.css']
})
export class UpdatePeliculaComponent implements OnInit {

  @Input() public pelicula: Pelicula;//Pelicula seleccionada de la tabla para actualizar
  @Output() public hideUpdate = new EventEmitter<boolean>();

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  update(){
    this.hideUpdate.emit(false);
    this.updatePeliculas();
  }

  //Peticion al servicio para actualizar una pelicula
  updatePeliculas(): void {
    this.peliculasService.updatePelicula$(this.pelicula).subscribe((pelicula) => {
      console.log(pelicula);
    },
      error => {
        console.log(error);
      }
    )
  }

}
