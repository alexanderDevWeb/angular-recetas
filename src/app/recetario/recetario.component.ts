import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
import { RecetasService } from '../providers/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  aRecetas: Array<Receta>; // Se rellenará desde un documento Json.
  recSel: Receta; // Es la receta seleccionada en el listado
  ch: boolean;
  // Criterio del buscador
  searchText: string;

  constructor(public recetasService: RecetasService) {
    this.aRecetas = [];
    this.aRecetas = recetasService.getAll();

    this.ch = false;
  }

  ngOnInit() {
  }


  seleccionReceta(receta) {
    this.recSel = receta;
    console.log(receta);
  }

  comprobarCh(e) {
    console.log('Evento: ' + e.target.checked);

    // Si está checkeado solo filtro los que no tienen gluten
    this.ch = !this.ch;

    console.log('Check: ' + this.ch);
  }

}
