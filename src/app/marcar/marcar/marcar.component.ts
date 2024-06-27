import { Component } from '@angular/core';
import { MarcarService } from '../../marcar.service';

@Component({
  selector: 'app-marcar',
  templateUrl: './marcar.component.html',
  styleUrls: ['./marcar.component.scss']
})
export class MarcarComponent {
  resultado: any;

  constructor(private marcarService: MarcarService) { }

  confirmAction(action: string): void {
    const isEntrada = action === 'ENTRADA';
    const confirmation = window.confirm(`Vas a registrar\n${action}\n ¿estás seguro de la acción?`);
    if (confirmation) {
      this.marcarService.marcar(5, '', isEntrada, 'rocio.roldan').subscribe(response => {
        this.resultado = response;
      }, error => {
        console.error('Error al registrar', error);
      });
    } else {
      console.log('Cancelar');
    }
  }

}
