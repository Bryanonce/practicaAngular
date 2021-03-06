import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresCreateComponent } from './components/actores/actores-create/actores-create.component';
import { ActoresEditComponent } from './components/actores/actores-edit/actores-edit.component';
import { ActoresIndexComponent } from './components/actores/actores-index/actores-index.component';
import { CinesCreateComponent } from './components/cines/cines-create/cines-create.component';
import { CinesEditComponent } from './components/cines/cines-edit/cines-edit.component';
import { CinesIndexComponent } from './components/cines/cines-index/cines-index.component';
import { GenerosCreateComponent } from './components/generos/generos-create/generos-create.component';
import { GenerosEditComponent } from './components/generos/generos-edit/generos-edit.component';
import { GenerosIndexComponent } from './components/generos/generos-index/generos-index.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PeliculasCreateComponent } from './components/peliculas/peliculas-create/peliculas-create.component';
import { PeliculasEditComponent } from './components/peliculas/peliculas-edit/peliculas-edit.component';
import { PeliculasFilterComponent } from './components/peliculas/peliculas-filter/peliculas-filter.component';
import { PeliculasIndexComponent } from './components/peliculas/peliculas-index/peliculas-index.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'generos', component: GenerosIndexComponent },
  { path: 'generos/create', component: GenerosCreateComponent },
  { path: 'generos/edit/:id', component: GenerosEditComponent },
  { path: 'actores', component: ActoresIndexComponent },
  { path: 'actores/create', component: ActoresCreateComponent },
  { path: 'actores/edit/:id', component: ActoresEditComponent },
  { path: 'cines', component: CinesIndexComponent },
  { path: 'cines/create', component: CinesCreateComponent },
  { path: 'cines/edit/:id', component: CinesEditComponent },
  { path: 'peliculas', component: PeliculasIndexComponent },
  { path: 'peliculas/create', component: PeliculasCreateComponent },
  { path: 'peliculas/edit/:id', component: PeliculasEditComponent },
  { path: 'peliculas/search', component: PeliculasFilterComponent },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
