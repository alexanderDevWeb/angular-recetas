import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  // Parámetro de Entrada desde elComponente Padre al Hijo
  @Input('coche') coche: Coche;
  @Input('coche2') coche2: Coche;

  // Los parámetros de salida se realizan a traves de Eventos
  @Output() cocheSeleccionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /*
    Función para Emitir el Evento desde el Hijo hacia el Padre
  */
  // seleccionar($event) {
  //   console.log('Emitimos evento al ComponentePadre');
  //   this.cocheSeleccionado.emit({'coche': this.coche});
  // }

}
