import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioBasicoComponent } from './shared/components/formulario-basico/formulario-basico.component';
import { FormularioMedioComponent } from './shared/components/formulario-medio/formulario-medio.component';
import { FormularioServicioComponent } from './shared/components/formulario-servicio/formulario-servicio.component';
import { FormularioADemandaComponent } from './shared/components/formulario-a-demanda/formulario-a-demanda.component';
import { PeliculasComponent  } from './movies/components/peliculas/peliculas.component';
import { PeliculaComponent  } from './movies/components/pelicula/pelicula.component';
import { SeriesComponent  } from './series/components/series/series.component';
import { SerieComponent  } from './series/components/serie/serie.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MarcarComponent } from './marcar/marcar/marcar.component';

const routes: Routes = [
 /* { path: 'peliculas', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },*/
  {path: '', component: HomeComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'serie/:id', component: SerieComponent},
  { path: 'formulario-basico', component: FormularioBasicoComponent },
  { path: 'formulario-medio', component: FormularioMedioComponent },
  { path: 'formulario-servicio', component: FormularioServicioComponent },
  { path: 'formulario-a-demanda', component: FormularioADemandaComponent },
  { path: 'marcar', component: MarcarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
