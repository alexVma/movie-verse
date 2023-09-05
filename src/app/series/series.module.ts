import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './components/series/series.component';
import { SerieComponent } from './components/serie/serie.component';
import { SharedModule } from '../shared/shared.module';
import { SeriesRoutingModule } from './series-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SeriesRoutingModule,
    NgbCarouselModule
  ]
})
export class SeriesModule { }
