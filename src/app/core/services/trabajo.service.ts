import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajo } from '../models/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private http = inject(HttpClient);

  private api = 'https://localhost:44306/api/trabajo'; 

  obtenerTodos(): Observable<Trabajo[]> {
    return this.http.get<Trabajo[]>(this.api);
  }

}