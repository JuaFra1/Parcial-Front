import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../modelo/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private apiUrl = 'http://localhost:8080/contrato';

  constructor(private http: HttpClient) {}
  
  obtenerContartos(): Observable<any> {
    return this.http.get<Contrato[]>(`${this.apiUrl}/get`);
  }
  
  crearEstudiante(Contrato: Contrato): Observable<any> {
    return this.http.post<Contrato>(`${this.apiUrl}/post`, Contrato);
  }

}
