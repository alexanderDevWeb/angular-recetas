import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';

// npm install --save-dev jquery
import * as $ from 'jquery';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  ingredientes: FormArray;

  constructor(private recetaService: RecetasService, private fb: FormBuilder) {
    console.log('FormularioComponent constructor');
    // Crea un objeto con todos los controles del formulario (Formulario en sí)
    // Es un grupo
    this.crearFormulario();

    // Crea un array de objetos, que a su vez son grupos de controles
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
    console.log('FormularioComponent NgOnInit');
  }

  crearFormulario(): void {
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({
      // FormControl (input) => ['value', [Validaciones]]
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cocinero: ['', [Validators.minLength(5)]],
      gluten: ['no'],
      descripcion: ['', [Validators.required, Validators.minLength(2)]],
      foto: [''], // Valor por defecto

      // Para el array de ingredientes hay que crear un formaArray
      ingredientes: this.fb.array([this.createIngredienteFormGroup()])
    });
  }

  /**
   * Creamos un FormGroup para los Ingredientes
   * */
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  /**
   * Evento para crear un nuevo Ingrediente
   */
  clickOtroIngrediente() {
    console.log('FormularioComponent clickOtroIngrediente');
    this.ingredientes.push(this.createIngredienteFormGroup());
  }

  submitar(e): void {
    console.log('FormularioComponent onSubmit()');

    const receta = this.mapearFormularioReceta();

    // Añado la receta mediante el servicio
    this.recetaService.crear(receta);

    // Creo un formulario para resetearlo
    this.crearFormulario();

    $('#aspa').click();
  }

  /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput(control: FormControl): string {
    const CLASS_ERROR = 'has-error';
    const CLASS_SUCCESS = 'has-success';

    if (control.dirty) {
      return control.valid ? CLASS_SUCCESS : CLASS_ERROR;
    } else {
      return 'form-group';
    }
  }

  mapearFormularioReceta(): Receta {
    // Recojo los valores mostrados en el formulario
    const nombre = this.formulario.value.nombre;
    const descripcion = this.formulario.value.descripcion;
    const foto = this.formulario.value.foto
      ? this.formulario.value.foto
      : '/assets/img/receta_default.jpg';
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

    return receta;
  }
}
