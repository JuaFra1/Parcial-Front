import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearContratoComponent } from './component/crear-contrato/crear-contrato.component';
import { VerContratosComponent } from './component/ver-contratos/ver-contratos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearContratoComponent, VerContratosComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcialfrancofront';
}
