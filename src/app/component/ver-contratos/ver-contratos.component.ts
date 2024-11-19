import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoService } from '../../servicio/contrato.service';
import { Contrato } from '../../modelo/contrato.model';

@Component({
  selector: 'app-ver-contratos',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './ver-contratos.component.html',
  styleUrls: ['./ver-contratos.component.css']
})
export class VerContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
    this.contratoService.obtenerContartos().subscribe((data: Contrato[]) => {
      this.contratos = data;
    });
  }
}