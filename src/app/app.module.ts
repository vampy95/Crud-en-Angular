import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importacion para API REST
import { HttpClientModule } from '@angular/common/http';
//Importar Animations de Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";
//Servicios
import { PeliculasService } from "./peliculas.service";
//Componentes
import { TableComponent } from './table/table.component';
import { AddPeliculaComponent } from './add-pelicula/add-pelicula.component';
import { UpdatePeliculaComponent } from './update-pelicula/update-pelicula.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddPeliculaComponent,
    UpdatePeliculaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
