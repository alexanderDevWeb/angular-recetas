import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';
import { CochesService } from '../providers/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock: Array<Coche>;  // Array casteado con tipo Coche
  coche1: Coche;
  coche2: Coche;

  constructor(public cochesService: CochesService) {
    console.log('ConcesionarioComponent constructor');

    this.coche1 = new Coche('', '');
    this.coche2 = new Coche('', '');

    this.stock = new Array<Coche>();
    this.stock = cochesService.getAll();
   }

  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');
    this.stock = this.cochesService.getAll();
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
