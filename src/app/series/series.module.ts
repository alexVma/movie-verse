import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './components/series/series.component';
import { SerieComponent } from './components/serie/serie.component';
import { SharedModule } from '../shared/shared.module';
import { SeriesRoutingModule } from './series-routing.module';


@NgModule({
  declarations: [
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SeriesRoutingModule,
  ]
})
export class SeriesModule { }
