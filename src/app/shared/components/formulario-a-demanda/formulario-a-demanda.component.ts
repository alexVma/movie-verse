import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-a-demanda',
  templateUrl: './formulario-a-demanda.component.html',
  styleUrls: ['./formulario-a-demanda.component.scss']
})
export class FormularioADemandaComponent {
  correoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.correoForm = this.fb.group({
      correos: this.fb.array([]),
    });
  }

  get correos() {
    return this.correoForm.get('correos') as FormArray;
  }

  agregarCorreo() {
    const nuevoCorreo = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.correos.push(nuevoCorreo);
  }

  eliminarCorreo(index: number) {
    this.correos.removeAt(index);
  }

  imprimirCorreos() {
    const correosArray = this.correos.controls;
    correosArray.forEach((correoControl, index) => {
      const correo = correoControl.get('email')?.value;
      console.log(`Correo ${index + 1}: ${correo}`);
    });
  }


}
