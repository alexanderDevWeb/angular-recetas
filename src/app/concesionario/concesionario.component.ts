import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock: Array<Coche>;  // Array casteado con tipo Coche
  comparador: Array<Coche>;
  coche1: Coche;
  coche2: Coche;

  constructor() {
    console.log('ConcesionarioComponent constructor');

    this.coche1 = new Coche('', '');
    this.coche2 = new Coche('', '');

    // Todos los coches que aparecerán en el listado
    this.stock = new Array<Coche>();
    this.stock.push( new Coche('Seat', 'Panda', 'v1.7', 'panda.jpg') );
    this.stock.push( new Coche('Toyota', 'Verso', 'v2.0', 'verso.jpg') );
    this.stock.push( new Coche('Opel', 'Corsa', 'v1.6', 'corsa.jpg') );

    // Doy valores al resto de campos
    const vals =  [
                  [5, 110, 6],
                  [3, 150, 5],
                  [4, 230, 12]
                  ];
    let x = 0;
    const y = 0;
    for ( const i of this.stock ) {
      // console.log(x);
      i.puertas = vals[x][(y)];
      i.caballos = vals[x][(y + 1)];
      i.consumo = vals[x][(y + 2)];
      x++;
    }

    // Los coches que estarán en el comparador
    this.comparador = new Array<Coche>();
   }

  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');

  }

  recibirCoche(event) {
    console.log('ConcesionarioComponent recibirCoche %o', event);

    // Si es el primer coche se muestra.
    // Si es el segundo, el primero pasa a ser el segundo
    // this.coche2 = this.coche1;
    // this.coche1 = event.coche;

    // Si ya había alguno, pasa a la segunda posición
    if (this.comparador[0]) {
      this.comparador[1] = this.comparador[0];
    }

    // Introduzco los coches enviados desde el listado en el array comparador
    // El recibido entra en la primera posición
    this.comparador[0] = (event.coche);
    // console.log('Coche seleccionado a la primera posición: %o' , this.comparador);
  }

}
