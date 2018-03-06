import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

   // Receta recibida desde el componente padre
  @Input('recetaSel') recetaSel: Receta;

  constructor() {

   }

  ngOnInit() {
  }
}
