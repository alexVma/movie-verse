import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioBasicoComponent } from './shared/components/formulario-basico/formulario-basico.component';
import { FormularioMedioComponent } from './shared/components/formulario-medio/formulario-medio.component';
import { FormularioServicioComponent } from './shared/components/formulario-servicio/formulario-servicio.component';
import { FormularioADemandaComponent } from './shared/components/formulario-a-demanda/formulario-a-demanda.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'formulario-basico', component: FormularioBasicoComponent },
  { path: 'formulario-medio', component: FormularioMedioComponent },
  { path: 'formulario-servicio', component: FormularioServicioComponent },
  { path: 'formulario-a-demanda', component: FormularioADemandaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
