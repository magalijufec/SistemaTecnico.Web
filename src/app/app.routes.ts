import { Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard';
import { TrabajosList } from './features/trabajos/trabajos-list/trabajos-list';
import { UsuariosList } from './features/usuarios/usuarios-list/usuarios-list';
import { ClientesList } from './features/clientes/clientes-list/clientes-list';

export const routes: Routes = [

{
path:'',
component:MainLayoutComponent,

children:[

{
path:'',
redirectTo:'dashboard',
pathMatch:'full'
},

{
path:'dashboard',
component:DashboardComponent
},

{
path:'trabajos',
component:TrabajosList
},

{
path:'usuarios',
component:UsuariosList
},

{
path:'clientes',
component:ClientesList
}

]

}

];
