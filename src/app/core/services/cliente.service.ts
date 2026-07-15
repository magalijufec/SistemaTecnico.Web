import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http = inject(HttpClient);

  private api = 'https://localhost:44306/api/cliente';

  obtenerTodos(): Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.api);
  }

}