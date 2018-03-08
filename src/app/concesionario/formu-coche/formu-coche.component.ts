import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from '@angular/forms';

import { CochesService } from '../../providers/coches.service';

// npm install --save-dev jquery
import * as $ from 'jquery';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-formu-coche',
  templateUrl: './formu-coche.component.html',
  styleUrls: ['./formu-coche.component.scss']
})
export class FormuCocheComponent implements OnInit {
  formuCoche: FormGroup;

  constructor(private cocheService: CochesService, private fb: FormBuilder) {
    this.crearFormuCoche();
  }

  ngOnInit() {}

  crearFormuCoche(): void {
    console.log('FormuCocheComponent crearFormuCoche');
    this.formuCoche = this.fb.group({
      // FormControl (input) => ['value', [Validaciones]]
      marca: ['', [Validators.required, Validators.minLength(5)]],
      modelo: ['', [Validators.required, Validators.minLength(5)]],
      version: [''],
      foto: [''], // Valor por defecto
      puertas: [''],
      caballos: [''],
      consumo: ['']
    });
  }

  submitar(e): void {
    console.log('FormularioComponent onSubmit()');

    const coche = this.mapearFormularioCoche();

    // Añado la receta mediante el servicio
    this.cocheService.crear(coche);

    // Creo un formulario para resetearlo
    this.crearFormuCoche();

    $('#aspa').click();
  }

  mapearFormularioCoche(): Coche {
    // Recojo los valores mostrados en el formulario
    const marca = this.formuCoche.value.marca;
    const modelo = this.formuCoche.value.modelo;
    const version = this.formuCoche.value.version;
    const foto = this.formuCoche.value.foto
      ? this.formuCoche.value.foto
      : 'coche_default.jpg';
    const puertas = this.formuCoche.value.puertas ? this.formuCoche.value.puertas : 5 ;
    const caballos = this.formuCoche.value.caballos ? this.formuCoche.value.caballos : 100 ;
    const consumo = this.formuCoche.value.consumo ? this.formuCoche.value.consumo : 7 ;

    // Creo un objeto Receta con los valores del formulario
    const coche = new Coche(
      marca,
      modelo,
      puertas,
      foto,
      version,
      caballos,
      consumo
    );

    return coche;
  }

  /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput(control: FormControl): string {
    console.log('Control de estilos');

    const CLASS_ERROR = 'has-error';
    const CLASS_SUCCESS = 'has-success';

    if (control.dirty) {
      return control.valid ? CLASS_SUCCESS : CLASS_ERROR;
    }
  }
}
