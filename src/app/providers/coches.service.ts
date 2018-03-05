import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';

@Injectable()
export class CochesService {
  constructor() {
    console.log('CochesService constructor');
  }

  // Retorna todos los coches que tenemos en stock
  getAll(): Coche[] {
    console.log('CochesService getAll');
    const coches: Coche[] = [];
    let coche;

    const jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach(element => {
      coche = new Coche(
        element.marca,
        element.modelo,
        element.puertas,
        element.foto,
        element.version,
        element.caballos,
        element.consumo
      );

      coches.push(coche);
    });

    return coches;
  }
}
