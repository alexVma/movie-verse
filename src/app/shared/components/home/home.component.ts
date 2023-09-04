import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToMovies() {
    // Redirige a la ruta /peliculas
    this.router.navigate(['/peliculas']);
  }

  redirectToSeries() {
    // Redirige a la ruta /series
    this.router.navigate(['/series']);
  }
}
