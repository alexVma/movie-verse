import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MisValidadores } from '../../utils/Validators';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent {

  nombreField: FormControl;
  apellidoField: FormControl;
  edadField: FormControl;

  constructor() {
    this.nombreField = new FormControl('', [Validators.required, MisValidadores.soloLetras()]);
    this.apellidoField = new FormControl('', [Validators.required, MisValidadores.soloLetras()]);
    this.edadField = new FormControl('', [Validators.required, Validators.min(18), MisValidadores.numeroEntero()]);
  }

  get nombre() {
    return this.nombreField.value
  }
  get apellido() {
    return this.apellidoField.value
  }
  get edad() {
    return this.edadField.value
  }

  cargarDatos() {

    if (this.nombreField.invalid || this.apellidoField.invalid || this.edadField.invalid) {
      console.log('Formulario inválido');
      return
    }
    console.log('Nombre: ', this.nombre)
    console.log('Apellido: ', this.apellido)
    console.log('Edad: ', this.edad)
  }

}
