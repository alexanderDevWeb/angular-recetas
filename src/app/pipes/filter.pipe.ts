import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  /**
   *Filtro para buscar enuna colección de coches
   *no es case sensitive
   * @param stock : Coche[]
   * @param searchText : string con la marca o modelo del coche
   */
  transform(stock: Coche[], searchText: string): Coche[] {

    if (!stock) { return []; }

    // Si no hay criterio devuelve el array tal cual
    if (!searchText) { return stock; }

    searchText = searchText.toLowerCase();
    let marcaModelo = '';
    return stock.filter( it => {
        marcaModelo = it.marca + ' ' + it.modelo;
        marcaModelo = marcaModelo.toLowerCase();
        return marcaModelo.toLowerCase().includes(searchText);
    });
   }

}
