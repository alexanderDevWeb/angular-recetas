import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCKS_RECETAS } from './mocks.recetas';

@Injectable()
export class RecetasService {

  recetas: Receta[];

  constructor() {
    console.log('RecetasService constructor');
  }

  // Retorna todas las recetas que nos pasa el servicio
  getAll(): Receta[] {
    console.log('RecetasService getAll');
    this.recetas = [];
    let receta;

    const jsonData = JSON.parse(MOCKS_RECETAS.recetas);

    jsonData.forEach(element => {
      receta = new Receta(
        element.nombre,
        element.descripcion,
        element.foto,
        element.likes,
        element.cocinero,
        element.isGlutenFree,
        element.ingredientes
      );

      this.recetas.push(receta);
    });

    return this.recetas;
  }

  /**
   * Crear nueva receta
   * @param receta
   */
  crear(receta: Receta): void {
    this.recetas.unshift(receta);
  }
}
