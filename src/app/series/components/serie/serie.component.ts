import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/core/models/serie/serie.model';
import { SeriesService } from '../../services/series.service';
import { catchError, of, tap } from 'rxjs';
import { Backdrop } from 'src/app/core/models/img/imagenes-pelicula.model';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})


export class SerieComponent implements OnInit{
  serie: Serie | null;
  backdrops: Backdrop[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serieService: SeriesService
    ) {
    this.serie = null;
    this.backdrops = [];
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next: params => {
          const id = params['id']

          if(!id || isNaN(id)){
            this.router.navigate(['/series']);
            return;
          }

        this.obtenerDetalle(id);
        this.obtenerImagenes(id);
      //  this.obtenerPeliculasSimilares(id);
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }

  private obtenerDetalle(id: number) {
    this.serieService.obtenerDetalle(id).pipe(
      tap(serie => this.serie = serie),
      catchError(error => {
        console.error('Error al obtener detalle de la película:', error);
        return of(null);
      })
    ).subscribe();
  }

  private obtenerImagenes(id: number) {
    this.serieService.obtenerImagenes(id).pipe(
      tap(res => this.backdrops = res.backdrops),
      catchError(error => {
        console.error('Error al obtener imágenes de la película:', error);
        return of({ posters: [] });
      })
    ).subscribe();
  }

}
