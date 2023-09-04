import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './components/series/series.component';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesRoutingModule } from './series-routing.module';


@NgModule({
  declarations: [
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
  ]
})
export class SeriesModule { }
