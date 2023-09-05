import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from '../../../core/models/serie/serie.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  seriesList: Serie[];
  constructor(
    private seriesService: SeriesService,
    private router: Router
    ) {
    this.seriesList = [];
   }
   ngOnInit(): void {

    this.seriesService.obtenerSeries().subscribe(
      {
        next: (value) => {
          this.seriesList = value.results;
        }
      }
    );

  }
  verDetalle(id: number){
    this.router.navigate([`/serie/${id}`]).then()
  }
}
