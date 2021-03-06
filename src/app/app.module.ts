import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { ListadoPeliculasComponent } from './components/peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './components/utilities/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RatingComponent } from './components/utilities/rating/rating.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GenerosCreateComponent } from './components/generos/generos-create/generos-create.component';
import { ActoresIndexComponent } from './components/actores/actores-index/actores-index.component';
import { ActoresCreateComponent } from './components/actores/actores-create/actores-create.component';
import { CinesCreateComponent } from './components/cines/cines-create/cines-create.component';
import { CinesIndexComponent } from './components/cines/cines-index/cines-index.component';
import { PeliculasIndexComponent } from './components/peliculas/peliculas-index/peliculas-index.component';
import { PeliculasCreateComponent } from './components/peliculas/peliculas-create/peliculas-create.component';
import { ActoresEditComponent } from './components/actores/actores-edit/actores-edit.component';
import { GenerosEditComponent } from './components/generos/generos-edit/generos-edit.component';
import { CinesEditComponent } from './components/cines/cines-edit/cines-edit.component';
import { PeliculasEditComponent } from './components/peliculas/peliculas-edit/peliculas-edit.component';
import { GenerosFormComponent } from './components/generos/generos-form/generos-form.component';
import { GenerosIndexComponent } from './components/generos/generos-index/generos-index.component';
import { PeliculasFilterComponent } from './components/peliculas/peliculas-filter/peliculas-filter.component';
import { ActoresFormComponent } from './components/actores/actores-form/actores-form.component';
import { InputImgComponent } from './components/utilities/input-img/input-img.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    GenerosCreateComponent,
    ActoresIndexComponent,
    ActoresCreateComponent,
    CinesCreateComponent,
    CinesIndexComponent,
    PeliculasIndexComponent,
    PeliculasCreateComponent,
    ActoresEditComponent,
    GenerosEditComponent,
    CinesEditComponent,
    PeliculasEditComponent,
    GenerosFormComponent,
    GenerosIndexComponent,
    PeliculasFilterComponent,
    ActoresFormComponent,
    InputImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
