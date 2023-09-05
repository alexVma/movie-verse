import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { SerieResponse } from 'src/app/core/models/serie/serie-response.model';
import { Serie } from 'src/app/core/models/serie/serie.model';
import { ImagenPeliculaResponse } from 'src/app/core/models/img/imagenes-pelicula.model';



@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  apiUrl = environment.apiUrl;  

  constructor(private http: HttpClient) { }

  obtenerSeries(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    }
    return this.http.get<SerieResponse>(`${this.apiUrl}/tv/popular?language=en-US`, httpOptions);
  }

 obtenerDetalle(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };
    return this.http.get<Serie>(`${this.apiUrl}/tv/${id}?language=en-US`, httpOptions);

  }

  obtenerImagenes(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };
    return this.http.get<ImagenPeliculaResponse>(`${this.apiUrl}/tv/${id}/images`, httpOptions);
  }
  /*obtenerSimilares(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };
    return this.http.get<PeliculaResponse>(`${this.apiUrl}/movie/${id}/similar?language=en-US&page=1`, httpOptions);
  }*/
}
