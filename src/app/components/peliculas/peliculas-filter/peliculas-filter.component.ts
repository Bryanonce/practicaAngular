import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas-filter',
  templateUrl: './peliculas-filter.component.html',
  styleUrls: ['./peliculas-filter.component.scss']
})
export class PeliculasFilterComponent implements OnInit {

  form!: FormGroup;

  private escribirParametrosBusquedaEnURL(){
    let queryString = []
    let valoresFormulario = this.form.value;
    if(valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }
    if(valoresFormulario.generoId !== 0){
      queryString.push(`genero=${valoresFormulario.generoId}`);
    }
    this.location.replaceState('/peliculas/search/',queryString.join('&'));
  }

  private readQueryParams(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      console.log(params);
      let objeto: any = {};
      if(params.titulo){
        objeto.titulo = params.titulo
      }
      if(params.genero){
        objeto.generoId = Number(params.genero)
      }
      this.form.patchValue(objeto);
    })
    
  }

  private initialForm = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  public peliculas = [
    {
      titulo: 'Spiderman',
      fecha: new Date(),
      precio: 5,
      enCines: false,
      proximosEstrenos: true,
      generos: [1, 2],
      poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      titulo: 'Moana',
      fecha: new Date(),
      precio: 5,
      enCines: false,
      proximosEstrenos: false,
      generos: [3],
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },

  ]

  public peliculasOriginal = this.peliculas;

  public generos: { id: number, nombre: string }[] = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Suspenso' }
  ]

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    this.readQueryParams();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges.subscribe((values: any) => {
      this.buscarPeliculas(values);
      this.escribirParametrosBusquedaEnURL();
    })
  }

  private buscarPeliculas(values: any) {
    this.peliculas = this.peliculasOriginal;
    if (values.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(values.titulo) !== -1);
    }
    if (values.generoId) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(values.generoId) !== -1);
    }
    if (values.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos === values.proximosEstrenos);
    }    
  }

  clear() {
    this.form = this.formBuilder.group(this.initialForm);
    this.peliculas = this.peliculasOriginal;
    this.escribirParametrosBusquedaEnURL();
  }

}
