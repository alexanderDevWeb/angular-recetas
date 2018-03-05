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

  constructor(public recetasService: RecetasService) { 

    this.aRecetas = [];
    this.aRecetas = recetasService.getAll();
  }

  ngOnInit() {
  }

}
