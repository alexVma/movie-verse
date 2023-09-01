import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CardPeliculaComponent } from './components/card-pelicula/card-pelicula.component';
import { PeliculasSimilaresComponent } from './components/peliculas-similares/peliculas-similares.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioBasicoComponent } from './components/formulario-basico/formulario-basico.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { FormularioMedioComponent } from './components/formulario-medio/formulario-medio.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { FormularioADemandaComponent } from './components/formulario-a-demanda/formulario-a-demanda.component';


@NgModule({
  declarations: [
    NavComponent,
    CardPeliculaComponent,
    PeliculasSimilaresComponent,
    FormularioBasicoComponent,
    FormularioMedioComponent,
    FormularioServicioComponent,
    FormularioADemandaComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MdbFormsModule,
    ReactiveFormsModule,
    MdbValidationModule
  ],
  exports: [
    NavComponent,
    PeliculasSimilaresComponent,
    FormularioBasicoComponent
  ]
})
export class SharedModule { }
