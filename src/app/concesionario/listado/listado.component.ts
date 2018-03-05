import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  // Parámetro de Entrada desde elComponente Padre al Hijo
  @Input('stock') stock: Array<Coche>;
  @Input('cocheS1') cocheS1: Coche;
  @Input('cocheS2') cocheS2: Coche;

  // Los parámetros de salida se realizan a traves de Eventos
  @Output() cocheSeleccionado = new EventEmitter();


  // Criterio del buscador
  searchText: string;

  constructor() {
    console.log('Coche Seleccionado: ' + this.cocheSeleccionado);
  }

  ngOnInit() {
  }

  emitirEvento(coche) {
    // console.log(coche);
    // console.log(this);
    console.log('ConcesionarioComponent recibirCoche %o', coche);

    this.cocheSeleccionado.emit({'coche': coche});

    // Si es el primer coche se muestra.
    // Si es el segundo, el primero pasa a ser el segundo
    // this.coche2 = this.coche1;
    // this.coche1 = coche;
  }

}
