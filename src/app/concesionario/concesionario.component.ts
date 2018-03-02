import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock: Array<Coche>;  // Array casteado con tipo Coche
  coche1: Coche;
  coche2: Coche;

  constructor() {
    console.log('ConcesionarioComponent constructor');

    this.coche1 = new Coche('', '');
    this.coche2 = new Coche('', '');

    this.stock = new Array<Coche>();
    this.stock.push( new Coche('Seat', 'Panda', '', 'panda.jpg') );
    this.stock.push( new Coche('Toyota', 'Verso', '', 'verso.jpg') );
    this.stock.push( new Coche('Opel', 'Corsa', 'v1.6', 'corsa.jpg') );
   }

  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');

  }

  recibirCoche(event) {
    console.log('ConcesionarioComponent recibirCoche %o', event);
    console.log(typeof(event));

    // Si es el primer coche se muestra.
    // Si es el segundo, el primero pasa a ser el segundo
    this.coche2 = this.coche1;
    this.coche1 = event.coche;

    console.log(this.coche1);
    console.log(typeof(this.coche1));
  }

}
