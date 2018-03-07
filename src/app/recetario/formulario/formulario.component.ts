import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';

// npm install --save-dev jquery
import * as $ from 'jquery';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private recetaService: RecetasService, private fb: FormBuilder) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormularioComponent NgOnInit');
  }

  crearFormulario(): void {
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({
      // FormControl (input) => ['value', [Validaciones]]
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cocinero: ['', [Validators.minLength(2)]],
      gluten: ['no'],
      descripcion: ['', [Validators.required, Validators.minLength(2)]],
      foto: ['', [Validators.required]] // Valor por defecto
    });
  }

  submitar(e): void {
    console.log('FormularioComponent onSubmit()');

    // Recojo los valores mostrados en el formulario
    const nombre = this.formulario.value.nombre;
    const descripcion = this.formulario.value.descripcion;
    const foto = (this.formulario.value.foto) ? (this.formulario.value.foto) : '/assets/img/receta_default.jpg';
    const likes = 0;
    const cocinero = this.formulario.value.cocinero;
    const gluten = this.formulario.value.gluten === 'si' ? true : false;

    // Creo un objeto Receta con los valores del formulario
    const receta = new Receta(
      nombre,
      descripcion,
      foto,
      likes,
      cocinero,
      gluten
    );

    // Añado la receta mediante el servicio
    this.recetaService.crear(receta);

    // Creo un formulario para resetearlo
    this.crearFormulario();

    $('#aspa').click();
  }
}
