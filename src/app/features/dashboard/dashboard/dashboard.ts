import { Component } from '@angular/core';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {

  cards = [
    {
      titulo: 'Pendientes',
      cantidad: 12,
      icono: 'schedule',
      color: '#f39c12'
    },
    {
      titulo: 'Terminados',
      cantidad: 8,
      icono: 'check_circle',
      color: '#1976d2'
    },
    {
      titulo: 'Pendiente Pago',
      cantidad: 3,
      icono: 'payments',
      color: '#ef6c00'
    },
    {
      titulo: 'Finalizados',
      cantidad: 80,
      icono: 'task_alt',
      color: '#43a047'
    }
  ];
}