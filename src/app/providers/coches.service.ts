import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';

@Injectable()
export class CochesService {

  coches: Coche[];

  constructor() {
    console.log('CochesService constructor');
  }

  // Retorna todos los coches que tenemos en stock
  getAll(): Coche[] {
    console.log('CochesService getAll');
    this.coches = [];
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

      this.coches.push(coche);
    });

    return this.coches;
  }

    /**
   * Crear nueva receta
   * @param receta
   */
  crear(coche: Coche): void {
    this.coches.unshift(coche);
  }
}
