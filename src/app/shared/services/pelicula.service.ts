import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculaResponseForm, PeliculaUpdateResponseForm } from 'src/app/core/models/pelicula/pelicula-response-forms.model';
import { CreatePeliculaDto } from 'src/app/core/models/dto/pelicula.dto';
import { environment } from 'src/environments/environment.development';
import { UpdatePeliculaDto } from 'src/app/core/models/dto/update-pelicula.dto';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  apiUrl = environment.apiUrlForms

  constructor(private http: HttpClient) { }

  crear(pelicula: CreatePeliculaDto) {
    return this.http.post<PeliculaResponseForm>(`${this.apiUrl}/products`, pelicula)
  };

  actualizar(pelicula: UpdatePeliculaDto, id: number) {
    return this.http.put<PeliculaUpdateResponseForm>(`${this.apiUrl}/products/${id}`, pelicula)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.apiUrl}/products/${id}`)
  }


}
