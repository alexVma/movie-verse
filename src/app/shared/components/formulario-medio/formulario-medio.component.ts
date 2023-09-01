import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MisValidadores } from '../../utils/Validators';

@Component({
  selector: 'app-formulario-medio',
  templateUrl: './formulario-medio.component.html',
  styleUrls: ['./formulario-medio.component.scss']
})
export class FormularioMedioComponent {

  datosPersonalesForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.datosPersonalesForm = new FormGroup({});
    this.construirFormulario()
  }

  private construirFormulario() {
    this.datosPersonalesForm = this.fb.group({
      nombre: ['', [Validators.required, MisValidadores.soloLetras()]],
      apellido: ['', [Validators.required, MisValidadores.soloLetras()]],
      edad: ['', [Validators.required, MisValidadores.numeroEntero()]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      direccion: ['', Validators.required],
      pais: ['', Validators.required],
      aceptarTerminos: [false, Validators.requiredTrue], // Campo de aceptar términos
    });

  }

  get nombreField() {
    return this.datosPersonalesForm.get('nombre');
  }

  get apellidoField() {
    return this.datosPersonalesForm.get('apellido');
  }

  get edadField() {
    return this.datosPersonalesForm.get('edad');
  }

  get correoField() {
    return this.datosPersonalesForm.get('correo');
  }

  get fechaNacimientoField() {
    return this.datosPersonalesForm.get('fechaNacimiento');
  }

  get telefonoField() {
    return this.datosPersonalesForm.get('telefono');
  }

  get direccionField() {
    return this.datosPersonalesForm.get('direccion');
  }

  get paisField() {
    return this.datosPersonalesForm.get('pais');
  }

  get aceptarTerminosField() {
    return this.datosPersonalesForm.get('aceptarTerminos');
  }


  cargarDatos() {
    if (this.datosPersonalesForm.invalid) {
      this.datosPersonalesForm.markAllAsTouched();
      return
    }

    console.log(this.datosPersonalesForm.value)

  }

}
