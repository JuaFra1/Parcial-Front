import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContratoService } from '../../servicio/contrato.service';
import { Contrato } from '../../modelo/contrato.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-contrato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa CommonModule y ReactiveFormsModule aquí
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css']
})
export class CrearContratoComponent {
  contratoForm: FormGroup;

  constructor(private fb: FormBuilder, private contratoService: ContratoService) {
    this.contratoForm = this.fb.group({
      identificador: ['', Validators.required],
      valor: ['', Validators.required],
      nombre_contratante: ['', Validators.required],
      documento_contratante: ['', Validators.required],
      nombre_contratantista: ['', Validators.required],
      documento_contratantista: ['', Validators.required],
      fecha_inicial: ['', Validators.required],
      fecha_final: ['', Validators.required],
      status: [0]
    });
  }

  insertData() {
    if (this.contratoForm.valid) {
      const contrato: Contrato = this.contratoForm.value;
      this.contratoService.crearEstudiante(contrato).subscribe((response: any) => {
        console.log('Data inserted successfully', response);
      });
    }
  }
}