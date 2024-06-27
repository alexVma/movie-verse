import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcarComponent } from './marcar/marcar.component';
import { MarcarRoutingModule } from './marcar-routing.module';



@NgModule({
  declarations: [
    MarcarComponent
  ],
  imports: [
    CommonModule,
    MarcarRoutingModule
  ]
})
export class MarcarModule { }
