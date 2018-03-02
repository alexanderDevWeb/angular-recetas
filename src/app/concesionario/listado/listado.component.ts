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

  // Los parámetros de salida se realizan a traves de Eventos
  @Output() cocheSeleccionado = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  emitirEvento(coche) {
    console.log(coche);
    console.log('ConcesionarioComponent recibirCoche %o', coche);

    this.cocheSeleccionado.emit({'coche': coche});

    // Si es el primer coche se muestra.
    // Si es el segundo, el primero pasa a ser el segundo
    // this.coche2 = this.coche1;
    // this.coche1 = coche;
  }

}
