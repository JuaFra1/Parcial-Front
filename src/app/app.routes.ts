import { Routes } from '@angular/router';
import { CrearContratoComponent } from './component/crear-contrato/crear-contrato.component';
import { VerContratosComponent } from './component/ver-contratos/ver-contratos.component';

export const routes: Routes = [
    { path: 'crear-contrato', component: CrearContratoComponent },
    { path: 'ver-contratos', component: VerContratosComponent },
    { path: '', redirectTo: 'crear-contrato', pathMatch: 'full' }
  ];
  