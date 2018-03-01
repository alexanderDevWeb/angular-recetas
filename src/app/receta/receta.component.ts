import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  // atributos
  receta: Receta;
  show: boolean;
  glyphicon: string;

  // Solo es posible un constructor
  constructor() {
    console.log('RecetaComponent constructor');
    this.receta = new Receta('Marmitako');

    this.receta.addIngrediente('Pan');
    this.receta.addIngrediente('Chorizo');
    this.receta.addIngrediente('Sal');
    this.receta.addIngrediente('Atun');

    this.receta.cocinero = 'Arzak';

    this.show = false;
    this.glyphicon = 'glyphicon-chevron-down';
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLike() {
    console.log('Click!');
    this.receta.likes++;
  }

  showIngredientes(event) {
    console.log(event);

    // Cambio el valor booleano de true a false y viceversa
    this.show = !this.show;

    // Cambio la dirección del chevron dependiendo del valor del show
    this.glyphicon = this.show
      ? 'glyphicon-chevron-up'
      : 'glyphicon-chevron-down';

    const caret = document.querySelector('.ingredientes i');
    console.log(this.show);

    caret.classList.toggle('fa-caret-up');
    caret.classList.toggle('fa-caret-down');
  }
}
