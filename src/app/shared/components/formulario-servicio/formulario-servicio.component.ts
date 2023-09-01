import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../../services/pelicula.service';
import { CreatePeliculaDto } from 'src/app/core/models/dto/pelicula.dto';
import { PeliculaResponseForm } from 'src/app/core/models/pelicula/pelicula-response-forms.model';
import { UpdatePeliculaDto } from 'src/app/core/models/dto/update-pelicula.dto';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.scss']
})
export class FormularioServicioComponent {

  peliculaForm: FormGroup
  peliculasCreadas: PeliculaResponseForm[]
  estaActualizando: boolean;
  idPelicula: number

  constructor(private fb: FormBuilder, private peliculasService: PeliculaService) {
    this.peliculaForm = new FormGroup({})
    this.peliculasCreadas = []
    this.construirFormulario()
    this.estaActualizando = false
    this.idPelicula = 0
  }

  private guardarPelicula() {

    const pelicula: CreatePeliculaDto = {
      categoryId: 5,
      description: this.descripcionField?.value,
      price: this.precioField?.value,
      title: this.tituloField?.value,
      images: [this.imagenesField?.value]
    }

    this.peliculasService.crear(pelicula).subscribe({
      next: (pelicula) => {
        if (pelicula) {
          this.peliculasCreadas.push(pelicula)
          console.log(this.peliculasCreadas)
          // ponemos en blanco nuestro formulario
          this.peliculaForm.reset();
        }
      }
    });
  }

  private actualizarPeliculaServicio() {

    const pelicula: UpdatePeliculaDto = {
      categoryId: 5,
      description: this.descripcionField?.value,
      price: this.precioField?.value,
      title: this.tituloField?.value,
      images: [this.imagenesField?.value]
    }

    this.peliculasService.actualizar(pelicula, this.idPelicula).subscribe({
      next: (peliculaActualizada) => {
        if (peliculaActualizada) {
          // Buscar el índice de la película a actualizar en el arreglo
          const indice = this.peliculasCreadas.findIndex(p => p.id === peliculaActualizada.id);

          if (indice !== -1) {
            // Reemplazar la película antigua con la película actualizada
            this.peliculasCreadas[indice] = peliculaActualizada;
          }
        }
        this.peliculaForm.reset();
        this.estaActualizando = false
        this.idPelicula = 0

      },
      error: (error) => {
        console.error('Error al actualizar la película:', error);
      }
    })

  }

  private eliminarPeliculaServicio(id: number){
    this.peliculasService.eliminar(id).subscribe({
      next: () => {
        // Buscar el índice de la película a eliminar en el arreglo
        const indice = this.peliculasCreadas.findIndex(p => p.id === id);
  
        if (indice !== -1) {
          // Eliminar la película del arreglo
          this.peliculasCreadas.splice(indice, 1);
        }

        this.idPelicula = 0
      },
      error: (error) => {
        // Manejar el error de eliminación si es necesario
        console.error('Error al eliminar la película:', error);
      }
    })
  }


  private construirFormulario() {
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenes: ['', Validators.required]
    })
  }



  get tituloField() {
    return this.peliculaForm.get('titulo');
  }

  get precioField() {
    return this.peliculaForm.get('precio');
  }

  get descripcionField() {
    return this.peliculaForm.get('descripcion');
  }

  get imagenesField() {
    return this.peliculaForm.get('imagenes');
  }

  onGuardarPelicula() {
    if (this.peliculaForm.invalid) {
      console.error('Formulario incorrecto')
      return;
    }

    this.guardarPelicula()
  }

  onActualizarPelicula(pelicula: PeliculaResponseForm) {
    this.peliculaForm.patchValue({
      titulo: pelicula.title,
      precio: pelicula.price,
      descripcion: pelicula.description,
      imagenes: pelicula.images
    });

    this.idPelicula = pelicula.id
    this.estaActualizando = true
  }

  onEliminarPelicula(id: number) {
    this.idPelicula = id
    this.eliminarPeliculaServicio(id);
  }

  onConfirmarActualizar() {
    if (this.peliculaForm.invalid) {
      console.error('Formulario incorrecto')
      return;
    }

    this.actualizarPeliculaServicio()
  }



}
