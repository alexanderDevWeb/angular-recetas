import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({
  name: 'filterReceta'
})
export class FilterRecetaPipe implements PipeTransform {
  /**
   *Filtro para buscar enuna colección de coches
   *no es case sensitive
   * @param stock : Coche[]
   * @param searchText : string con la marca o modelo del coche
   */
  transform(
    recetario: Receta[],
    searchText: string,
    ch: boolean = false
  ): Receta[] {

    if (!recetario) {
      return [];
    }

    // Si solo está marcado el checked
    if (!searchText && ch) {
      return recetario.filter(it => {
        if (it.isGlutenFree) {
          return it.nombre.toLowerCase();
        }
      });
    }

    // Si no hay criterio devuelve el array tal cual
    if (!searchText) {
      console.log('Filtrando 2!');
      return recetario;
    }

    searchText = searchText.toLowerCase();

    return recetario.filter(it => {
      // Si es gluten free añado y está checeado añado #
      if (ch) {
        if (it.isGlutenFree) {
          return it.nombre.toLowerCase().includes(searchText);
        }
      } else {
        return it.nombre.toLowerCase().includes(searchText);
      }
    });
  }
}
