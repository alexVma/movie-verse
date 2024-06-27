import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcarService {
  private apiUrl = 'https://micros.ucuenca.edu.ec/ms/movil-sra/v4/api/marcas';
  private token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3MTk2NzgzNTFhNWZhZWRjMmU3MDI3NGJiZWE2MmRhMmE4YzRhMTIiLCJ0eXAiOiJKV1QifQ';

  constructor(private http: HttpClient) { }

  marcar(codigoUbicacion: number, dispositivo: string, esEntrada: boolean, usuario: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': this.token
    });

    const body = {
      codigoUbicacion: codigoUbicacion,
      dispositivo: dispositivo,
      esEntrada: esEntrada,
      usuario: usuario
    };

    return this.http.put(this.apiUrl, body, { headers });
  }
}
