import { Component, OnInit, inject } from '@angular/core';
import { TrabajoService } from '../../../core/services/trabajo.service';
import { Trabajo } from '../../../core/models/trabajo';

@Component({
  selector: 'app-trabajos-list',
  standalone: true,
  templateUrl: './trabajos-list.html',
  styleUrl: './trabajos-list.scss'
})
export class TrabajosListComponent implements OnInit {

  private trabajoService = inject(TrabajoService);

  trabajos: Trabajo[] = [];

  ngOnInit(): void {
    this.cargarTrabajos();
  }

  cargarTrabajos() {
    this.trabajoService.obtenerTodos().subscribe({
      next: (data) => {
        console.log(data);
        this.trabajos = data;
      },
      error: (err) => console.error(err)
    });
  }

}